import React, { useContext, useState } from "react";
import Anil from "../../assets/anil.jpg";
import List from "../../components/list/List";
import "./profilePage.scss";
import Chat from "../../components/chat/Chat"; // Make sure Chat component can accept chat data
import apiRequest from "../../lib/apiRequest";
import NWbutton from "../../components/button/NWbutton";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const data = useLoaderData() || { myPosts: [], savedPosts: [], chats: [] }; // Include chats data
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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
                src={currentUser?.user.avatar || "/assets/noavatar.jpg"}
                alt="User Avatar"
              />
            </span>
            <span>
              Username: <b>{currentUser?.user.username || ""}</b>
            </span>
            <span>
              Email : <b>{currentUser?.user.email || ""}</b>
            </span>
            <NWbutton
              disabled={loading}
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
              {loading ? "Logging out..." : "Logout"}
            </NWbutton>
          </div>

          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <List posts={data.myPosts} />

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List posts={data.savedPosts} />
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">
          {/* Pass the chats data to the Chat component */}
          <Chat chats={data.chats} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
