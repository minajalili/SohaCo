import React, { useState } from 'react';
import './style.scss';
import logo from '../../logo.svg';
import MenuBar from './MenuBar';

function MainMenu (){
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenuBar = ()=>{
        setShowMenu(!showMenu)
    }
    
return (
    <div>
        
        {
        //toggle for showing MenuBar
            showMenu ? <MenuBar/>:''
        }      
        <div className="MainMenu">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="menu">
                <i className="fas fa-bars" onClick={toggleMenuBar} ></i>
                <p>Menu</p>
            </div>  
        </div>
</div>
)
}

export default MainMenu;