import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // ✅ Correct icon
import Container from 'react-bootstrap/Container';

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <footer ref={ref} className="py-5 bg-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="d-flex flex-column align-items-center"
        >
          <a href="#home" className="text-decoration-none fs-1 fw-bold text-white mb-4">
            <span className="text-primary">Port</span>folio
          </a>

          <div className="d-flex gap-4 mb-4">
            <a 
              href="https://github.com/cleokecodespace" 
              className="text-muted text-decoration-none"
              aria-label="GitHub"
            >
              <FaGithub className="fs-3" />
            </a>
            <a 
              href="#" 
              className="text-muted text-decoration-none"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="fs-3" />
            </a>
            <a 
              href="https://x.com/Im_Cleophas" 
              className="text-muted text-decoration-none"
              aria-label="X"
              style={{ color: "#000000" }} // Optional: Use official black color
            >
              <FaXTwitter className="fs-3" /> {/* ✅ Correct icon here */}
            </a>
          </div>

          <ul className="d-flex flex-wrap justify-content-center gap-4 list-unstyled mb-4">
            <li>
              <a href="#home" className="text-muted text-decoration-none">Home</a>
            </li>
            <li>
              <a href="#about" className="text-muted text-decoration-none">About</a>
            </li>
            <li>
              <a href="#projects" className="text-muted text-decoration-none">Projects</a>
            </li>
            <li>
              <a href="#contact" className="text-muted text-decoration-none">Contact</a>
            </li>
          </ul>

          <p className="text-muted text-center mb-0">
            &copy; {new Date().getFullYear()} Cleophas Koech. All rights reserved.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;