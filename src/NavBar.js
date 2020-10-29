import React, {Component} from 'react';

import {NavLink,Route} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function NavBar(){
    return(
        <nav>
            <h3>Logo</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            

        
        </nav>
        
    );
}

export default NavBar;