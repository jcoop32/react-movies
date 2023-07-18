import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import MovieListPage from '../MovieListPage/MovieListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../Components/NavBar/NavBar';

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
            <Route path="/" element={<MovieListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
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
