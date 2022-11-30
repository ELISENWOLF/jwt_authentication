import { Outlet } from "react-router-dom";
import "./main.css";

const Layout = () => {
  return (
    <div className="Layout">
      <Outlet />
    </div>
  );
};

export default Layout;
