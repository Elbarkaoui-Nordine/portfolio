import React, { useState, useEffect } from 'react';
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Projects() {

    var settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
      };

    return (
        <div id="projects-section" >
      
    <Slider {...settings} className='slider d-flex align-content-center'>
        <div>
        <h1 >Name of the project</h1>
          <img src="https://i.pinimg.com/originals/9a/b6/a2/9ab6a2794d0ed343a4c5d489f5d9828d.jpg" />
          <div>
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
            
        </div>
    )
}

export default Projects;