import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const BOOK_MANAGEMENT_API = "http://localhost:8080/api/user";
  const { bookId } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    if (bookId) {
      axios
        .get(`${BOOK_MANAGEMENT_API}/${bookId}`)
        .then(res => {
            setBook(res.data);
        })
        .catch(err => {
          throw err;
        });
    }
  }, [bookId]);

  function getBooks() {
    window.location.href = "/";
  }

  const removeBook = async(e) => {
    if (bookId) {
        axios
        .delete(`${BOOK_MANAGEMENT_API}/delete/${bookId}`)
        .then(res => {
            alert(
                `Remove book ${JSON.stringify(
                  res.data
                )} successfully!!!`
              );
              window.location.href = "/";
        })
        .catch(err => {
          throw err;
        });
    }
  }

  return (
    <div>
      <h1>Book Details</h1>
      <p><b>Id:</b> {book.id}</p>
      <p><b>Title:</b> {book.name}</p>
      <p><b>Quantity:</b> {book.quantity}</p>
      <button type="button" onClick={getBooks}>
        Back
      </button>&nbsp;
      <button type="button" onClick={removeBook}>
        Remove
      </button>
    </div>
  );
}

export default BookDetails;