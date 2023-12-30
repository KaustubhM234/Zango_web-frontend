import React, { useEffect, useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs"; const about = document.querySelector('.about-section-container');
const offset =async()=>await about.offsetTop;
const [aboutoffset, setaboutoffset] = useState('')
const About = () => {
  const [scroll, setScroll] = useState(null)    
  const about = document.querySelector('.about-section-container');
  const offset =async()=>await about.offsetTop;
 const [aboutoffset, setaboutoffset] = useState('')
  useEffect(() => {
    function handlescroll() {
      setScroll(window.scrollY)
      setaboutoffset(scroll>=offset()?'dsa':'')
    }
window.addEventListener('scroll',handlescroll)
  
    return () => {
      window.removeEventListener('scroll',handlescroll)
      
    }
  }, [])
 

  const imageStyle = {
    filter: 'hue-rotate(180deg)', // Adjust the degree value for the desired blue color
  };
  return (
    <div className={`about-section-container ${aboutoffset} `}>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" style={imageStyle}/>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
