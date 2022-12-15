import React, { useState } from "react";
import Card from "./BookCard";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from 'axios'

function Author({user, setUser}) {
  const [search, setSearch] = useState("");
  const [bookData,setData]=useState([]);
  const [allBooks, setAllBooks] = useState([]);

  // const getAllBooks = (e) => {
  //   axios.get('https://www.googleapis.com/books/v1/volumes?q' +
  //   '&orderBy=newest' +
  //   // '&filter=free-ebooks'+
  //   '&key=AIzaSyDkfqaTnArpMe76VO0BWNIWdDbut1A4-XM')
  //   .then(res=> setAllBooks(res.data.items))
  //   console.log(allBooks)
  // }
  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:'+search+
      '&orderBy=newest' +
      // '&filter=free-ebooks'+
      '&key=AIzaSyDkfqaTnArpMe76VO0BWNIWdDbut1A4-XM'
      // +'&maxResults=40'
      )
      .then(res=> setData(res.data.items))
      .catch(err=>console.log(err))
    }
  };

//   const sortedBooks = 
//   bookData.sort((a, b) => {
//     return parseInt(b.volumeInfo.publishedDate) - parseInt(a.volumeInfo.publishedDate)
// })

function handleSignOut(event) {
  setUser({});
  document.getElementById("signInDiv").hidden = false;
}

  return (
    <>
      <div className="header">
        <div className="row1">
      
        </div>
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
              {console.log(search)}
            <button>
              <BiSearchAlt2 style={{ fontSize: "30px", color: "rgb(245, 126, 57)", paddingTop: "6px" }} />
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
        {
        //   search.length == 0 ?
        // allBooks && 
        // <Card book ={allBooks}/>
        // : 
        bookData &&
        bookData.length !== 0 ?
        <Card book={bookData} />
        : <h3>Oops, this author doesn't exist!</h3>
        }
      </div>
    </>
  );
}

export default Author;
