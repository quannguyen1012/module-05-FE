import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BookEdit() {
  const BOOK_MANAGEMENT_API = "http://localhost:8080/api/user";
  const { bookId } = useParams();
  const isCreate = !bookId;
  const [book, setBook] = useState({});
  let navigate = useNavigate();

  const {name, quantity} = book;

  const onInputChange = (e) => {
    setBook({...book, [e.target.name] : e.target.value});
  }
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

  const handleSubmit = async(e) => {
    axios
      .put(`${BOOK_MANAGEMENT_API}/edit`, book)
      .then(res => {
        alert(
          `${isCreate ? "Create" : "Edit"} book ${JSON.stringify(
            res.data
          )} successfully!!!`
        );
        navigate("/");
      })
      .catch(err => {
        throw err;
      });
  }

  function getBooks() {
    window.location.href = "/";
  }

  return (
    <div>
      <h1>Book Edit</h1>
      <form>
        <div>
          <label>Id</label>
          <input readOnly name="id" value={book.id} onChange= {(e) => onInputChange(e)} />
        </div>
        <div>
          <label>Title</label>
          <input name="name" value={book.name} onChange= {(e) => onInputChange(e)} />
        </div>
        <div>
        <label>Quantity</label>
          <input name="quantity" value={book.quantity} onChange= {(e) => onInputChange(e)} />
        </div>
        <button type="button" onClick={getBooks}>
          Back
        </button>&nbsp;
        <button type="button" onClick={handleSubmit}>
          Edit
        </button>
      </form>
    </div>
  );
}

export default BookEdit;