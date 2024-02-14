import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import Professionals from './components/Professionals';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
        <div>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/professionals" element={<Professionals />}></Route>
            <Route path="/services" element={<Services />}></Route>
            </Routes>
        </div>
    </>
  );
}

export default App;
