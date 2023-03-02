import React from "react";
import './main.scss'; 
import SearchComponent from "./SearchComponent";

const Main = () => {
    return (
        <div className="container">
            <div className="search-filter">
              <SearchComponent /> 
            </div>
            <div className="countries-cards">

            </div>
        </div>
    )
}

export default Main; 