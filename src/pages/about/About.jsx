import "./about.css";

export default function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to <span className="brand">MyShop</span>!  
        We’re passionate about bringing you the best products at affordable prices.  
        Our goal is to make online shopping simple, secure, and enjoyable.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? Reach out to us:
      </p>
      <ul className="contact-info">
        <li>📧 Email: support@myshop.com</li>
        <li>📞 Phone: +1 (555) 123-4567</li>
        <li>📍 Address: 123 Market Street, New York, NY</li>
      </ul>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
