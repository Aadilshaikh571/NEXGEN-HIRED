import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";
import "./AboutUsStyles.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Header */}
      <div className="header-section text-center mb-16">
        <h1 className="about-us-header">About Us</h1>
        <span className="flex items-center gap-6 sm:gap-10 lg:gap-12 text-6xl sm:text-7xl lg:text-9xl font-extrabold text-gray-900 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-105 hover:translate-y-1">
    <span className="relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent shadow-lg hover:shadow-xl transition-shadow duration-300 hover:opacity-90">
      NEXGEN
    </span>
    <span className="relative text-gray-800 hover:text-gray-200 transition-colors duration-300">
      <span className="absolute transform -translate-x-1 -translate-y-1 transition-transform duration-300"></span>
      <span className="relative z-10 hover:translate-x-1 hover:translate-y-1 transition-transform duration-300">
        HIRED
      </span>
    </span>
  </span>
      </div>

      {/* Description */}
      <div className="description-section max-w-4xl mx-auto mb-16">
        <p className="about-us-description">
          At R.HIRED, we believe in the power of connections. As a global recruitment leader, our mission is to bring together top talent and groundbreaking opportunities. With a focus on innovation and excellence, we strive to empower both individuals and organizations to achieve their greatest potential.
        </p>
      </div>

      {/* Team Image */}
      <div className="image-section text-center mb-16">
        <img
          src="https://images.unsplash.com/photo-1622675235457-38708d51d6d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our Team"
          className="about-us-image"
        />
      </div>

      {/* Key Points Section */}
      <div className="key-points-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 px-6">
        <div className="about-us-point">
          <h3>Our Mission</h3>
          <p>
            Revolutionizing recruitment by bridging the gap between great talent and great companies, ensuring every individual finds their perfect fit.
          </p>
        </div>
        <div className="about-us-point">
          <h3>Our Vision</h3>
          <p>
            A world where careers are crafted, not just jobs found, and every individual and business thrives in a collaborative environment.
          </p>
        </div>
        <div className="about-us-point">
          <h3>Our Values</h3>
          <p>
            Integrity, Excellence, Innovation, and a relentless pursuit of growth define our values and shape our work every day.
          </p>
        </div>
        <div className="about-us-point">
          <h3>Our Services</h3>
          <p>
            We provide tailored recruitment solutions, executive search, and consulting services to help businesses build and retain top-performing teams.
          </p>
        </div>
        <div className="about-us-point">
          <h3>Our Culture</h3>
          <p>
            At R.HIRED, we cultivate a culture of innovation, collaboration, and inclusivity, where every team member is empowered to make an impact.
          </p>
        </div>
        <div className="about-us-point">
          <h3>Join Us</h3>
          <p>
            Are you passionate about recruitment and helping others achieve their career goals? Join us and become part of an exciting journey.
          </p>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="team-section text-center mb-20">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-description">
          Our diverse team is composed of skilled professionals from around the world, all united by a shared passion for recruitment and people. Together, we bring diverse perspectives, innovative ideas, and a relentless commitment to excellence.
        </p>
        {/* Add team member cards if needed */}
      </div>

      {/* Contact Section */}
      <div className="contact-section text-center mt-20">
        <h2 className="section-title">Connect with Us</h2>
        <p className="section-description">
          Follow us on social media to stay updated with our latest news, events, and job opportunities:
        </p>
        <div className="social-icons flex justify-center gap-6 mb-12">
          <a href="https://www.instagram.com/r.prince_x/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com/yourtwitterid" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/in/aadil-shaikh-99967a293/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:aadilshaikh86693@gmail.com" className="social-link">
            <FaEnvelope size={30} />
          </a>
          <a href="https://facebook.com/yourfacebookid" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook size={30} />
          </a>
        </div>
        <p className="contact-email">
          For inquiries, email us at: <a href="mailto:aadilshaikh86693@gmail.com" className="underline hover:text-indigo-400">AadilShaikh@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
