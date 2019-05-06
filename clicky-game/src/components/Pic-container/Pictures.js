import React from 'react';
import './pictures.css';
import Dogs from '../Dogs';

const Pictures = props => (
    <div className='container d-flex flex-wrap justify-content-center'>
     {props.dogs.map((a, i) => <Dogs name={a} key={i} clickEvent={props.clickEvent}/>)}
    </div>
);

export default Pictures;