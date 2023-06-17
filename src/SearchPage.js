import React, { useState, useEffect } from "react";
import bookData from "./books.json";

function SearchResultPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const filtered = bookData.books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Search Result Page</h1>
      <div>
        <input
          type="text"
          placeholder="Search by book name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.name} className="book-box">
              <img src={book.image} alt={book.name} />
              <h3>{book.name}</h3>
              <p>Author: {book.author}</p>
              <p>Progress: {book.progress}%</p>
              <p>Status: {book.status}</p>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResultPage;
