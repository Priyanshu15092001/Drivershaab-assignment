import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setBooks,
  addBook,
  updateBook,
  deleteBook,
} from "../../redux/bookSlice";
import styles from "./BookList.module.css";
import { BookCard } from "./BookCard";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [bookForm, setBookForm] = useState({
    _id: null,
    name: "",
    author: "",
    pages: "",
    price: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/books", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        
        
        dispatch(setBooks(response.data));
        console.log(books);
      } catch (error) {
        console.error("Error fetching books", error);
      }
    };
    fetchBooks();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      dispatch(deleteBook(id));
      // dispatch(setBooks(books.filter((book) => book._id !== id)));
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (bookForm._id) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/books/${bookForm._id}`,
          bookForm,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        dispatch(updateBook(response.data));
      } catch (error) {
        console.error("Error updating book", error);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/books",
          bookForm,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        dispatch(addBook(response.data));
      } catch (error) {
        console.error("Error adding book", error);
      }
    }
    setBookForm({
      _id: null,
      name: "",
      author: "",
      pages: "",
      price: "",
      imageUrl: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.addBookContainer}>
        <div className={styles.addBookLeftContainer}>
        <div className={styles.formContainer}>
          <h2 className={styles.header}>Add Book:</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.input}>
              <label>Book Name:</label>
              <input
                type="text"
                placeholder="Book Name"
                value={bookForm.name}
                onChange={(e) =>
                  setBookForm({ ...bookForm, name: e.target.value })
                }
                required
              />
            </div>

            <div className={styles.input}>
              <label>Author:</label>
              <input
                type="text"
                placeholder="Author"
                value={bookForm.author}
                onChange={(e) =>
                  setBookForm({ ...bookForm, author: e.target.value })
                }
                required
              />
            </div>
            <div className={styles.input}>
              <label>Pages:</label>
              <input
                type="number"
                placeholder="Pages"
                value={bookForm.pages}
                onChange={(e) =>
                  setBookForm({ ...bookForm, pages: e.target.value })
                }
                required
              />
            </div>
            <div className={styles.input}>
              <label>Price:</label>
              <input
                type="number"
                placeholder="Price"
                value={bookForm.price}
                onChange={(e) =>
                  setBookForm({ ...bookForm, price: e.target.value })
                }
                required
              />
            </div>
            <div className={styles.input}>
              <label>Image URL:</label>
              <input
                type="text"
                placeholder="Image URL"
                value={bookForm.imageUrl}
                onChange={(e) =>
                  setBookForm({ ...bookForm, imageUrl: e.target.value })
                }
                required
              />
            </div>
            <div className={styles.input}>
              <button type="submit" className={styles.addButton}>
                {bookForm._id ? "Update" : "Add"} Book
              </button>
            </div>
          </form>
          </div>
        </div>
        <div className={styles.addBookRightContainer}>

        </div>
      </div>

      <div className={styles.bookListContainer}>
        <h2 className={styles.header}>My Book List:</h2>
        <div className={styles.bookList}>
        
          {books.map((book,index) => (
           <BookCard book={book} handleDelete={handleDelete} setBookForm={setBookForm} key={index}/>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default BookList;
