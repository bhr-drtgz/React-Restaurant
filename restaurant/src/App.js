import './App.css';
import Header from './companent/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Foother from './companent/Foother';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
         </Routes>
      <Foother />
     </BrowserRouter>
  );
}

export default App;
