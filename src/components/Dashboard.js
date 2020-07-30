import React, { useContext, useEffect } from 'react';
import Record from './Record';
import { Redirect } from 'react-router-dom';
import appContext from '../contexts/appContext';
import appFunctionsContext from '../contexts/appFunctionsContext';

const Dashboard = () => {
  const { records, isLoggedIn } = useContext(appContext);
  const { fetchRecords } = useContext(appFunctionsContext);

  useEffect(() => { (async () => fetchRecords())() }, [fetchRecords]);

  const recordsList = records.map(record => <Record data={record} key={record._id} />)

  return (
    <React.Fragment>
      {isLoggedIn ? (
      <div id="dashboard" className="page thirdColor">
        <h1>Dashboard</h1>
        {recordsList}
      </div>
      ) : <Redirect to="/login" />
    }
    </React.Fragment>
  )
}

export default Dashboard;