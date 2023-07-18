import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'

import NavBar from '../../Components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(true)
  return (
    <main className="App">
      {user ?
        <>
          <NavBar/>
          <Routes> 
            {/* Route components in here */}
            <Route path='/orders/new' element={<NewOrderPage/>}/>
            <Route path='/orders' element={<OrderHistoryPage/>}/>
          </Routes>
      </> 
      :
      <AuthPage/>}
    </main>
  );
}

