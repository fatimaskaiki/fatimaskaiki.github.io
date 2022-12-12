import React from "react";
import Star from "./Star";

function Modal({ show, item, onClose }) {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            x
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo?.title}</h1>
              <div className="info-ratings-cont">
                <p className="info-ratings">
                  <Star stars={item.volumeInfo.averageRating} />{" "}
                </p>
                {"("} {item.volumeInfo?.ratingsCount} {"Readers Ratings)"}
              </div>

              <h3>Book Author(s): {item.volumeInfo?.authors} </h3>
              <h4>
                Published By:{" "}
                {item.volumeInfo?.publisher
                  ? item.volumeInfo?.publisher
                  : "Not available"}
                <br />{" "}
                <span>
                  Publish Date:{" "}
                  {item.volumeInfo?.publishedDate === false
                    ? "Not available"
                    : item.volumeInfo?.publishedDate.substring(0, 4)}
                </span>
              </h4>
              <br />
              <a href={item.volumeInfo?.previewLink} target="_blank">
                <button>Preview Book</button>
              </a>
              {item.accessInfo?.epub?.downloadLink != undefined && (
                <a href={item.accessInfo?.epub?.downloadLink} target="_blank">
                  <button className="download">Download</button>
                </a>
              )}
            </div>
          </div>
          <h4 className="description">{item.volumeInfo?.description}</h4>
        </div>
      </div>
    </>
  );
}

export default Modal;
