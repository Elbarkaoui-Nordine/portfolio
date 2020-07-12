import React, { useState, useEffect } from 'react';
import './style.css';
import avatar from './img/nordine.png';
import Fade from 'react-reveal/Fade';
// import logo from '../img/logo.png';

function Profile() {


    return (
        <div id='profile-section'>
            

         
            <div className='background row '>
                <div className='align-self-center justify-content-center col-12'>
                    <div className='row col-12 justify-content-center'>
                        <img id='avatar' src={avatar}/> 
                    </div>
                    <h1 className='page-title mt-0 mb-1 col-12 open'>El Barkaoui Nordine</h1>
                    <h2 className='meri light-grey title-text mt-0 col-12 text-center'>Développeur web Full-Stack</h2>
                    <h2 className='meri light-grey title-text mt-0 col-12 text-center'>Etudiant au <a className='meri' href='https://campus.samsung.fr/'>Samsung campus</a></h2>
                </div>
            
            </div>
            <Fade left cascade>
            <div className='row justify-content-center  '>    
                <div className='col-xl-4 col-sm-7 col-xs-12'>
                    <h3 className='small-title'>A propos de moi</h3>
                    <p className='meri'> Portant un intérêt important au monde informatique depuis tout jeune et aimant résoudre des problèmes,
                     je suis actuellement étudiant en développement web au <a className='meri' href='https://campus.samsung.fr/'><em>Samsung campus</em></a> depuis décembre 2019 
                     ou j'ai pu constituer et travailler sûr d'ambitieux projets tous aussi different les un que les autres que ce sois seul ou en équipe.
                        <br/>J'apprécie le sport, les series, les jeux vidéo et la culture japonaise.
                        <br/><br/><u>Ayant pour but de faire ce que j'aime mon métier</u>, je vous souhaite la bienvenue dans mon portfolio.
                    </p>
                </div>
                <div className=' col-md-4 col-sm-5 col-xs-12 col-xl-3' id='info'>
                    <h3 className='small-title'>Informations</h3>
                    <ul className='meri'>
                        <li>Nom : El Barkaoui</li>
                        <li>Prenom : Nordine</li>
                        <li>Age : 22 ans</li>
                        <li>Status : Recherche une alternance</li>
                        <li>
                            <h3  className='small-title' style={{fontWeight:"1000"}} >Competences:</h3>
                            <ul className='pl-3'>
                                Front-End :
                                <li className='mb-1'  ><i style={{color:"black"}}>HTML5, CSS3, Javascript, JQuery, ReactJS</i></li>
                                Back-End:
                                <li  className='mb-1'><i style={{color:"black"}}>PHP, Symfony, Laravel, NodeJS, ExpressJS, SocketIO, SQL, MongoDB</i></li>
                                Autres :
                                <li ><i style={{color:"black"}}>Git, GitHub, GitLab, Methode Agile</i></li>
                            </ul>
                        </li>
                    </ul>                    
                </div>
            </div>
            <a href="https://drive.google.com/uc?export=download&id=1SKp3WiEov3WacsEKzsjn-32kMt40eW5u" className='cv-btn'>CV</a>
            </Fade>
        </div>
    )
}
// snap et irc

export default Profile;