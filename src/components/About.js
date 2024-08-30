import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container fade-in">
        <img src="Ajith.jpeg" alt="Your Name" className="profile-pic" />
        <div className="about-text fade-in">
          <h2>About Me</h2>
          <p>Hi there! I’m a web and game developer with a knack for coding in Python, Java, and C++. I love diving into new challenges and crafting solutions that are both functional and innovative. On top of my programming skills, I’m also quite handy with Blender, creating 3D models and animations that bring ideas to life. When I’m not in front of a screen, you’ll find me painting or staying active with some athletics. Balancing creativity with technical skills keeps me inspired and motivated. Feel free to reach out if you want to chat about projects or just share ideas!

</p>
        </div>
      </div>
    </section>
  );
};

export default About;
