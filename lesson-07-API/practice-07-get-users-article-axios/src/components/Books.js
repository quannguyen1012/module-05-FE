import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

function Books() {
    // const BOOK_MANAGEMENT_API = "http://localhost:8080/api/user";
    // const {bookId} = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    setLoading(true);
    loadUsers()
    .then(res => {
      setBooks(res.data);
    })
    .catch(err  => {
      throw err;
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);


  const loadUsers = async () => {
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    return await axios.get("http://localhost:8080/api/user");
  };

    function handleCreate() {
        window.location.href = "/book/add";
    }

    
    return (
        <div>
            <h1>Books</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th colSpan={2}>
                            <button type="button" onClick={handleCreate}>Create</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { books.map(book => (
                         <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <a href={`/book/${book.id}`}>Details</a></td>
                                <td>
                                    <a href={`/book/edit/${book.id}`}>Edit</a></td>
                            </tr>
                      
                    ))}
                </tbody>
              
            </table>
        </div>
    );
}



export default Books;