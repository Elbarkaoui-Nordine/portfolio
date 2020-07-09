import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './style.css';
import useWindowDimensions from '../GetWindowDimensions';
// import logo from '../img/logo.png';

function NavBar() {
    const { height, width } = useWindowDimensions();
    const [ iconeProject , setIconeProject ] = useState(false);
    const [ iconeProfile , setIconeProfile ] = useState(false);
    let offest = width < 900 ? -85 : 0;    

    return (
        <div id='nav'>


            <div id='logo' className='d-flex align-content-center'>
            <a className='col-12 align-self-center text-center '>N</a>
            </div>


            <div id='navButtons' className="d-flex align-content-center flex-column">
            <Link
                activeClass="active"
                to="profile-section"
                spy={true}
                smooth={true}
                offset={offest}
                duration= {500}
                className='icone'
            >
                <div  class='code-icone' onMouseOver={ () => setIconeProfile(true) } onMouseLeave={() => setIconeProfile(false)}> {iconeProfile ? <p className='icone-text'>Profil</p> : <i class="far fa-user"></i>}</div>
            </Link>
              
        

            <Link
                activeClass="active"
                to="projects-section"
                spy={true}
                smooth={true}
                offset={offest}
                duration= {500}
                className='icone'
            >
                <div  class='code-icone' onMouseOver={ () => setIconeProject(true) } onMouseOut={() => setIconeProject(false)}> {iconeProject ? <p className='icone-text'>Projects</p> : <i class="far fa-file-code"></i>}</div>
            </Link>
            <Link
                activeClass="active"
                to="parcours-section"
                spy={true}
                smooth={true}
                offset={offest}
                duration= {500}
                className='icone'
            >
                <i class="far fa-user"></i>
            </Link>
            </div>

            <div className='socials d-flex align-content-center flex-column'>
            <a href="https://www.linkedin.com/in/nordine-el-barkaoui-90ab291a6/"  className='social-icone'><i class="fab fa-linkedin"></i> </a>
            <a href="https://github.com/Elbarkaoui-Nordine" className='social-icone'><i class="fab fa-github-square"></i> </a>
            <a className='social-icone'><i class="fas fa-envelope-square"></i> </a>
            </div>
        </div>
    )
}

export default NavBar;

/*

Je veux faire un systeme d'onglet 

*/