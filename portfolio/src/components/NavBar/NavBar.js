import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './style.css';
// import logo from '../img/logo.png';

function NavBar() {


    return (
        <div id='nav'>


            <div id='logo'>
            <a className='d-flex justify-content-center'>N</a>
            </div>


            <div id='navButtons' className="d-flex align-content-center flex-column">
            <Link
                activeClass="active"
                to="profile-section"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
                className='icone'
            >
                <i class="far fa-user"></i>
            </Link>

            <Link
                activeClass="active"
                to="projects-section"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
                className='icone'
            >
                <i class="far fa-user"></i>
            </Link>
            <Link
                activeClass="active"
                to="profile-section"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
                className='icone'
            >
                <i class="far fa-user"></i>
            </Link>
            </div>

            <div className='socials d-flex align-content-center flex-column'>
            <a className='social-icone'><i class="fab fa-linkedin"></i> </a>
            <a className='social-icone'><i class="fab fa-linkedin"></i> </a>
            <a className='social-icone'><i class="fab fa-linkedin"></i> </a>
            </div>
        </div>
    )
}

export default NavBar;

/*

Je veux faire un systeme d'onglet 

*/