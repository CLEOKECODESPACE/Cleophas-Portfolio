import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with cart functionality, user authentication, and Stripe payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application with drag-and-drop functionality, real-time updates, and Firebase backend.",
      tags: ["React", "Firebase", "Material UI"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio with smooth animations, dark mode, and contact form.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast, location search, and interactive charts.",
      tags: ["JavaScript", "API", "CSS3"],
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-5 bg-body-tertiary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="mx-auto bg-primary" style={{ width: '80px', height: '4px' }} />
          <p className="mt-3 text-muted">Some of my recent work</p>
        </motion.div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-100 d-flex flex-column"
                whileHover={{ y: -10 }}
              >
                <div className="card shadow-sm border-0 h-100 overflow-hidden">
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-100 h-100 object-cover"
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-all">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="me-2"
                        href={project.demoUrl}
                        target="_blank"
                      >
                        <FaEye className="me-1" /> Preview
                      </Button>
                      <Button 
                        variant="outline-light" 
                        size="sm"
                        href={project.codeUrl}
                        target="_blank"
                      >
                        <FaGithub className="me-1" /> Code
                      </Button>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h3 className="h4 fw-bold mb-3">{project.title}</h3>
                    <p className="text-body-secondary mb-4 flex-grow-1">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="badge bg-primary bg-opacity-10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-3 mt-auto">
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        href={project.demoUrl}
                        target="_blank"
                        className="d-flex align-items-center"
                      >
                        <FaExternalLinkAlt className="me-1" /> Live Demo
                      </Button>
                      <Button 
                        variant="outline-secondary" 
                        size="sm"
                        href={project.codeUrl}
                        target="_blank"
                        className="d-flex align-items-center"
                      >
                        <FaGithub className="me-1" /> Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-5"
        >
          <Button 
            variant="outline-primary"
            className="px-4 py-3 fw-medium"
            size="lg"
          >
            View All Projects
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;