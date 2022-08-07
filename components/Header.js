import {CollectionIcon, HomeIcon} from "@heroicons/react/outline"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import watchdLogo from "../logo.png";

const Header = () => {
  return (
    <header className = "flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className ="cursor-pointer mb-2">
          <Link href = "/"><Image src ={watchdLogo} className="object-contain" width = {200} height = {100}/></Link>
        </div>
        <div className ="flex flex-grow justify-evenly max-w-2xl">
            <Link href = "/" ><a><HeaderItem title = "HOME" Icon = {HomeIcon}/></a></Link>
            <div className ="group">
              <HeaderItem title = "COLLECTIONS" Icon = {CollectionIcon}/>
              <ul className ="flex flex-col mr-48 absolute z-10 bg-white rounded-md gap-5 invisible group-hover:visible">
                <Link href = "/?genre=fetchTrending">TRENDING</Link>
                <Link href = "?genre=fetchTopRated">TOP RATED</Link>
                <Link href = "?genre=fetchActionMovies">ACTION</Link>
                <Link href = "?genre=fetchComedyMovies">COMEDY</Link>
                <Link href = "?genre=fetchHorrorMovies">HORROR</Link>
                <Link href = "?genre=fetchRomanceMovies">ROMANCE</Link>
                <Link href = "?genre=fetchMysteryMovies">MYSTERY</Link>
                <Link href = "?genre=fetchSciFiMovies">SCI-FI</Link>
                <Link href = "?genre=fetchWarMovies">WAR</Link>
                <Link href = "?genre=fetchAnimationMovies">ANIMATION</Link>
              </ul>
            </div> 
            <div className='search'>
              <form>
                  <input name = "movies" className = "ml-10 outline outline-2 outline-black rounded-lg h-8 w-72" type = "text" placeholder = "MOVIE NAME"></input>
                  <button type = "submit" 
                  className ="outline outline-2 outline-black font-semibold hover:bg-blue-500 hover:text-white hover:outline-none rounded-full text-black p-1 ml-4">SEARCH</button>
              </form> 
             </div>
        </div>
    </header>
  )
};
export default Header