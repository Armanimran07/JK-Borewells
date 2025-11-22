import { motion } from 'framer-motion';
import { FaWater, FaTools, FaCog, FaCheckCircle } from 'react-icons/fa';
import { GiWaterDrop, GiDrill } from 'react-icons/gi';
import './Services.css';

const servicesData = [
    {
        icon: <GiDrill />,
        title: 'Borewell Drilling',
        description: 'Professional borewell drilling services with advanced equipment for residential and commercial properties.'
    },
    {
        icon: <FaWater />,
        title: 'Tube Well Installation',
        description: 'Complete tube well installation with quality materials ensuring long-lasting water supply solutions.'
    },
    {
        icon: <FaCog />,
        title: 'Pump Installation',
        description: 'Expert installation of submersible and jet pumps with proper electrical connections and safety measures.'
    },
    {
        icon: <FaTools />,
        title: 'Maintenance & Repair',
        description: 'Regular maintenance and repair services to keep your borewell system running efficiently.'
    },
    {
        icon: <GiWaterDrop />,
        title: 'Water Testing',
        description: 'Comprehensive water quality testing to ensure safe and clean water for your family.'
    },
    {
        icon: <FaCheckCircle />,
        title: 'Consultation',
        description: 'Free site inspection and expert consultation to determine the best water solution for your needs.'
    }
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Our Services</h2>
                    <p>Comprehensive borewell solutions tailored to your needs</p>
                </motion.div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
