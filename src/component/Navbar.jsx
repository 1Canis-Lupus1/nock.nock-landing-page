import React from 'react';

const Navbar=()=>{
    return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-right">
            <a class="navbar-brand" href="#">
            <img src="https://drive.google.com/thumbnail?id=1rv7HQd0IG2pDhx7urQ2zB-MuHiSPprE6" /></a>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Sell <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Buy</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Finance</a>
                </li>
                </ul>
                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" style={{clear:'both' , float:'right'}} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> */}
            </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;