import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaThumbsUp, FaClock } from 'react-icons/fa';
import './About.css';

const About = () => {
    const stats = [
        { icon: <FaAward />, number: '10+', label: 'Years Experience' },
        { icon: <FaUsers />, number: '500+', label: 'Happy Clients' },
        { icon: <FaThumbsUp />, number: '100%', label: 'Satisfaction' },
        { icon: <FaClock />, number: '24/7', label: 'Support' }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>About JK Borewells</h2>
                    <p>Your Trusted Water Solution Partner in Jammu & Kashmir</p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Professional Borewell Services Since Years</h3>
                        <p>
                            JK Borewells is a leading provider of comprehensive borewell drilling and water solution services
                            across Jammu & Kashmir. With years of experience and a team of skilled professionals, we deliver
                            reliable and efficient water solutions for residential, commercial, and agricultural needs.
                        </p>
                        <p>
                            Our commitment to quality, safety, and customer satisfaction has made us the preferred choice for
                            thousands of clients across the region. We use state-of-the-art equipment and follow industry best
                            practices to ensure optimal results.
                        </p>
                        <div className="about-features">
                            <div className="feature">✓ Licensed & Insured</div>
                            <div className="feature">✓ Advanced Equipment</div>
                            <div className="feature">✓ Expert Team</div>
                            <div className="feature">✓ Quality Assurance</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-stats"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
