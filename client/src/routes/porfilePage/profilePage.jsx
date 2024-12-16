// import React from "react";
// import Anil from "../../assets/anil.jpg";
// import List from "../../components/list/List";
// import "./profilePage.scss";
// import apiRequest from "../../lib/apiRequest";
// import NWbutton from "../../components/button/NWbutton";
// import { useNavigate } from "react-router-dom";

// const ProfilePage = () => {
//   const navigate = useNavigate();
//   const handleLogout = async () => {
//     try {
//       const res = apiRequest.post("/auth/Logout");
//       localStorage.removeItem("user");
//       navigate("/");
//     } catch (err) {
//       console.logconsole.error();
//     }
//   };
//   return (
//     <div className="profilePage">
//       <div className="details">
//         <div className="wrapper">
//           <div className="title">
//             <h1>User Information</h1>
//             <button>Update Profile</button>
//           </div>
//           <div className="info">
//             <span>
//               Avatar: <img src={Anil} alt="" />{" "}
//             </span>
//             <span>
//               Username: <b> Anil Rai</b>
//             </span>
//             <span>
//               Email : <b> admin@gmail.com</b>
//             </span>
//             <NWbutton
//               style={{
//                 border: "none",
//                 width: "100px",
//                 backgroundColor: "#c82918",
//                 color: "white",
//                 padding: "10px 20px",
//                 cursor: "pointer",
//               }}
//               onClick={handleLogout}
//             >
//               Logout
//             </NWbutton>
//           </div>
//           <div className="title">
//             <h1>My List</h1>
//             <button>Create New Post</button>
//           </div>
//           <List />
//           <div className="title">
//             <h1>Saved List</h1>
//           </div>
//           <List />
//         </div>
//       </div>
//       <div className="chatContainer">
//         <div className="wrapper"></div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
