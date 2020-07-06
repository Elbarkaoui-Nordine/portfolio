import React, { useState, useEffect } from 'react';
import './style.css';
import avatar from './img/nordine.png';
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
            <div className='row justify-content-center  '>    
                <div className='col-xl-4 col-sm-7 col-xs-12'>
                    <h3 className='small-title'>A propos de moi</h3>
                    <p className='meri'> Portant un interet important au monde informatique depuis tout jeune et aimant resoudre des problemes,
                        je suis actuelllement etudiant en developpement web au <a className='meri' href='https://campus.samsung.fr/'><em>Samsung campus</em></a> depuis Decembre 2019
                        ou j'ai pu constituer et travailler sur d'ambitieux projets tous aussi different les un que les autres que ce sois seul ou en equipe.
                        <br/>J'apprecie le sport , les series , les jeux video et la culture japonaise.
                        <br/><br/><u>Ayant pour but de faire ce que j'aime mon metier</u>, je vous souhaite la bienvenue dans mon portfolio.
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
                            Competences:
                            <ul className='pl-3'>
                                -Front-End :
                                <li className='mb-1'>HTML5, CSS3, Javascript, JQuery, ReactJS</li>
                                -Back-End:
                                <li  className='mb-1'>PHP, Symfony, Laravel, NodeJS, ExpressJS, SocketIO, SQL, MongoDB</li>
                                -Autres :
                                <li >Git, GitHub, GitLab, Methode Agile</li>
                            </ul>
                        </li>
                    </ul>                    
                </div>
            </div>
        </div>
    )
}

export default Profile;