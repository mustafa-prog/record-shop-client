import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import appContext from '../contexts/appContext';
import appFunctionsContext from '../contexts/appFunctionsContext';

const Login = () => {
    const [ inputs, setInputs ] = useState({ email: '', password: '' });

    const { hasLoginError, isLoggedIn } = useContext(appContext);
    const { handleLogin } = useContext(appFunctionsContext);

    const handleInputsChange = evt => setInputs({ ...inputs, [evt.target.name]: evt.target.value });

    const handleSubmit = evt => {
        evt.preventDefault();
        handleLogin(inputs);
    }

    return (
        <React.Fragment>
            { isLoggedIn ? (
                <Redirect to="/dashboard" />
            ) : (
            <div id="login" className="page thirdColor">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                {hasLoginError && <p className="error">Error logging in. Please try again.</p>}
                <div className="row flex-revcol-left">
                    <input
                    name="email"
                    type="text"
                    value={inputs.email}
                    id="email"
                    required
                    onChange={handleInputsChange}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="row flex-revcol-left">
                    <input
                    name="password"
                    type="text"
                    value={inputs.password}
                    id="password"
                    required
                    onChange={handleInputsChange}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )}
        </React.Fragment>
    )
}

export default Login;