import React, { useState } from "react";
import "../Css/Headers.css";
import "../Css/StyleGlobal.css";
const Headers = () => {
  const [altura, setAltura] = useState(false);

  return (
    <header className="header flex-between margin-bottom">
      <div className="logo flex-center">
        MOVIES<span className="logo-red">SPOT</span>
      </div>
      
      <nav className="nabvar" style={{height:altura ? "350px" : ""}} >
        <ul className="list_nabvar flex-between">
          <li className="list-item">
            <a className="link-nabvar link-red" href="#home">
              Home
            </a>
          </li>
          <li className="list-item">
            <a className="link-nabvar" href="#gallery">
              Gallery
            </a>
          </li>
          <li className="list-item">
            <a className="link-nabvar" href="#about">
              About
            </a>
          </li>
          <li className="list-item">
            <a className="link-nabvar" href="#movies">
              Movies
            </a>
          </li>
          <li className="list-item">
            <a className="link-nabvar" href="#product">
              Product
            </a>
          </li>
        </ul>
      </nav>     

      <div className="btn_nabvar" onClick={() => setAltura(!altura)}>
        <i className={altura ? "fas fa-times"  : "fas fa-bars"}></i>
      </div>
    </header>
  );
};

export default Headers;
