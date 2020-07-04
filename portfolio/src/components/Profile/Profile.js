import React, { useState, useEffect } from 'react';
import './style.css';
import avatar from './img/nordine.png';
// import logo from '../img/logo.png';

function Profile() {


    return (
        <div id='profile-section'>
            <div className='background'>
                <div className='row justify-content-center placement'>
                    <div className='row col-12 justify-content-center'>
                        <img id='avatar' className='border border-secondary' src={avatar}/> 
                    </div>
                    <h5>El Barkaoui Nordine</h5>
                </div>
            </div>
            <div className='row justify-content-center about '>    
                <div className='col-8  align-self-center description'>
                    <h5>A propos de moi</h5>
                    <p>Etudiant en developpement web au Samsung campus -Epitech depuis Decembre 2019,</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;