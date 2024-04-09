import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RealAdmin.css';
import logo from '../assest/logo.png';
import profileIcon from '../assest/profile.png';
import documentIcon from '../assest/DI2.png';

const RealAdmin = () => {
  const navigate = useNavigate();

  const handleLogout1 = () => {
    navigate('/login');
  };

  const handlePowerUsage = () => {
    navigate('/dashboard'); // Navigate to 'dashboard' route
  };

  const navigateToUserTable = () => {
    navigate('/usertable'); // Navigate to 'usertable' route
  };

  return (
    <div className="admin-page">
      <header className="header">
      </header>
      <div>
        <img src={logo} className="logo" alt="Company Logo" />
        <img src={profileIcon} className="profile-icon" alt="Profile Icon" />
      </div>

      <button className="logout-button1" onClick={handleLogout1}>
        Logout
      </button>
      <div className="content">
        <div className="box1">
          <img src={documentIcon} className='dlogo' alt='' />
          <p>
            <b>Click here for all sector selection details and previous generator reports</b>
          </p>
          <div>
            <button className='button' onClick={navigateToUserTable}>User</button>
          </div>
        </div>

        <div className="box2">
          <img src={documentIcon} className='dlogo' alt='' />
          <p>
            <b>Click here for view power usage reports</b>
          </p>
          <div>
            <button className='button' onClick={handlePowerUsage}>Power Usage</button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className='footer11'>SMART X INDUSTRIES </p>
      </footer>
    </div>
  );
}

export default RealAdmin;
