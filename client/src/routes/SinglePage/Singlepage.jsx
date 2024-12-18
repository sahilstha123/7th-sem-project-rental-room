import React from "react";
import "./Singlepage.scss";
import { Slider } from "../../components/slider/Slider";
import { singlePostData } from "../../lib/dummydata";
import Mmap from "../../components/map/Mmap";
import { useLoaderData } from "react-router-dom";

export const Singlepage = () => {
  const post = useLoaderData();
  console.log(post);

  const sendMessage = () => {
    console.log("Message sent");
  };

  const savePlace = () => {
    console.log("Place saved");
  };

  // Ensure that latitude and longitude are available
  const latitude = post?.postData?.latitude;
  const longitude = post?.postData?.longitude;

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post?.postData.images || []} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post?.postData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="Location" />
                  <span>{post?.postData.address}</span>
                </div>
                <div className="price">Npr.{post?.postData.price}</div>
              </div>
              <div className="user">
                <img src={post?.user.avatar} alt="User Avatar" />
                <span>{post?.user.username}</span>
              </div>
            </div>
            <div className="bottom">{post?.postDetail.desc}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <div className="featureText">
                <img src="/parking.png" alt="Parking" />
                <span>Parking</span>
                <p>
                  {post?.postDetail.parking === "owner"
                    ? "Available"
                    : "Not available"}
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="featureText">
                <img src="/water.png" alt="Running Water" />
                <span>Running Water</span>
                <p>
                  {post?.postDetail.runningwater === "owner"
                    ? "Available"
                    : "Not available"}
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="featureText">
                <img src="/balcony.png" alt="Balcony" />
                <span>Balcony</span>
                <p>
                  {post?.postDetail.balcony === "owner"
                    ? "Available"
                    : "Not available"}
                </p>
              </div>
            </div>
          </div>

          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/bed.png" alt="Beds" />
              <span>{post?.bedroom} beds</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="School" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post?.postDetail.school > 999
                    ? post?.postDetail.school / 1000 + "km"
                    : post?.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="Bus Stop" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>
                  {post?.postDetail.bus > 999
                    ? post?.postDetail.bus / 1000 + "km"
                    : post?.postDetail.bus + "m"}{" "}
                  away
                </p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            {/* Ensure post has latitude and longitude before rendering map */}
            {latitude && longitude ? (
              <Mmap items={[post]} />
            ) : (
              <p>Location data is unavailable.</p>
            )}
          </div>

          <div className="buttons">
            <button onClick={sendMessage}>
              <img src="/chat.png" alt="Chat Icon" />
              Send a Message
            </button>
            <button onClick={savePlace}>
              <img src="/save.png" alt="Save Icon" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
