import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const TopBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isTopbarOpen, setIsTopbarOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate("/login");
  }
  
  return (
    <div className='topbar'>
      {!isTopbarOpen ? (
      <div className='hamburger' onClick={() => setIsTopbarOpen(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      ) :
      (
        <div className='menu'>
          <p onClick={() => setIsTopbarOpen(false)}>✕</p>
          <p className='profile-ham'>{user.email.charAt(0).toUpperCase()}</p>
          <p onClick={handleLogout}>Logout</p>
        </div>
      )}
      <div className='profile' onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}>
        {user.email.charAt(0).toUpperCase()}
      </div>
      {isProfileModalOpen && (
          <div className='profile-modal'>
            <p className='link' onClick={handleLogout}>Logout</p>
          </div>
        )
      }
    </div>
  )
}

export default TopBar
