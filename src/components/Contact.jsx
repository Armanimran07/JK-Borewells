import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const contactMethods = [
        {
            icon: <FaWhatsapp />,
            title: 'WhatsApp',
            info: '7006724759',
            link: 'https://wa.me/917006724759',
            className: 'btn-whatsapp',
            buttonText: 'Chat on WhatsApp'
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            info: '7006724759',
            link: 'tel:7006724759',
            className: 'btn-phone',
            buttonText: 'Call Now'
        },
        {
            icon: <FaEnvelope />,
            title: 'Email',
            info: 'jkborewells786@gmail.com',
            link: 'mailto:jkborewells786@gmail.com',
            className: 'btn-email',
            buttonText: 'Send Email'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Get In Touch</h2>
                    <p>Ready to start your borewell project? Contact us today!</p>
                </motion.div>

                <div className="contact-grid">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            className="contact-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="contact-icon">{method.icon}</div>
                            <h3>{method.title}</h3>
                            <p className="contact-info">{method.info}</p>
                            <a
                                href={method.link}
                                className={`btn ${method.className}`}
                                target={method.title === 'WhatsApp' ? '_blank' : '_self'}
                                rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : ''}
                            >
                                {method.icon}
                                {method.buttonText}
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="contact-location"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <FaMapMarkerAlt />
                    <h3>Service Area</h3>
                    <p>Serving all districts across Jammu & Kashmir</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
