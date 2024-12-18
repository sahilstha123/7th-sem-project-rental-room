import React, { useContext, useEffect } from "react";
import Anil from "../../assets/anil.jpg";
import List from "../../components/list/List";
import "./profilePage.scss";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import NWbutton from "../../components/button/NWbutton";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  // const data = useLoaderData();
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src={currentUser?.user.avatar || "noavatar.jpg"}
                alt="User Avatar"
              />{" "}
            </span>
            <span>
              Username: <b>{currentUser?.user.username || ""}</b>
            </span>
            <span>
              Email : <b>{currentUser?.user.email || ""}</b>
            </span>
            <NWbutton
              style={{
                border: "none",
                width: "100px",
                backgroundColor: "#c82918",
                color: "white",
                padding: "10px 20px",
                cursor: "pointer",
              }}
              onClick={handleLogout}
            >
              Logout
            </NWbutton>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
