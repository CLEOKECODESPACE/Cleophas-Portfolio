import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Lifestyle from './components/Lifestyle';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Create a separate Home component
const Home = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <Hero />
        <About />
        <Lifestyle />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
