import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login'; 
import Dashboard from './pages/Dashboard';
import Application from './pages/Application';
import Users from './pages/Users'; 
import UserContext from './contexts/UserContext';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';

const App = () => {
  
  const {user, setUser} = useContext(UserContext);

  const [isUserLoaded, setIsUserLoaded] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  },[setUser]);



  useEffect(() => {
    setIsUserLoaded(false);
  }, [user]);

  if (!isUserLoaded) {

    return (
      <Router >
        <div className="app">
          {user && <TopBar />}
          <div className='container'>
            {user && <SideBar />}
            <Routes>
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/application" element={<Application />} />
                <Route path="/users" element={<Users />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
