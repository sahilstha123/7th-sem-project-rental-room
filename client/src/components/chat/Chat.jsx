import React from "react";
import "./chat.scss";
import Anil from "../../assets/anil.jpg";

const Chat = () => {
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src={Anil} alt="" />
          <span>Anil Rai</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src={Anil} alt="" />
          <span>Anil Rai</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src={Anil} alt="" />
          <span>Anil Rai</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src={Anil} alt="" />
          <span>Anil Rai</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src={Anil} alt="" />
          <span>Anil Rai</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <div className="chatBox">box</div>
    </div>
  );
};

export default Chat;
