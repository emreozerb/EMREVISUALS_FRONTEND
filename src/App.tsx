import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <p>&copy; {new Date().getFullYear()} EmreVisuals. All rights reserved.</p>
              <p className="footer-tagline">Made with passion and creativity</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
