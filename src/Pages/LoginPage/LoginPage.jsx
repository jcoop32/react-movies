import { useState } from 'react';
import './LoginPage.css';

export default function LoginPage({ addNewUser }) {
  const [newUser, setNewUser] = useState('');

  //sets newuser to user input
  function handleLogin(evt) {
    evt.preventDefault();
    addNewUser(newUser);
  }
  return (
    <>
      <h1 className="LoginPage">LoginPage</h1>
      <form onSubmit={handleLogin} className="container">
        <input
          name="username"
          placeholder="Username"
          value={newUser}
          onChange={(evt) => setNewUser(evt.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
