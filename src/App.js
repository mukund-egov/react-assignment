import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Form from './Pages/Form';
import Slate from './slate';
import Form1 from './Components/Form1';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import {UserContext} from './Contexts/UserContext';
import { useCallback, useContext } from 'react';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';



function App() {
  const { user, setUser } = useContext(UserContext);


  return (
    // <Login/>
    // <Form/>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/form" element={<Form/>} />
        <Route path="/users" element={<Users/>}/>

      </Routes>
    </Router>




  );
}

export default App;




// <div>
//         {/* <Slate></Slate> */}
//         <Form></Form>
//         {/* <Form1></Form1> */}
//         {/* <Login></Login> */}
// </div>








{/* <Router >
<div className="app">
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<PrivateRoute />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/form" element={<Form />} />
      <Route path="/users" element={<Users />} />
    </Route>
  </Routes>
</div>
</Router> */}