import React, { useState } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './style.scss';



function MenuBar (){

return (
<div className="MenuBar">
    <div className="MenuBar--div">
        <ul className="MenuBar--list">
            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">خانه</li>
            </Link>

            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">بلیط ها</li>
            </Link>
            
            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">جداول</li>
            </Link>
            
            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">گروه ها</li>
            </Link>
            
            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">نتایج</li>
            </Link>
            
            <Link className="MenuBar--link" to="/" >
                <li className="MenuBar--child">امکانات</li>
            </Link>
            
            <li  className="MenuBar--club">کلاب شما
                <i className="fas fa-angle-down"></i>
                <ul>
                    <Link className="MenuBar--link" to="/soccer">
                        <li>فوتبال</li>
                    </Link>
                    
                    <Link className="MenuBar--link" to="/">
                        <li>تنیس</li>
                    </Link>
                    
                    <Link className="MenuBar--link" to="/">
                        <li>بسکتبال</li>
                    </Link>
                </ul>
            </li>
        </ul>
    </div>
</div>
)
}

export default MenuBar;