import React from "react";

function Search(props) {
  return (
    <div className ='search'>
    	<form onSubmit ={handleSearch}>
            <input value = {searchValue} name = "movies" className = "ml-10 outline outline-2 outline-black rounded-lg h-8" type = "text" placeholder = "Movie Name"></input>
            <button type = "submit" 
            className="outline outline-2 outline-black font-semibold hover:bg-blue-500 hover:text-white hover:outline-none rounded-full text-black p-1 ml-4">Search</button>
        </form> 
     </div> 
  )
};
export default Search
