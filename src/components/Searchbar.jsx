import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./Searchbar.css";

const Searchbar = ({keyword}) => {
 
  return (
      <div >
    <input className="searchbar-style"

     value={keyword}
     placeholder={"search "}
     ></input>
     <SearchIcon/>
   
    
    </div>
  );
}

export default Searchbar