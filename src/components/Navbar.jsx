import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from '../context/ThemeContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaMoon, FaSun } from 'react-icons/fa';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Lifestyle', href: '#lifestyle' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
      className={`fixed-top z-50 transition-all ${scrolled ? 'py-2 bg-body-tertiary shadow-sm' : 'py-3 bg-transparent'}`}
      style={{ backdropFilter: scrolled ? 'blur(10px)' : 'none' }}
    >
      <Container>
        <Navbar expand="lg" className="p-0">
          <motion.a 
            href="#home"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-decoration-none"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: '1.75rem',
              letterSpacing: '1px',
              background: 'linear-gradient(90deg, #3a7bd5, #00d2ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Portfolio
          </motion.a>

          <div className="d-flex align-items-center gap-3 ms-3">
            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button 
                variant="link" 
                onClick={toggleTheme}
                className={`rounded-circle p-2 d-flex align-items-center justify-content-center ${
                  darkMode ? 'text-warning' : 'text-dark'
                }`}
                style={{ 
                  width: '40px', 
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </Button>
            </motion.div>

            {/* Navbar Toggle */}
            <Navbar.Toggle 
              aria-controls="basic-navbar-nav" 
              className="border-0 shadow-none rounded-circle"
              style={{ 
                width: '40px', 
                height: '40px',
                color: darkMode ? '#fff' : '#000',
                background: 'rgba(255, 255, 255, 0.1)'
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Nav.Link 
                    href={item.href} 
                    className={`text-decoration-none px-3 py-2 rounded-pill ${
                      darkMode ? 'text-white' : 'text-dark'
                    }`}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      fontWeight: 500,
                      border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                      minWidth: '90px',
                      textAlign: 'center'
                    }}
                  >
                    {item.name}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </motion.div>
  );
};

export default NavigationBar;