// import React, { useState } from 'react';
import React from 'react';
import './App.css';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Title from './Components/Title';
import List from './Components/List';
import LoginForm from './Components/LoginForm';
const App = () => {
  // const [chnage, setChnage] = useState(true) 

  // const handleChange = () => {
  //   setChnage(!chnage);
  // }
  return (
    <>
      {/* <Title title="Book-e-sell" desc="Online Book Selling" /> */}
      {/* {chnage ? <Home /> : <About />} */}
      {/* <button onClick={handleChange}>Change Page</button> */}
      <List/>
      <LoginForm/>
    </>

  );
}

export default App;
