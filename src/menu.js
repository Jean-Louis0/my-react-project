import React from 'react';
import './Menu.css';
function menu() {
    return (
        <div>
            <div className='navbar'>
            <ul className='navbar-links'>
                <NavLink className={"navbar-link"} to='/'>
                    <li className='nav-item'>Accueil</li>
                </NavLink>
                <NavLink className={"navbar-link"} to='/carousel'>
                    <li className='nav-item'>Carousel</li>
                </NavLink>
                <NavLink className={"navbar-link"} to='/portfolio'>
                    <li className='nav-item'>Portfolio</li>
                </NavLink>
                <NavLink className={"navbar-link"} to='/Services'>
                    <li className='nav-item'>Services</li>
                </NavLink>
                <NavLink className={"navbar-link"} to='/Contact'>
                    <li className='nav-item'>Contact</li>
                </NavLink>
            </ul>
        </div>
        </div>
    );
}

export default menu;