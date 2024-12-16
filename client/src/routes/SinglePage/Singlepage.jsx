import React from "react";
import "./Singlepage.scss";
import { Slider } from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import Mmap from "../../components/map/Mmap";

export const Singlepage = () => {
  const sendMessage = () => {
    // Handle send message logic
    console.log("Message sent");
  };

  const savePlace = () => {
    // Handle save place logic
    console.log("Place saved");
  };

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">${singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <div className="featureText">
                <img src="/parking.png" alt="" />
                <span>Parking</span>
                <p>Yes available</p>
              </div>
            </div>
            <div className="feature">
              <div className="featureText">
                <img src="/water.png" alt="" />
                <span>Running Water</span>
                <p>Yes available</p>
              </div>
            </div>

            <div className="feature">
              <div className="featureText">
                <img src="/balcony.png" alt="" />
                <span>Balcony</span>
                <p>Yes available</p>
              </div>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Mmap items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
