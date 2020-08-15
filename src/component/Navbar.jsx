import React,{ Component } from 'react';

class Navbar extends Component{
    constructor(){
        super();
    }

  render(){
    return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-right">
            <a class="navbar-brand" href="#">
            <img src="https://drive.google.com/thumbnail?id=1rv7HQd0IG2pDhx7urQ2zB-MuHiSPprE6" /></a>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav navbar-centered">
                <li class="nav-item">
                    <a class="nav-link" href="#">Sell</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Buy</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Finance</a>
                </li>
                </ul>
            </div>
            </nav>
        </React.Fragment>
    );
  }
}

export default Navbar;