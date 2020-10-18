import React from "react";
import './header.css';
import logo from '../../assets/dxwand.PNG';

const Header = () => {
    return (
        <div className="header container-fluid d-flex justify-content-around align-items-center">
            <img src={logo} alt='Brand'/>
            <h1>Form Builder</h1>
        </div>
    )
        
    
}

export default Header