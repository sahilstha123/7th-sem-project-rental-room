import React, { useState } from "react";
import "./newPostPage.scss";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

export const NewPostPage = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [desc, setDesc] = useState(""); // State to handle description input
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/post", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          latitude: +inputs.latitude,
          longitude: +inputs.longitude,
          property: inputs.property,
          images: images,
        },
        postDetail: {
          desc: desc, // Using the manual description state
          parking: inputs.parking,
          runningwater: inputs.runningwater,
          balcony: inputs.balcony,
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            {/* Title Input */}
            <div className="item">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter post title"
                required
              />
            </div>

            {/* Price Input */}
            <div className="item">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter price"
                required
              />
            </div>

            {/* Address Input */}
            <div className="item">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter address"
                required
              />
            </div>

            {/* City Input */}
            <div className="item">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                required
              />
            </div>

            {/* Bedroom Input */}
            <div className="item">
              <label htmlFor="bedroom">Bedroom</label>
              <input
                type="number"
                id="bedroom"
                name="bedroom"
                placeholder="Enter number of bedrooms"
                required
              />
            </div>

            {/* Latitude Input */}
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="float"
                id="latitude"
                name="latitude"
                placeholder="Enter latitude"
                required
              />
            </div>

            {/* Longitude Input */}
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="float"
                id="longitude"
                name="longitude"
                placeholder="Enter longitude"
                required
              />
            </div>

            {/* Property Type Input */}
            <div className="item">
              <label htmlFor="property">Property Type</label>
              <input
                type="text"
                id="property"
                name="property"
                placeholder="Enter property type"
                required
              />
            </div>

            {/* Description Input */}
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                name="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Write the description here"
                required
                style={{
                  height: "300px",
                }}
              />
            </div>

            {/* Parking Input */}
            <div className="item">
              <label htmlFor="parking">Parking</label>
              <input
                type="text"
                id="parking"
                name="parking"
                placeholder="Parking availability"
              />
            </div>

            {/* Running Water Input */}
            <div className="item">
              <label htmlFor="runningwater">Running Water</label>
              <input
                type="text"
                id="runningwater"
                name="runningwater"
                placeholder="Running water availability"
              />
            </div>

            {/* Balcony Input */}
            <div className="item">
              <label htmlFor="balcony">Balcony</label>
              <input
                type="text"
                id="balcony"
                name="balcony"
                placeholder="Balcony availability"
              />
            </div>

            {/* School Input */}
            <div className="item">
              <label htmlFor="school">School Distance</label>
              <input
                type="number"
                id="school"
                name="school"
                placeholder="Enter distance to school (km)"
                required
              />
            </div>

            {/* Bus Input */}
            <div className="item">
              <label htmlFor="bus">Bus Distance</label>
              <input
                type="number"
                id="bus"
                name="bus"
                placeholder="Enter distance to bus stop (km)"
                required
              />
            </div>

            <button className="sendButton">Add</button>
            {error && <span>Error: {error}</span>}
          </form>
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            cloudName: "dvbjwkxn1",
            uploadPreset: "smart stay",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
};
