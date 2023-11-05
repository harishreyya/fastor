import React, { useState } from 'react';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import RestaurantList from './Components/RestaurantsList';

function App() {
  const [token, setToken] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage setToken={setToken} />}/>
          <Route path="/restaurants" element={<RestaurantList token={token} />} />
          <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
