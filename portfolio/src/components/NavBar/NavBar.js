import React, { useState, useEffect } from 'react';
import './style.css';
// import logo from '../img/logo.png';

function NavBar() {


    return (
        <div id='nav'>
            <div id='logo'>
            <a className='d-flex justify-content-center'>N</a>

            </div>
            <div id='navButtons'>
                <a><i class="fas fa-user-circle"></i></a>
                <a><i class="fas fa-user-circle"></i></a>
                <a><i class="fas fa-user-circle"></i></a>
                <a><i class="fas fa-user-circle"></i></a>
            </div>
        </div>
    )
}

export default NavBar;