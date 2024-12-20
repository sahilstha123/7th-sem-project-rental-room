import { useState } from "react";
import "./about.scss";
import Room from "../../assets/RentalRoom.jpg"
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
            <h3>Empowering Your Rental Journey</h3>
            <p>
              Welcome to Our Team! At Our Team (Sahil, Rajan, and Anil), we are
              revolutionizing the rental market with technology. Our platform
              combines the power of the MERN stack—MongoDB, Express.js, React,
              and Node.js—and AI to provide personalized room recommendations
              tailored to your preferences.Our mission is to simplify your
              rental search, save you time, and ensure you find a space that
              feels like home. Every story begins with a vision.
            </p>
            {showMore ? (
              <p>
                What started as a small idea has blossomed into a mission to
                connect tenants and landlords seamlessly. We believe in turning
                dreams into reality, driven by our commitment to excellence and
                innovation. Our focus on core values such as integrity,
                sustainability, and creativity enables us to create meaningful
                solutions that make a difference in your life. We’re more than
                just a tech project. We are a community of passionate
                individuals working towards creating opportunities for everyone
                to thrive in comfortable and affordable spaces. With every step
                we take, our aim is to make a positive impact by empowering
                users with advanced technology and offering accessible solutions
                that transform the rental experience. At [Your Team Name], we’re
                dreamers, doers, and problem-solvers! Our AI-powered rental
                system isn’t just smart—it’s designed to make you feel at home.
                Dive in, explore our platform, and discover a seamless, smart,
                and stress-free way to rent. Let’s make your rental journey
                efficient and enjoyable!
              </p>
            ) : (
              <></>
            )}
            <button
              className="button"
              onClick={() => setShowMore((prevState) => !prevState)}
            >
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
          <img src={Room} alt="img.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
