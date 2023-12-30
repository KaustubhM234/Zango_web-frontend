import React, { useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import grocerybanner  from "../Assets/grocerybanner.svg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  // const [scroll, setScroll] = useState(null)
  // useEffect(() => {
  //   function handleScroll () {
  //     setScroll(window.scrollY);
  //   }
  //   window.addEventListener("scroll",handleScroll)
  
  //   return () => {
  //     window.removeEventListener("scroll",)
  //   }
  // }, [])
  
  const imageStyle = {
    filter: 'hue-rotate(180deg)', // Adjust the degree value for the desired blue color
  };
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt=""  style={imageStyle}/>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
         Your quick <br />e-commerce grocery delivery platform.          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={grocerybanner} alt=""  className="vertical-animation"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
