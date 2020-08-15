import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './component/Navbar';
import Jumbotron from './component/Jumbotron';
import Content from './component/Content';
import Testimonial from './component/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Content /><br/>
      <Testimonial />
    </div>
  );
}

export default App;
