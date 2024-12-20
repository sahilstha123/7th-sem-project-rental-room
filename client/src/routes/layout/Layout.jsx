import Footer from "../../components/footer/Footer.jsx";
import { useContext } from "react";
import { Navbar } from "../../components/nav/Navbar";
import "./layout.scss";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../../components/footer/Footer";

// Layout Component
function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
// RequireAuth Component
function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout, RequireAuth };
