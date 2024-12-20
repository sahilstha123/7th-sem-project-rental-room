import React from "react";
import "./about.scss";
import Anil from "../../assets/anil.jpg"

const About = () => {
  return (
    <div className="sec">
      <div className="cont">
        <div className="content-section">
          <div className="ttile">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              sed veniam laboriosam culpa fugiat similique soluta porro,
              repudiandae iusto nemo consequuntur cum. Voluptatem, pariatur ab.
            </p>
            <button>
              <a href="">Read more</a>
            </button>
          </div>
          <div className="Social">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="img-section">
          <img src={Anil} alt="img.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
