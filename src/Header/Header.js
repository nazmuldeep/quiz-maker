import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './quiz-logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <p>Quiz Maker</p>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/orders'>Orders</NavLink>
                <NavLink to='/grandpa'>Grandpa</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>

        </nav>
    );
};

export default Header;