import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Pagination from "./Pagination";
import { GET } from "./Fetch";

function Author({ user, handleSignOut }) {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (event) => {
    GET(search, function (res) {
      setData(res);
    });
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchBook();
      console.log(bookData);
    }, 1000);
    return () => clearTimeout(delayDebounce);
  }, [search]);

  return (
    <>
      <div className="header">
        <div className="row1"></div>
        <div className="row2">
          <h2>Find Your Book </h2>
          <div id="search">
            <input
              type="text"
              placeholder="Search for an author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>
              <BiSearchAlt2
                style={{
                  fontSize: "30px",
                  color: "rgb(245, 126, 57)",
                  paddingTop: "6px",
                }}
              />
            </button>
          </div>
          <div className="sign-out-button">
            {Object.keys(user).length !== 0 && (
              <p onClick={(e) => handleSignOut(e)}>Sign Out</p>
            )}
          </div>
        </div>
      </div>
      {bookData && <Pagination bookData={bookData} />}
    </>
  );
}

export default Author;
