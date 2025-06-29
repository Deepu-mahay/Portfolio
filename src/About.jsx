import React from 'react';

function About() {
  return (
    <main style={{ minHeight: '80vh', background: '#f7fafd', padding: '3rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <section style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '2.5rem 2rem', maxWidth: '700px', width: '90%', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#1a237e', marginBottom: '1rem', textAlign: 'center' }}>About Me</h2>
        <p style={{ color: '#444', fontSize: '1.15rem', lineHeight: 1.7, textAlign: 'center', marginBottom: '2rem' }}>
          Hello! I'm <span style={{ fontWeight: 'bold', color: '#222' }}>Deepu</span>, a passionate and creative web developer with a strong foundation in modern JavaScript frameworks. I love building beautiful, responsive, and user-friendly web applications that make a difference.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          <div style={{ minWidth: '220px' }}>
            <h3 style={{ color: '#1a237e', marginBottom: '0.7rem' }}>Skills</h3>
            <ul style={{ color: '#444', fontSize: '1rem', paddingLeft: '1.2rem', margin: 0 }}>
              <li>JavaScript (ES6+), TypeScript</li>
              <li>React, Vite, Redux</li>
              <li>HTML5, CSS3, Sass</li>
              <li>Responsive & Mobile Design</li>
              <li>Git & GitHub</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div style={{ minWidth: '220px' }}>
            <h3 style={{ color: '#1a237e', marginBottom: '0.7rem' }}>Interests</h3>
            <ul style={{ color: '#444', fontSize: '1rem', paddingLeft: '1.2rem', margin: 0 }}>
              <li>UI/UX Design</li>
              <li>Open Source Contribution</li>
              <li>Learning New Technologies</li>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: '700px', width: '90%', textAlign: 'center', color: '#444' }}>
        <h3 style={{ color: '#1a237e', marginBottom: '0.7rem' }}>Experience</h3>
        <p style={{ fontSize: '1rem', lineHeight: 1.7 }}>
          I have worked on several personal and academic projects, focusing on building scalable and maintainable web applications. My journey in web development is driven by curiosity and a desire to create impactful digital experiences.
        </p>
      </section>
    </main>
  );
}

export default About;
