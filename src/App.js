import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import Navbar from './component/Navbar';
import Jumbotron from './component/Jumbotron';
import Content from './component/Content';
import Testimonial from './component/Testimonial';
import Foot from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Content /><br/>
      <Testimonial /><br/>
      <Foot />
    </div>
  );
}

export default App;
