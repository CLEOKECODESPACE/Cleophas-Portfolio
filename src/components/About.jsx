import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload, FaCode, FaServer, FaPalette, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skills = [
    { name: 'React', level: 90, icon: <FaCode className="me-2" /> },
    { name: 'JavaScript', level: 85, icon: <FaCode className="me-2" /> },
    { name: 'HTML/CSS', level: 95, icon: <FaPalette className="me-2" /> },
    { name: 'Node.js', level: 75, icon: <FaServer className="me-2" /> },
    { name: 'UI/UX', level: 80, icon: <FaPalette className="me-2" /> },
    { name: 'Responsive Design', level: 90, icon: <FaMobileAlt className="me-2" /> }
  ];

  return (
    <section id="about" ref={ref} className="py-5 bg-body-secondary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="mx-auto bg-primary" style={{ width: '80px', height: '4px' }} />
          <p className="mt-3 text-muted">My professional journey and skills</p>
        </motion.div>

        <Row className="align-items-center g-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="position-relative"
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 rounded bg-primary opacity-10" />
              <div className="position-relative rounded overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Profile" 
                  className="img-fluid w-100"
                  style={{ minHeight: '400px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-75">
                  <h4 className="text-white mb-0">Cleophas Koech</h4>
                  <p className="text-primary mb-0">Frontend Developer</p>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="h2 fw-bold mb-4">Who am I?</h3>
              <p className="text-body-secondary mb-4 lead">
                I'm a passionate frontend developer with expertise in creating modern and responsive web applications. 
                With a strong foundation in JavaScript and React, I love turning ideas into reality through code.
              </p>
              <p className="text-body-secondary mb-5">
                My journey in web development started 5 years ago, and since then I've worked on various projects 
                ranging from small business websites to complex web applications. I'm constantly learning new 
                technologies to stay ahead in this ever-evolving field.
              </p>

              <div className="mb-5">
                <h4 className="h3 fw-semibold mb-4 d-flex align-items-center">
                  <FaCode className="me-2 text-primary" />
                  My Skills
                </h4>
                <div className="d-grid gap-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="d-flex align-items-center text-body-secondary">
                          {skill.icon}
                          {skill.name}
                        </span>
                        <span className="text-body-secondary">{skill.level}%</span>
                      </div>
                      <div className="w-100 bg-body-tertiary rounded" style={{ height: '8px' }}>
                        <motion.div 
                          className="bg-primary rounded h-100"
                          initial={{ width: 0 }}
                          animate={{ width: inView ? `${skill.level}%` : 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: index * 0.1 + 0.6,
                            type: 'spring',
                            stiffness: 100
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  href="#contact" 
                  variant="primary"
                  className="px-4 py-3 fw-medium d-inline-flex align-items-center"
                  size="lg"
                >
                  <FaDownload className="me-2" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;