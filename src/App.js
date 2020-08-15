import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './component/Navbar';
import Jumbotron from './component/Jumbotron';
import Content from './component/Content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Content />
    </div>
  );
}

export default App;
