import React from 'react'
import styles from "./BookCard.module.css";
export const BookCard = ({book,handleDelete,setBookForm}) => {
  return (
    <div key={book._id} className={styles.bookCard}>
    <img src={book.imageUrl} alt={book.name} className={styles.bookImage} />
    <div className={styles.bookDetails}>
      <h3>{book.name}</h3>
      <p> by <span>{book.author}</span> </p>
      <div className={styles.description}>
      <p><span>Pages:</span> {book.pages}</p>
      <p><span>Price:</span> Rs {book.price}/-</p>
      </div>
      <div className={styles.buttons}>
      <button className={styles.editButton} onClick={() => setBookForm(book)}>Edit</button>
      <button className={styles.deleteButton} onClick={() => handleDelete(book._id)} >Delete</button>
      </div>
    </div>
  </div>
  )
}
