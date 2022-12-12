import React, { useState } from "react";
import Modal from "./Modal";
import Star from "./Star";

function BookCard({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail != undefined) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="ratings-container">
                    <p className="rating">
                      <Star stars={item.volumeInfo.averageRating} />
                    </p>
                  </div>
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="publish-date">
                    {item.volumeInfo.publishedDate}
                  </p>
                  <p className="author">
                    Book Author: {item.volumeInfo.authors}
                  </p>

                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
}

export default BookCard;
