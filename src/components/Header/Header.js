import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const header = () => {
    return (
        <div className="header">

            <img className="logo" src={logo} alt="" />
            <nav><a href="/home">Home</a><a href="/services">Services</a><a href="about">About</a></nav>
        </div>
    );
};

export default header;