import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ showNavbar = true }) => {
  return (
    <div className="min-h-screen bg-[#cff5e7]">
      {showNavbar && <Navbar />}
      <div className="max-w-6xl mx-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
