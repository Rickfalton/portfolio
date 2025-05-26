import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 Rickfalton Odhiambo.</p>
            <div className="social-links">
                <a
                    href="https://github.com/Rickfalton"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/rickfalton-odhiambo-99a246265/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
};

export default Footer;