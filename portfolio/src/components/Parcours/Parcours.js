import React, { useState, useEffect } from 'react';
import './style.css';
import Fade from 'react-reveal/Fade';

function Parcours() {


    return (
        <div id="parcours-section" className='bg-white' >
            <Fade  cascade>

            <div className='row justify-content-center'>
                <div className='col-12 project-bg'>
                    <div className='col-12 text-center text-white mt-5 mb-5'><h3 className=' p-0'>Parcours</h3></div>
                </div>
                <div className='row col-md-10 col-sm-12 d-flex align-items-center'>
                    <div className='col-12 text-center bg-black'>
                        <h3 ><u className='decoration-blue'>Formation</u></h3>
                        <ul>
                            <li className=' ml-4 mt-5'>
                                <h5>SAMSUNG CAMPUS</h5>
                                <p className='color-blue'>Développeur-Intégrateur web Full-Stack, Bac +2 | En cours</p>
                                <div className='meri'>
                                - Formation de Développeur-Intégrateur web Full-Stack, méthodologie pédagogique par projets autonome ou en équipe a Saint-Ouen.
                                </div>
                            </li>
                            <li className=' ml-4 mt-5'>
                                <h5>ASTON ECOLE INFORMATIQUE</h5>
                                <p className='color-blue'>Technicien de maintenance informatique, Niveau IV | 2016  </p>
                                <div className='meri'>
                                - Formation Ecole ASTON du groupe SQLI en Maintenance informatique a Arcueil-Cachan.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 text-center'>
                        <h3><u className='decoration-blue'>Experience professionnelle</u></h3>
                        <ul>
                            <div className='row justify-content-center exp'>
                                <li className='text-left ml-4 mt-5 col-md-5 col-xs-6'>
                                    <h5>BURGER KING </h5>
                                    <p className='color-blue'>EQUIPIER POLYVALENT | 2019</p>
                                    <div className='meri'>
                                    - Participer a la préparation des commandes en suivant le protocole et les recettes préalablement définis.<br/>
                                    - Accueil des clients et prise de leurs commandes</div>
                                </li>
                                <li className='text-left ml-4 mt-5 col-md-5 col-xs-6'>
                                    <h5>LIDL</h5>
                                    <p className='color-blue'>EMPLOYER POLYVALENT | 2019 </p>
                                    <div className='meri'>
                                    - Réassortiment des rayons, aménagement et gestion de leurs produits.<br/>
                                    - Étiquetage et balisage des rayons ainsi que le contrôle de l’évolution
                                    des stocks.<br/>
                                    - Animation commerciale et vente et conseils auprès de la clientèle.<br/>
                                    - Aide en boulangerie</div>
                                </li>
                            </div>
                            <div className='row justify-content-center exp'>
                                <li className='text-left ml-4 mt-5 col-md-5 col-xs-6'>
                                    <h5>POLE EMPLOI</h5>
                                    <p className='color-blue'>AGENT D'ACCEUIL | 2018-2019</p>
                                    <div className='meri'>
                                    - Accompagnement des demandeurs d’emploi dans l’utilisation des outils
                                    digitaux et informatiques.<br/>
                                    - Aide à l’accès et l’utilisation de l’espace personnel des utilisateurs.<br/>
                                    - Information sur les fonctionnalités du site de pole-emploi.fr.</div>
                                </li>

                                <li className='text-left ml-4 mt-5 col-md-5 col-xs-6 exp'>
                                    <h5>OSCARO</h5>
                                    <p className='color-blue'>PRÉPARATEUR DE COMMANDES | 2017</p>
                                    <div className='meri'>
                                    - Lire et constituer une commande client.<br/>
                                    - Scanner des produits et les transporter.<br/>
                                    - Suivre et respecter des consignes de sécurité ainsi qu’une cadence de
                                    travail
                                    </div>
                                </li>   

                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Parcours;