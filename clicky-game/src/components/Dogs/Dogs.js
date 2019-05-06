import React from 'react';


const Dogs = props => (
    <div className="card" onClick={e => props.clickEvent(e.target.src)}>
        <img className ="card-mg-top card-height" src={props.name} alt={props.name} />
    </div>
);

export default Dogs;