import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from '../../Components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(true)
  return (
    <main className="App">
      {user ?
        <>
          <NavBar/>
          {/* <Routes>  */}
            {/* Route components in here */}
            {/* <Route path='/orders/new' element={}/>
            <Route path='/orders' element={}/>
          </Routes> */}
      <h1>HEllo</h1>
      </> 
      :
      <h1>not loggin in</h1>
      // <AuthPage/>
    }
    </main>
  );
}

