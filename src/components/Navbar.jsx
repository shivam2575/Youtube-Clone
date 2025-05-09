import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispath = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const toogleMenuHandler = () => {
    dispath(toogleMenu());
  };
  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    setSearchList(json[1]);
    // update cache
    dispath(
      cacheResults({
        [searchQuery]: [...json[1]],
      })
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchList(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className="grid grid-flow-col p-2 md:p-4 m-2 shadow-lg">
      <div className="flex col-span-1 items-center">
        <img
          onClick={toogleMenuHandler}
          className="h-4 md:h-8 md:mx-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <Link to="/">
          <img
            className="h-4 md:h-8 mx-2 cursor-pointer"
            src="https://cdnlogo.com/logos/y/73/youtube.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="col-span-10 flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <input
            className="h-4 text-sm py-1 md:text-lg md:h-full border border-gray-400 px-2 md:p-2 w-1/2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="h-4 md:h-full border border-gray-400 px-2 md:px-4 md:py-2 bg-gray-200 rounded-r-full cursor-pointer">
            <img
              className="h-2 md:h-6 bg-transparent"
              src="https://cdn-icons-png.flaticon.com/512/5680/5680244.png"
              alt="search button"
            />
          </button>
        </div>

        {showSuggestions && searchList.length > 0 && (
          <div className="w-full relative flex justify-center ">
            <ul className="absolute w-1/2 bg-white border border-gray-400 rounded-xl shadow-lg mr-7 md:mr-14 p-2">
              {searchList.map((s) => (
                <li
                  key={s}
                  className="text-sm md:text-lg py-2 shadow-sm hover:bg-gray-200"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex items-center">
        <img
          className="h-6 md:h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Navbar;
