import React from 'react';

const Record = props => (
    <div className="record">
        <p><strong>{props.data.artist}</strong></p>
        <p>{props.data.title}</p>
    </div>
)

export default Record;