import React, { useState } from 'react';
import "./SearchArea.css";
const SearchArea = () => {
  const [isActive, setIsActive] = useState(true); 
  const toggleSearchArea = () => {
    setIsActive(!isActive);  
  };
  return (
    <div className={`search-area ${isActive ? 'search-active' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className="close-btn" onClick={toggleSearchArea}>
              <i className="fas fa-window-close"></i>
            </span>
            <div className="search-bar">
              <div className="search-bar-tablecell">
                <h3>Search For:</h3>
                <input type="text" placeholder="Keywords" />
                <button type="submit">
                  Search <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={toggleSearchArea} className="mobile-show">
        Search
      </button>
    </div>
  );
};

export default SearchArea;
