import React, {Component} from 'react';
import {NavLink,Route} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function NavBar(){
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>Sign Up</li>
            </ul>
            

        
        </nav>
        
    );
}

export default NavBar;