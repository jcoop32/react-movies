import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import MovieListPage from '../MovieListPage/MovieListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../Components/NavBar/NavBar';
import { movies } from '../../data';

export default function App() {
  const [user, setUser] = useState(null);

  //get user from login page
  function addNewUser(username) {
    setUser(username);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<MovieListPage movies={movies} />} />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorListPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <>
          <LoginPage addNewUser={addNewUser} />
        </>
      )}
    </main>
  );
}
