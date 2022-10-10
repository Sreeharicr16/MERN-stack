// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component }  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
// import Navbar from "./Navigation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signUp';
import SignIn from './pages/login';
import Home from './pages/home';
import Activate from './pages/activation';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
      <Route path='/sign-up' element ={<SignUp/>}></Route>
      <Route path='/signin' element ={<SignIn/>}></Route>
      <Route path='/home' element ={<Home/>}></Route>
      <Route path='/activate' element ={<Activate/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}
export default App;