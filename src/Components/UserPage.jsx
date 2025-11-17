
import React from 'react';
import './UserPage.css';
import movie from "../assets/stranger things.jpg";
import movie1 from "../assets/the crown.jpg";
import movie2 from "../assets/Money Heist.jpg";
import movie3 from "../assets/the witcher.jpg";
import movie4 from "../assets/bridgerton.jpg";
import movie5 from "../assets/hi nanna.jpg";
import movie6 from "../assets/Tourist family.jpg";
import movie7 from "../assets/meiyalagan.jpg"
import movie8 from "../assets/jersey.jpg";
import movie9 from "../assets/Lucky Bashkar.jpg";

function UserPage({ onLogout }) {

    const movies = [
     { id: 1, title: 'Stranger Things', image: movie },
        { id: 2, title: 'The Crown', image: movie1 },
        { id: 3, title: 'Money Heist', image: movie2 },
        { id: 4, title: 'The Witcher', image: movie3 },
        { id: 5, title: 'Bridgerton', image: movie4 },
        { id: 7, title: 'Hi Nanna', image: movie5 },
        { id: 8, title: 'Tourist family', image: movie6 },
        { id: 9, title: 'meiyalagan', image: movie7 },
        { id: 10, title: 'jersey', image: movie8 },
        { id: 11, title: 'Lucky Bashkar', image: movie9 },
    ];

return (
 <div className="user-page">
  <nav className="user-nav">
  <div className="nav-logo">NETFLIX</div>
    <div className="nav-links">
      <a href="#" className="nav-link">Home</a>
      <a href="#" className="nav-link">TV Shows</a>
      <a href="#" className="nav-link">Movies</a>
      <a href="#" className="nav-link">New & Popular</a>
      <a href="#" className="nav-link">My List</a>
    </div>
    <div className="nav-actions">
      <button className="logout-btn" onClick={onLogout}>Sign Out</button>
    </div>
     </nav>
      <section className="hero-section">
        <div className="hero-content">
        <h1>Unlimited movies, TV shows, and more.</h1>
         <p>Watch anywhere. Cancel anytime.</p>
        <button className="play-button">▶ Play</button>
</div>
</section>
  
<section className="content-section">
    <h2>Popular on Netflix</h2>
    <div className="movie-row">
  {movies.slice(0, 5).map(movie => (
  <div key={movie.id} className="movie-card">
  <div className="movie-image">
   <img src={movie.image} alt={movie.title} />
    </div>
     <h3>{movie.title}</h3>
  </div>
        ))}
    </div>
    <div className="movie-row">
     {movies.slice(5, 10).map(movie => (
     <div key={movie.id} className="movie-card">
       <div className="movie-image">
      <img src={movie.image} alt={movie.title} />
      </div>
      <h3>{movie.title}</h3>
     </div>
        ))}
    </div>
</section>
        </div>
    );
}

export default UserPage;
