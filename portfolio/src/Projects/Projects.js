import React, { useState, useEffect } from 'react';
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import commerce from './img/ecomerce.png';
import Maquette from './img/responsive.png';
import htmlpng from './img/html.png';
import csspng from './img/css.png';
import javascriptpng from './img/javascript.png';
import jquerypng from './img/jquery.png';




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
        fade: true,
        centerMode:true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: < SampleNextArrow />
        
      };
      

    return (
        <div id="projects-section" className='bg-white' >

            <div className='row justify-content-center'>
                <div className='col-12 project-bg'>
                    <div className='col-12 text-center text-white'><h3 className=' p-0'>Mes Projets</h3></div>
                    <p className='pt-5 text-center meri' >Voici une liste de projet que j'ai pu faire au cours de mon annee en tant que developpeur web.</p>
                </div>
            
                <Slider {...settings} className='slider d-flex align-content-center  col-md-10 col-sm-10 '>
                <div>
                        <div >
                            <h4 className='col-md-12  mb-0 '>Maquette responsive</h4>
                            <h6 className='pl-3 pb-1 meri text-info'>Duree : 1 semaine</h6>
                        </div>
                        <div className='row justify-content-between'>
                            <img className=' col-md-12 col-lg-6 col-sm-12'  src={Maquette} />
                            <div className=' col-md-12 col-lg-6 col-sm-12  '>
                                <div>
                                    <h5>Description</h5>
                                    <p className='meri'  >Reconstituer un site statique a partir d'une image.<br/> Le site est realiser en  HTML5 et CSS3 avec du JQuery pour le carousel</p>
                                </div>

                                <div className='mt-5'>
                                    <h5>Language utilisee</h5>
                                    <ul className='project-lang mt-2'>
                                        <li><img className='lang-icone' src={htmlpng} />HTML5</li>
                                        <li><img className='lang-icone' src={csspng} />CSS3</li>
                                        <li><img className='lang-icone' src={javascriptpng} />Javascript</li>
                                        <li><img className='lang-icone' src={jquerypng} />JQuery</li>
                                    </ul>
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
    
                    <div>
                        <div >
                            <h4 className='col-md-12  mb-0 '>Maquette responsive</h4>
                            <h5 className='pl-3 pb-1'>Duree : 1 semaine</h5>
                        </div>
                        <div className='row justify-content-between'>
                            <img className=' col-md-12 col-lg-6 col-sm-12'  src={Maquette} />
                            <div className=' col-md-12 col-lg-6 col-sm-12  '>
                                <div>
                                    <h4>Project description</h4>
                                    <p  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin dolor pellentesque libero commodo, mollis luctus elit fringilla. In lobortis viverra urna in maximus. Pellentesque et ultrices risus, ut ullamcorper augue. Praesent vel dui eget augue aliquet imperdiet at non libero. Nullam blandit libero ac tempus consectetur.</p>
                                </div>

                                <div>
                                    <h4>Language used</h4>
                                    <ul>
                                        <li> PHP</li>
                                        <li>PHP</li>
                                        <li>PHP</li>
                                    </ul>
                                </div>

                                <div className='row justify-content-center'>
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
