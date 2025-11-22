import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>JK Borewells</h3>
                        <p>Your trusted partner for professional borewell drilling services across Jammu & Kashmir.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="footer-contact">
                            <a href="tel:7006724759" className="footer-link">
                                <FaPhone /> 7006724759
                            </a>
                            <a href="https://wa.me/917006724759" className="footer-link" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp /> WhatsApp
                            </a>
                            <a href="mailto:jkborewells786@gmail.com" className="footer-link">
                                <FaEnvelope /> jkborewells786@gmail.com
                            </a>
                            <div className="footer-link">
                                <FaMapMarkerAlt /> Jammu & Kashmir
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} JK Borewells. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
