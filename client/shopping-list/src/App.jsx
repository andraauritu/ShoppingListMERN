import './App.css';
import { ItemPage } from './pages/ItemPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

import FakeUserPage from './pages/FakeUserPage';

import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { TokenContext } from './App'; // Add this import statement

export const TokenContext = React.createContext(null); //we write export here so that we can import this context in other files


const ProtectedRoute = ({ element }) => {
  const { token } = useContext(TokenContext);
  return token ? element() : <Navigate to='/login' />;
}

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    console.log('Token:', token);
  }, [token]);
  return (
    <div className='App'>
      {/* this is how we pass the token and setToken to the children components */
        /* we can access the token and setToken in the children components by using useContext hook */
        //otherwise we would have to pass the token and setToken as props to the children components */
      }
      <TokenContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path='shoppinglist' element={<ProtectedRoute element={ItemPage} />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='fakeUser' element={<FakeUserPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
