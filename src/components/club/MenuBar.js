import React, { useState } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './style.scss';



function MenuBar (){

return (
<div className="MenuBar">
    <div className="MenuBar--div">
        <ul className="MenuBar--list">
            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">Home</li>
            </Link>

            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">Tickets</li>
            </Link>
            
            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">Tables</li>
            </Link>
            
            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">Socials</li>
            </Link>
            
            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">Results</li>
            </Link>
            
            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">Fixtures</li>
            </Link>
            
            <li  className="MenuBar--club">Your Club
                <i className="fas fa-angle-down"></i>
                <ul>
                    <Link className="MenuBar--link" to="/soccer">
                        <li>Soccer</li>
                    </Link>
                    
                    <Link className="MenuBar--link" to="/">
                        <li>Tennis</li>
                    </Link>
                    
                    <Link className="MenuBar--link" to="/">
                        <li>Basketball</li>
                    </Link>
                </ul>
            </li>
        </ul>
    </div>
</div>
)
}

export default MenuBar;