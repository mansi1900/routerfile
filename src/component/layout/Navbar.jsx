import React from "react";

const Navbar = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
          <a class="navbar-brand" href="#">
            React User
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                    Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            
              
        
            </ul>
          </div>
          </div>
      
      </nav>
    )
}

export default Navbar;