import React, { useState, useEffect } from 'react';
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Commerce from './img/ecomerce.png';
import Maquette from './img/responsive.png';
import Irc from './img/my-irc.png';
import FreeAds from './img/free-ads.png';
import htmlpng from './img/html.png';
import csspng from './img/css.png';
import javascriptpng from './img/javascript.png';
import phppng from './img/php.png';
import jquerypng from './img/jquery.png';
import reactpng from './img/reactjs.png';
import symfonypng from './img/symfony.png';
import laravelpng from './img/laravel.png';
import bladepng from './img/blade.png';
import nodejspng from './img/nodejs.png';
import socketpng from './img/socketio.png';
import Fade from 'react-reveal/Fade';




function Projects() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            id='next'
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            id='prev'
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />     );
      }


    var settings = {
        buttons:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: < SampleNextArrow />
        
      };
      

    return (
        <div id="projects-section" className='bg-white' >
            <div className='row justify-content-center'>
                <div className='col-12 project-bg'>
                    <div className='col-12 text-center text-white mt-5 mb-5'><h3 className=' p-0'>Projets</h3></div>
                </div>
                <p className='pt-5 text-center meri' >Voici une liste non exhaustive de projet que j'ai pu faire au cours de mon année en tant que développeur web.</p>
                <Slider {...settings} className='slider d-flex align-content-center  col-md-10 col-sm-10 '>
                <div>
                    <Fade right cascade>
                        <div >
                            <h4 className='col-md-12  mb-0 '>E-commerce</h4>
                            <h6 className='pl-3 pb-1 meri '>Durée : 1 mois</h6>
                        </div>
                        <div className='row justify-content-between'>
                            <img className=' col-md-12 col-lg-6 col-sm-12' onClick={() => window.location.href = "https://e-8commerce-client.herokuapp.com/"}  src={Commerce} />
                            <div className=' col-md-12 col-lg-6 col-sm-12 mb-3 '>
                                <div>
                                    <h5>Description</h5>
                                    <p className='meri'  >Creation d'un site e-commerce front et back office en groupe de 8 de 1 mois en methode agile.<br/>Juin 2020.</p>
                                </div>

                                <div className='mt-5'>
                                    <h5>Language utilisee</h5>
                                    <div className='row justify-content-center'> 
                                        <ul className='project-lang mt-2 col-5 '>
                                            <li><img className='lang-icone' src={htmlpng} />HTML5</li>
                                            <li><img className='lang-icone' src={csspng} />CSS3</li>
                                            <li><img className='lang-icone pt-2' src={phppng} />PHP</li>
                
                                  
                                        </ul>
                                        <ul className='project-lang mt-2 col-5 '>
                                        <li><img className='lang-icone' src={javascriptpng} />Javascript</li>
                                            <li><img className='lang-icone' src={reactpng} />React</li>
                                            <li><img className='lang-icone' src={symfonypng} />Symfony</li>
                                        </ul>
                                         
                                    </div>
                                </div>

                                <div className='row justify-content-center mt-5'>
                                    <div className='row justify-content-around  col-md-12 col-sm-12'>
                                        <a  className='col-lg-4 col-sm-4 col-xs-12 mb-1  p-0' href='https://e-8commerce-client.herokuapp.com/'><button className=' btn btn-primary'>Demo</button></a>
                                        <a className='col-xl-6 col-lg-7 col-sm-6 p-0' href="https://github.com/Elbarkaoui-Nordine/E-commerce"> <button className='btn btn-primary'> Code source </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade> 
                    </div>
    
                    <div>
                        <div >
                            <h4 className='col-md-12  mb-0 '>Free ads</h4>
                            <h6 className='pl-3 pb-1 meri'>Durée : 1 semaine</h6>
                        </div>
                        <div className='row justify-content-between'>
                            <img className=' col-md-12 col-lg-6 col-sm-12'  onClick={() => window.location.href = "http://mvc-free-ads.herokuapp.com/"} src={FreeAds} />
                            <div className=' col-md-12 col-lg-6 col-sm-12 mb-3  '>
                                <div>
                                    <h5>Description</h5>
                                    <p className='meri'  >Creation d'un site d'annonce realiser en Laravel. <br/>
                                    Avril 2020.</p>
                                </div>

                                <div className='mt-5'>
                                    <h5>Language utilisee</h5>
                                    <div className='row justify-content-center'>
                                        <ul className='project-lang mt-2 col-5 '>
                                            <li><img className='lang-icone' src={htmlpng} />HTML5</li>
                                            <li><img className='lang-icone' src={csspng} />CSS3</li>
                                            <li><img className='lang-icone pt-2' src={phppng} />PHP</li>
                                        </ul>
                                        <ul className='project-lang mt-2 col-5 '>
                                            <li><img className='lang-icone' src={javascriptpng} />Javascript</li>
                                            <li><img className='lang-icone' src={laravelpng} />Laravel</li>
                                            <li><img className='lang-icone' src={bladepng} />Blade</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='row justify-content-center mt-5'>
                                    <div className='row justify-content-around  col-md-12 col-sm-12'>
                                        <a  className='col-lg-4 col-sm-4 col-xs-12 mb-1  p-0' href='http://mvc-free-ads.herokuapp.com/'><button className=' btn btn-primary'>Demo</button></a>
                                        <a className='col-xl-6 col-lg-7 col-sm-6 p-0' href="https://github.com/Elbarkaoui-Nordine/MVC_Free_Ads"> <button className='btn btn-primary'> Code source </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div >
                            <h4 className='col-md-12  mb-0 '>My Irc</h4>
                            <h6 className='pl-3 pb-1 meri'>Durée : 1 semaine</h6>
                        </div>
                        <div className='row justify-content-between'>
                            <img className=' col-md-12 col-lg-6 col-sm-12'  onClick={() => window.location.href = "https://my-irc-nordine.herokuapp.com/"} src={Irc} />
                            <div className=' col-md-12 col-lg-6 col-sm-12 mb-3  '>
                                <div>
                                    <h5>Description</h5>
                                    <p className='meri'  >Creation d'un site de chat avec des salons a l'image de IRC en NodeJs et SocketIO.<br/>
                                    Mai 2020.</p>
                                </div>

                                <div className='mt-5'>
                                    <h5>Language utilisee</h5>
                                    <div className='row justify-content-center'>
                                        <ul className='project-lang mt-2 col-5 '>
                                            <li><img className='lang-icone' src={htmlpng} />HTML5</li>
                                            <li><img className='lang-icone' src={csspng} />CSS3</li>
                                            <li><img className='lang-icone pt-2' src={javascriptpng} />Javascript</li>
                                        </ul>
                                        <ul className='project-lang mt-2 col-5 '>
                                            <li><img className='lang-icone pt-2' src={nodejspng} />NodeJs</li>
                                            <li><img className='lang-icone' src={socketpng} />SocketIO</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='row justify-content-center mt-5'>
                                    <div className='row justify-content-around  col-md-12 col-sm-12'>
                                        <a  className='col-lg-4 col-sm-4 col-xs-12 mb-1  p-0' href='https://my-irc-nordine.herokuapp.com/'><button className=' btn btn-primary'>Demo</button></a>
                                        <a className='col-xl-6 col-lg-7 col-sm-6 p-0' href="https://github.com/Elbarkaoui-Nordine/my_irc"> <button className='btn btn-primary'> Code source </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div >
                            <h4 className='col-md-12  mb-0 '>Maquette responsive</h4>
                            <h6 className='pl-3 pb-1 meri'>Durée : 1 semaine</h6>
                        </div>
                        <div className='row justify-content-between'>
                            <img className=' col-md-12 col-lg-6 col-sm-12'  onClick={() => window.location.href = "https://maquette-responsive-nordine.herokuapp.com/"} src={Maquette} />
                            <div className=' col-md-12 col-lg-6 col-sm-12 mb-3 '>
                                <div>
                                    <h5>Description</h5>
                                    <p className='meri'  >Reconstituer un site statique a partir d'une image.<br/> Le site est realiser en  HTML5 et CSS3 avec du JQuery pour le carousel<br/>
                                    Décembre 2019.</p>
                                </div>

                                <div className='mt-5'>
                                    <h5>Language utilisee</h5>
                                    <div className='row justify-content-center'>
                                    <ul className='project-lang mt-2 col-5'>
                                        
                                        <li><img className='lang-icone' src={htmlpng} />HTML5</li>
                                        <li><img className='lang-icone' src={csspng} />CSS3</li>
                                        <li><img className='lang-icone' src={javascriptpng} />Javascript</li>
                                    </ul>
                                    <ul className='project-lang mt-2 col-5'>
                                        
                                        <li><img className='lang-icone' src={jquerypng} />JQuery</li>
                                    </ul>
                                    </div>
                                </div>

                                <div className='row justify-content-center mt-5'>
                                    <div className='row justify-content-around  col-md-12 col-sm-12'>
                                        <a  className='col-lg-4 col-sm-4 col-xs-12 mb-1  p-0' href='https://maquette-responsive-nordine.herokuapp.com/'><button className=' btn btn-primary'>Demo</button></a>
                                        <a className='col-xl-6 col-lg-7 col-sm-6 p-0' href="https://github.com/Elbarkaoui-Nordine/Maquette-responive"> <button className='btn btn-primary'> Code source </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </Slider>
            </div>
      
            
        </div>
    )
}

export default Projects;
