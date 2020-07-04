import React, { useState, useEffect } from 'react';
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import commerce from './img/ecomerce.png';




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
        <div id="projects-section" >

            <div className='row justify-content-center'>
                <div className='col-12 text-center text-white'><h3 className=' p-0'>My Projects</h3></div>
                <p>Voici une liste de projet que j'ai pu faire au cours de mon annee en tant que developpeur web.</p>

                <Slider {...settings} className='slider d-flex align-content-center col-xs-1 col-md-10 col-sm-10 '>
                <div>
                        <div >
                            <h4 className='col-md-12'>Project name</h4>
                        </div>
                        <div className='row justify-content-between'>
                            <img className='col-md-6 ' src={commerce} />
                            <div className='col-md-6 '>
                                <div>
                                    <h4>Project description</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin dolor pellentesque libero commodo, mollis luctus elit fringilla. In lobortis viverra urna in maximus. Pellentesque et ultrices risus, ut ullamcorper augue. Praesent vel dui eget augue aliquet imperdiet at non libero. Nullam blandit libero ac tempus consectetur.</p>
                                </div>

                                <div>
                                    <h4>Language used</h4>
                                    <ul>
                                        <li>PHP</li>
                                        <li>PHP</li>
                                        <li>PHP</li>
                                    </ul>
                                </div>

                                <div className='row justify-content-center'>
                                    <div className='row justify-content-between col-8'>
                                        <button className='col-5  btn btn-primary'>Demo</button>
                                        <button className='col-6 btn btn-primary'>Source code</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div>
                        <div >
                            <h4 className='col-md-12'>Project name</h4>

                        </div>
                        <div className='row justify-content-between'>
                            <img className='col-md-6 ' src={commerce} />
                            <div className='col-md-6 '>
                                <div>
                                    <h4>Project description</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin dolor pellentesque libero commodo, mollis luctus elit fringilla. In lobortis viverra urna in maximus. Pellentesque et ultrices risus, ut ullamcorper augue. Praesent vel dui eget augue aliquet imperdiet at non libero. Nullam blandit libero ac tempus consectetur.</p>
                                </div>

                                <div>
                                    <h4>Language used</h4>
                                    <ul>
                                        <li>PHP</li>
                                        <li>PHP</li>
                                        <li>PHP</li>
                                    </ul>
                                </div>

                                <div className='row justify-content-center'>
                                    <div className='row justify-content-between col-8'>
                                        <button className='col-5'>Demo</button>
                                        <button className='col-5'>Source code</button>
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























































/*
    <Slider {...settings} className='slider d-flex align-content-center'>
        <div>
        <h1 >Name of the project</h1>
            <div className='d-flex justify-content-between'>
                <img  className='col-3' src="https://i.pinimg.com/originals/9a/b6/a2/9ab6a2794d0ed343a4c5d489f5d9828d.jpg" />
                <div className='col-8'>
                <h4>Objective of project</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing.</p>
                <h4>Language used</h4>
                    <ul>
                        <li>PHP</li>
                        <li>Javascript</li>
                        <li>MySQL</li>
                    </ul>
                    <div>
                        <button>Website</button>
                        <button>Source Code</button>
                    </div>
                </div>
             </div>
        </div>
        <div>
        <img src="https://i.pinimg.com/originals/9a/b6/a2/9ab6a2794d0ed343a4c5d489f5d9828d.jpg" />
        </div>
        <div>
        <img src="https://i.pinimg.com/originals/9a/b6/a2/9ab6a2794d0ed343a4c5d489f5d9828d.jpg" />
        </div>
        <div>
        <img src="https://i.pinimg.com/originals/9a/b6/a2/9ab6a2794d0ed343a4c5d489f5d9828d.jpg" />
        </div>
        <div>
        <img src="https://i.pinimg.com/originals/9a/b6/a2/9ab6a2794d0ed343a4c5d489f5d9828d.jpg" />
        </div>
        <div>
        <img src="https://i.pinimg.com/originals/9a/b6/a2/9ab6a2794d0ed343a4c5d489f5d9828d.jpg" />
        </div>
      </Slider>
      */