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
          phoneNumber: parseInt(inputs.phoneNumber),
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
                min={2000}
                step={500}
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
            {/* Phone Number Input */}
            <div className="item">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter phone number"
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
                min={1}
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
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="Apartment">Apartment</option>
                <option value="SingleRoom">Single Room</option>
                <option value="TwoRoom">Two Room</option>
              </select>
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

              <select name="parking">
                <option value="NotAvailable">Not Available</option>
                <option value="Available">Available</option>
              </select>
            </div>

            {/* Running Water Input */}
            <div className="item">
              <label htmlFor="runningwater">Running Water</label>
              <select name="runningwater">
                <option value="NotAvailable">Not Available</option>
                <option value="Available">Available</option>
              </select>
            </div>

            {/* Balcony Input */}
            <div className="item">
              <label htmlFor="balcony">Balcony</label>
              <select name="balcony">
                <option value="NotAvailable">Not Available</option>
                <option value="Availabel">Available</option>
              </select>
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
                min={1}
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
