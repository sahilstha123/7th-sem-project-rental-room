import { useState } from "react";
import "./about.scss";
import Anil from "../../assets/anil.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="sec">
      <div className="cont">
        <div className="content-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              sed veniam laboriosam culpa fugiat similique soluta porro,
              repudiandae iusto nemo consequuntur cum. Voluptatem, pariatur
            </p>
            {showMore ? (
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat sed veniam laboriosam culpa fugiat similique soluta
                porro, repudiandae iusto nemo consequuntur cum. Voluptatem,
                pariatur ab Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Quaerat sed veniam laboriosam culpa fugiat similique
                soluta porro, repudiandae iusto nemo consequuntur cum.
                Voluptatem, pariatur ab
              </p>
            ) : (
              <></>
            )}
            <button className="button" onClick={()=>setShowMore(!showMore)}>
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="social">
            <a href="">
              <FaFacebookF className="icon" />
            </a>
            <a href="">
              <FaTwitter className="icon" />
            </a>
            <a href="">
              <FaInstagram className="icon" />
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
