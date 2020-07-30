import React, { useState, useEffect } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

import appContext from './contexts/appContext';
import appFunctionsContext from './contexts/appFunctionsContext';

import './scss/App.scss';

function App() {

  // https://www.smashingmagazine.com/2020/04/react-hooks-best-practices/
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ user, setUser ] = useState({});
  const [ auth, setAuth ] = useState(null);
  const [ hasLoginError, setHasLoginError ] = useState(false);
  const [ records, setRecords ] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      setAuth(token);
      setUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  const url = 'https://dataserver-recordshop.alexmenger.me';

  const handleLogin = async credentials => {
    try {
      const res = await fetch(`${url}/api/users/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.status === 200) {
        const payload = await res.json();
        const token = res.headers.get('x-auth-token');
        setIsLoggedIn(true);
        setUser(payload);
        localStorage.setItem('user', JSON.stringify(payload));
        setAuth(token);
        localStorage.setItem('token', JSON.stringify(token));
        setHasLoginError(false);

      }
      else setHasLoginError(true);
    } catch(err) {
      console.log(err);
    }
  };

  const fetchRecords = async () => {
    try {
      const res = await fetch(`${url}/api/records`, {
        method: 'GET',
        headers: {
          'x-auth-token': auth
        }
      });
      const data = await res.json();
      setRecords(data);
    } catch(err) {
      console.log(err);
    }
  } 

  return (
    <BrowserRouter>
      <div className="App">
        <appContext.Provider value={{ isLoggedIn, hasLoginError, user, records }}>
          <appFunctionsContext.Provider value={{ setIsLoggedIn, handleLogin, fetchRecords, setAuth }}>
            <Navigation />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/" component={Home} />
              <Route>
                <NotFound/>
              </Route>
            </Switch>
          </appFunctionsContext.Provider>
        </appContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;