import React, { useState } from 'react'
import ReactPaginate from "react-paginate";
import Card from "./BookCard";

function Pagination({bookData}) {
    const [currentPage, setCurrentPage] = useState(0);
    
    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE; // number of items displayed by prev pages
    const currentPageData = bookData && bookData.slice(offset, offset + PER_PAGE); // render data from to
    const pageCount = Math.ceil(bookData && bookData.length / PER_PAGE);
  
    // sets currentPage when new page is clicked
    function handlePageClick({ selected: selectedPage }) {
      setCurrentPage(selectedPage);
    }
  return (
    <>
      <div className="container">
        {bookData && bookData.length !== 0 ? (
          <Card book={currentPageData} />
        ) : (
          <h3>Oops, this author doesn't exist!</h3>
        )}
      </div>
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
  </>
  )
}

export default Pagination