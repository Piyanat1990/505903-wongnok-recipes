import Home from './components/Home';
import About from './components/About';
import Foods from './components/Foods';
import Login from './components/LogIn';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Details from './components/Details';

// /about=>about
// /manu => manu

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/foods" element={<Foods />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>
        <Route path="/info" element={<Navigate to="/about" />}></Route>
        <Route path="/foods/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;