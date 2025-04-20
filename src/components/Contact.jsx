import { useState } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane
} from 'react-icons/fa';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import SocialMenu from './SocialMenu';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-5 position-relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold text-body-emphasis mb-3">Get In <span className="text-primary">Touch</span></h2>
          <p className="text-body-secondary mb-4">Let's discuss how I can help with your project</p>
          <div className="mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
        </motion.div>

        <Row className="g-4 justify-content-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-4 p-lg-5 rounded-4 shadow-sm h-100 bg-body-tertiary">
                <h3 className="h4 fw-bold text-body-emphasis mb-4">Contact Information</h3>
                <p className="text-body-secondary mb-5">
                  Feel free to reach out to me for any questions or opportunities.
                </p>

                <div className="d-grid gap-4 mb-5">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3 flex-shrink-0">
                      <FaEnvelope className="text-primary fs-4" />
                    </div>
                    <div>
                      <h4 className="h6 fw-semibold text-body-emphasis">Email</h4>
                      <a href="mailto:Cleophaskoech877@gmail.com" 
                        className="text-body-secondary text-decoration-none">
                        Cleokecodes@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3 flex-shrink-0">
                      <FaPhone className="text-primary fs-4" />
                    </div>
                    <div>
                      <h4 className="h6 fw-semibold text-body-emphasis">Phone</h4>
                      <a href="tel:+254115647545" 
                        className="text-body-secondary text-decoration-none">
                        +254 115 647 545
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3 flex-shrink-0">
                      <FaMapMarkerAlt className="text-primary fs-4" />
                    </div>
                    <div>
                      <h4 className="h6 fw-semibold text-body-emphasis">Location</h4>
                      <p className="text-body-secondary">Nairobi, KE</p>
                    </div>
                  </div>
                </div>

                {/* Social Menu Card */}
                <Card className="border-0 shadow-sm bg-body-secondary">
                  <Card.Body className="text-center position-relative" style={{ minHeight: '200px' }}>
                    <h4 className="h5 fw-semibold mb-4 text-body-emphasis">Connect With Me</h4>
                    <SocialMenu />
                  </Card.Body>
                </Card>
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="p-4 p-lg-5 rounded-4 shadow-sm h-100 bg-body-tertiary">
                <h3 className="h4 fw-bold text-body-emphasis mb-4">Send me a message</h3>
                
                {submitSuccess && (
                  <div className="alert alert-success mb-4">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                <Form onSubmit={handleSubmit} className="d-grid gap-4">
                  <Row>
                    <Col md={6} className="mb-3 mb-md-0">
                      <Form.Group controlId="name">
                        <Form.Label className="text-body-secondary small fw-semibold">Your Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-body rounded-3 py-3"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="email">
                        <Form.Label className="text-body-secondary small fw-semibold">Your Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="bg-body rounded-3 py-3"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="subject">
                    <Form.Label className="text-body-secondary small fw-semibold">Subject</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      className="bg-body rounded-3 py-3"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="message">
                    <Form.Label className="text-body-secondary small fw-semibold">Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="bg-body rounded-3 py-3"
                      required
                    />
                  </Form.Group>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      variant="primary"
                      className="w-100 py-3 fw-medium mt-2 rounded-3 d-flex align-items-center justify-content-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane /> Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;