import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { LoginProvider } from './components/LoginContext';
import { FormProvider } from './components/FormContext';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import './components/Navbar.css'
function App() {
    const location = useLocation();

    // Check if the current path is the login page
    const isLoginPage = location.pathname === '/';

    return (
      <ErrorBoundary>
        <LoginProvider>
          <FormProvider>
            {/* <div > */}
              <Navbar />
              
                <div className='container'>  
                {!isLoginPage && <Sidebar />}
                {/* <Outlet /> */}
                {/* <div className='middle-div'>HELLO</div> */}
                <div className='middle-div'>
                  <Outlet />
                </div>
                  {/* <div > */}
                  {/* <Outlet className='middle-div' /> */}
                  {/* </div> */}
                </div>
              
            {/* </div> */}
            {/* <div class="container">
              <div class="side-div">Side</div>
              <div class="middle-div">Middle</div>
            </div> */}
          </FormProvider>
        </LoginProvider>
      </ErrorBoundary>
    );
}

export default App;