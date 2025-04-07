import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import { Routes,Route } from 'react-router-dom';
export default function(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
    </Routes>
    
    </>
  );
}