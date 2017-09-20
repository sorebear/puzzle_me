import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
    console.log(props);
    return (
        <ul className="nav justify-content-between header">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">
                    <i className="icon-style fa fa-bars"></i>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/home"  className="nav-link">
                    <h2><span className="title" style={{color: "rgb(217,83,79)"}}>puzzle</span>ME</h2>
                </NavLink>
            </li>
            <li className="nav-item">
                <i className="icon-style fa fa-info nav-link" onClick={props.callModal}></i>
            </li>
        </ul>
    )
}