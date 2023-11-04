import './App.css';

import { Route, Routes } from 'react-router-dom';
import { ItemPage } from './pages/ItemPage';
import { LoginPage } from './pages/LoginPage';

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ItemPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>

    </div>
  );
}

export default App;
