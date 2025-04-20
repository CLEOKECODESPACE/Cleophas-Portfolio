import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { FaDumbbell, FaChartLine, FaBook, FaCode, FaMusic } from 'react-icons/fa';

const Lifestyle = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Skills data
  const skills = [
    { name: 'Frontend Development', progress: 90, icon: <FaCode className="text-primary" /> },
    { name: 'Trading Analysis', progress: 75, icon: <FaChartLine className="text-success" /> },
    { name: 'Fitness Training', progress: 85, icon: <FaDumbbell className="text-danger" /> },
    { name: 'Continuous Learning', progress: 95, icon: <FaBook className="text-info" /> },
    { name: 'Music Production', progress: 65, icon: <FaMusic className="text-warning" /> }
  ];

  // Daily routine data
  const routine = [
    { time: '5:30 AM', activity: 'Morning Workout', duration: '1.5h' },
    { time: '7:30 AM', activity: 'Market Analysis', duration: '1h' },
    { time: '9:00 AM', activity: 'Development Work', duration: '4h' },
    { time: '1:00 PM', activity: 'Lunch & Learning', duration: '1h' },
    { time: '2:00 PM', activity: 'Client Projects', duration: '3h' },
    { time: '5:00 PM', activity: 'Trading Session', duration: '2h' },
    { time: '7:00 PM', activity: 'Music/Relaxation', duration: '1h' }
  ];

  return (
    <section id="lifestyle" ref={ref} className="py-5 bg-body-secondary">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold text-white mb-3">My <span className="text-primary">Lifestyle</span></h2>
          <p className="text-white-50">Balancing work, passions, and personal growth</p>
          <div className="mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
        </motion.div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5"
        >
          <h3 className="h4 fw-bold text-white mb-4">My Skills & Progress</h3>
          <Card className="border-0 shadow-sm bg-dark text-white">
            <Card.Body>
              {skills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="d-flex align-items-center gap-2">
                      {skill.icon} {skill.name}
                    </span>
                    <span>{skill.progress}%</span>
                  </div>
                  <ProgressBar 
                    now={skill.progress} 
                    variant={index % 2 === 0 ? "primary" : "info"}
                    className="rounded-pill" 
                    style={{ height: '8px' }}
                  />
                </div>
              ))}
            </Card.Body>
          </Card>
        </motion.div>

        <Row className="g-4">
          {/* Daily Routine */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="h4 fw-bold text-white mb-4">Daily Routine</h3>
              <Card className="border-0 shadow-sm bg-dark text-white">
                <Card.Body>
                  <div className="timeline">
                    {routine.map((item, index) => (
                      <div key={index} className="timeline-item mb-3">
                        <div className="timeline-badge bg-primary"></div>
                        <div className="timeline-content p-3">
                          <div className="d-flex justify-content-between">
                            <h5 className="mb-1 text-white">{item.time}</h5>
                            <span className="text-muted">{item.duration}</span>
                          </div>
                          <p className="mb-0 text-white-50">{item.activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Hobbies & Activities */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="h4 fw-bold text-white mb-4">Passions & Activities</h3>
              <Row className="g-3">
                {/* Trading Card */}
                <Col md={6}>
                  <Card className="border-0 shadow-sm h-100 bg-dark text-white">
                    <Card.Body className="text-center">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                        <FaChartLine className="text-primary fs-3" />
                      </div>
                      <h5 className="text-white">Trading</h5>
                      <p className="text-white-50">
                        Daily market analysis and swing trading strategies in forex and crypto markets.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Fitness Card */}
                <Col md={6}>
                  <Card className="border-0 shadow-sm h-100 bg-dark text-white">
                    <Card.Body className="text-center">
                      <div className="bg-danger bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                        <FaDumbbell className="text-danger fs-3" />
                      </div>
                      <h5 className="text-white">Fitness</h5>
                      <p className="text-white-50">
                        Weight training 5x/week with focus on strength and functional fitness.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Learning Card */}
                <Col md={6}>
                  <Card className="border-0 shadow-sm h-100 bg-dark text-white">
                    <Card.Body className="text-center">
                      <div className="bg-info bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                        <FaBook className="text-info fs-3" />
                      </div>
                      <h5 className="text-white">Learning</h5>
                      <p className="text-white-50">
                        Daily 1-hour learning session on new technologies and market trends.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Music Card */}
                <Col md={6}>
                  <Card className="border-0 shadow-sm h-100 bg-dark text-white">
                    <Card.Body className="text-center">
                      <div className="bg-warning bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                        <FaMusic className="text-warning fs-3" />
                      </div>
                      <h5 className="text-white">Music</h5>
                      <p className="text-white-50">
                        Producing electronic music and playing guitar as creative outlets.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Lifestyle;