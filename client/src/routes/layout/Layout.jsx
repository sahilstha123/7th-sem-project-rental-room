import Footer from "../../components/footer.jsx/Footer";
import { Navbar } from "../../components/nav/Navbar";
import "./layout.scss";
import { Outlet } from "react-router-dom";

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