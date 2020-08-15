import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Content from './component/Content';
import Testimonial from './component/Testimonial';
import Foot from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Content /><br/>
      <Testimonial /><br/>
      <Foot />
    </div>
  );
}

export default App;
