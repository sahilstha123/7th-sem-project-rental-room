import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { currentUser } = useContext(AuthContext);
  // useEffect(() => {
  //   const socketInstance = io("http://localhost:4000"); // Make sure this is the correct URL
  //   setSocket(socketInstance);

  //   console.log("first", socketInstance);

  //   // Cleanup on component unmount
  //   return () => {
  //     socketInstance.disconnect();
  //   };
  // }, []);
  // useEffect(() => {
  //   currentUser && socket.emit("newUser", currentUser.id);
  // }, [currentUser, socket]); // Empty dependency array to only run once when the component mounts

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
