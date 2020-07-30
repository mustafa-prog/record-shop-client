import React from 'react';

import error from '../assets/error.png';

const NotFound = () => (
    <div id="notfound" className="page thirdColor">
        <h1>Sorry, Not Found</h1>
        <img src={error} alt="Not Found" />
    </div>
)

export default NotFound;
