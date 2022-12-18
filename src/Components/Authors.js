import React, { useState } from "react";
import Card from "./BookCard";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import ReactPaginate from "react-paginate";

function Author({ user, setUser }) {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const apiKey = "AIzaSyDkfqaTnArpMe76VO0BWNIWdDbut1A4-XM";

  const searchBook = (event) => {
    if (search !== " ") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
            search +
            "&maxResults=40" +
            "&orderBy=newest" +
            // '&filter=free-ebooks'+
            "&key=" +
            apiKey
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    } else if (event.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
            search +
            "&maxResults=40" +
            "&orderBy=newest" +
            // '&filter=free-ebooks'+
            "&key=" +
            apiKey
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  //   const sortedBooks =
  //   bookData.sort((a, b) => {
  //     return parseInt(b.volumeInfo.publishedDate) - parseInt(a.volumeInfo.publishedDate)
  // })

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = bookData
    .slice(offset, offset + PER_PAGE);
    const pageCount = Math.ceil(bookData.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
      setCurrentPage(selectedPage);
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

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
              onKeyPress={searchBook}
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
      <div className="container">
        {currentPageData && currentPageData.length !== 0 ? (
          <>
          <Card book={currentPageData} />
          
          <div>
              <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"pagination-link"}
        nextLinkClassName={"pagination-link"}
        disabledClassName={"link-disabled"}
        activeClassName={"link-active"}
      />
          </div>
          </>
        ) : (
          <h3>Oops, this author doesn't exist!</h3>
        )}
      </div>
    </>
  );
}

export default Author;
