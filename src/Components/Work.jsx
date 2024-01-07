import {React , useEffect} from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { motion , useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  const imageStyle = {
    filter: 'hue-rotate(180deg)', // Adjust the degree value for the desired blue color
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How do we earn</h1>
        <p className="primary-text">
        Wholesale distribution model and subscription model for merchants and customers.</p>
      </div>
      <div className="work-section-bottom">
      {workInfoData.map((data, index) => (
        <motion.div
          key={data.title}
          className="work-section-info"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1.5, delay: index * 0.1 }}
        >
          <div className="info-boxes-img-container">
            <img src={data.image} alt="" style={imageStyle} />
          </div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Work;