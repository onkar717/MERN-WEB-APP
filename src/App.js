import { Route, Routes } from 'react-router-dom';
import './App.css';
import BasicNavbar from './Components/Navbar';
import './index.css'; 
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import Error from './Components/Error';

function App() {
  return (
    <>
      <BasicNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
