import React, { useEffect, useState } from 'react';
import './style.scss';



function Search (){
    const [countries, setCountries] = useState([]);
    const [dropDown,setDropDown] = useState(true);

    useEffect(()=>{
        getCountries();
    },[])

    // fetch countries name from API

    const getCountries = async ()=>{
        const Response = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await Response.json();
        setCountries(data.map(item=>{return item.name}));
    }
    
    // function for showing countries list in dropDown menu
    const changeDropDown =() => {
        setDropDown(!dropDown)
        const selectBar = document.querySelector(".countries_bar")
        const toggleOptions = document.querySelector(".Search");

        if(dropDown){
            selectBar.classList.remove("up");
            toggleOptions.classList.add("toggle_background");
            toggleOptions.classList.add("drop-down-toggle");
            selectBar.classList.add("down");
        }else{
            selectBar.classList.remove("down");
            toggleOptions.classList.remove("toggle_background");
            toggleOptions.classList.remove("drop-down-toggle");
            selectBar.classList.add("up");
        }
    }
    // select the country name from list 
    const selectCountry =(e)=>{
        document.querySelector(".countries_input").innerHTML=`${e.target.textContent}`;
        changeDropDown();

    }
    

return (
    <div className="soccer">
        <h1>Search your Club</h1>
        <div className="Search">
            <div className="countries_bar up" onClick={changeDropDown}>
                <h3 className="countries_input">select your country</h3>
                {
                dropDown?
                <i className="fas fa-arrow-down"></i> : 
                <div className="deopDown-close">
                    <p>close</p>
                    <i className="fas fa-times"></i>
                </div>
                }
            </div>
            <div className="drop-down" style={{display:dropDown? 'none':'inline-block'}}>
                <ul>
                    {
                        countries.map(country =>( 
                            <li onClick={selectCountry} key={country} >
                                <label >{country}</label>
                            </li>
                        )) 
                    }
                </ul>
            </div>
        </div>
    </div>
)
}

export default Search;