import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useInView } from 'react-intersection-observer';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-vh-100 d-flex align-items-center justify-content-center bg-dark position-relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #1a1a1a)'
      }}
    >
      {/* Noise background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25">
      <div className="position-absolute top-0 start-0 w-100 h-100 noise-bg"></div>
      </div>

      {/* Main content */}
      <Container className="text-center position-relative z-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="display-3 fw-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="text-primary">Cleophas Koech</span>
          </motion.h1>
          
          <motion.p 
            className="fs-4 text-white mb-5 mx-auto"
            style={{ maxWidth: '700px', opacity: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.4 }}
          >
           A passionate <span className="text-primary">Frontend Developer</span> creating modern and responsive web applications
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              href="#contact" 
              variant="primary"
              size="lg"
              className="px-5 py-3 fw-medium rounded-pill shadow"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div 
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ delay: 1 }}
      >
        <div className="animate-bounce">
          <svg 
            className="text-white" 
            width="24" 
            height="24" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;