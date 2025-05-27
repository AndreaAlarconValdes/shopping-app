import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="disclaimer">
          This website is a personal, non-commercial project created for educational and portfolio purposes only. All product images have been sourced from the internet.
        </p>
        <div className="contact-info">
        <a href="mailto:alarconvaldes.a@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="./mail.svg" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/andreaalarconvaldes/" target="_blank" rel="noopener noreferrer">
            <img src="./linkedin.svg" alt="" />
        </a>
        <a href="https://github.com/AndreaAlarconValdes" target="_blank" rel="noopener noreferrer">
            <img src="./github.svg" alt="" />
        </a>
        <a href="https://andreaalarconvaldes.github.io/portfolio-andrea/" target="_blank" rel="noopener noreferrer">
            <img src="./link.svg" alt="" />
        </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Brillia – Portfolio project by Andrea Alarcón Valdés.</p>
      </div>
    </footer>
  );
};

export default Footer;
