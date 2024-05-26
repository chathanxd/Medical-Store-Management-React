import React from 'react';
import image from "./images/image1.jpg";
import "./App.css";
import Navbar from './components/Navbar';
function App() {
  return (
  <div>
    <Navbar/>
  <h1 className="greetingStyle">Welcome to the Store</h1>
  <div>
  <img src={image} className='image'/>
  </div>
  </div>
  );
}
export default App;




