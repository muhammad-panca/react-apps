// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Home Page</h1>
      <p>Welcome to our website's Home page!</p>
      <p>We strive to provide the best service and the most engaging content for our users. Explore our site to find out more about what we offer.</p>
      <h2>Featured Sections</h2>
      <div style={{ margin: '20px 0' }}>
        <section style={sectionStyle}>
          <h3>Our Services</h3>
          <p>Learn more about the range of services we provide.</p>
        </section>
        <section style={sectionStyle}>
          <h3>Our Team</h3>
          <p>Get to know the talented individuals behind our success.</p>
        </section>
        <section style={sectionStyle}>
          <h3>Contact Us</h3>
          <p>Reach out to us for any inquiries or support.</p>
        </section>
      </div>
    </div>
  );
};

// Inline styling for sections
const sectionStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '10px'
};

export default Home;
