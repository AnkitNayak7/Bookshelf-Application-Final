import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchResultPage from "./SearchPage";
import "./styles.css"; // Import the CSS file
import booksData from "./books.json"; // Import the books data from books.json

function App() {
  return (
    <Router>
      <div>
        <header className="navbar">
          <div className="logo-container">
            <img
              src="https://cdn.dribbble.com/users/4494514/screenshots/15009533/artboard_6_copy_4.png"
              alt="Logo"
              className="logo"
            />
          </div>
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/">MyBooks</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  const books = booksData.books;

  // Filter the books based on their status
  const currentlyReadingBooks = books.filter(
    (book) => book.status === "In Progress"
  );
  const wantToReadBooks = books.filter(
    (book) => book.status === "Want to Read"
  );
  const readBooks = books.filter((book) => book.status === "Read");

  return (
    <div>
      <h1>My Books</h1>

      <div className="section">
        <h2>Currently Reading</h2>
        <div className="book-row">
          {currentlyReadingBooks.map((book) => (
            <div key={book.name} className="book-box">
              <img src={book.image} alt={book.name} />
              <h3>{book.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Want to Read</h2>
        <div className="book-row">
          {wantToReadBooks.map((book) => (
            <div key={book.name} className="book-box">
              <img src={book.image} alt={book.name} />
              <h3>{book.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Read</h2>
        <div className="book-row">
          {readBooks.map((book) => (
            <div key={book.name} className="book-box">
              <img src={book.image} alt={book.name} />
              <img
                src={book.image}
                alt={book.name}
                className="compressed-image"
              />
              <h3>{book.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
