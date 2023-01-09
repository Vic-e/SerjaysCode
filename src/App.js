import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
import Rates from './pages/Rates';
import Home from './pages/Home';
import Sitters from './pages/Sitters';
import Contact from './pages/Contact';
import CreatePosting from './postings/New';
import SitterPage from './pages/SitterPage';
import Postings from './pages/Postings';
import Edit from './postings/Edit'

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sitters" element={<Sitters/>} />
        <Route path="/about" element={<About />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookus" element={<CreatePosting />} />
        <Route path="/sitter/:index" element={<SitterPage />} />
        <Route path="/postings" element={<Postings />} />
        {/* <Route path="/edit/:id" element={<Edit />} /> */}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
