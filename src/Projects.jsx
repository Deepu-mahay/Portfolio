import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Vite to showcase my skills and projects.',
    link: '/home',
  },
  {
    title: 'Daily Scheduler',
    description: 'A productivity app to manage daily tasks and events, featuring a calendar and analytics.',
    link: 'https://your-daily-scheduler',
  },
  {
    title: 'Weather App',
    description: 'A responsive and interactive weather application that allows users to get real-time weather information for any city or location worldwide.',
    link: 'https://wheatherapp-zeta.vercel.app/',
  },
  {
    title: 'Study notes',
    description: 'A simple and organized web application for creating, managing, and reviewing study notes. Users can add, edit, and delete notes by subject or topic, categorize content.',
    link: 'https://notes-project-three.vercel.app/',
  },
  {
    title: 'Plant Care',
    description: 'A user-friendly web app that helps users care for plants by providing detailed information based on user input. Users can enter a plant or flower name to receive customized guidance on propagation methods, watering frequency, sunlight needs, common diseases, and general care tips ',
    link: 'https://plant-care-liart.vercel.app/service',
  },

  {
    title: 'snake game',
    description: 'A user-friendly web app that helps users care for plants by providing detailed information based on user input. Users can enter a plant or flower name to receive customized guidance on propagation methods, watering frequency, sunlight needs, common diseases, and general care tips ',
    link: 'https://snake-game-iota-lime.vercel.app/',
  },

   // Add more projects as needed
];

function Projects() {
  return (
    <main style={{ padding: '2rem', background: '#f7fafd', minHeight: '80vh' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '2rem', color: '#222' }}>My Projects</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
      }}>
        {projects.map((project, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            padding: '2rem',
            maxWidth: '340px',
            minWidth: '260px',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ width: '100%', height: '180px', marginBottom: '1rem', borderRadius: '10px', overflow: 'hidden', background: '#eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <iframe
                src={project.link}
                title={project.title}
                style={{ width: '100%', height: '100%', border: 'none' }}
                loading="lazy"
                allow="fullscreen"
              />
            </div>
            <h3 style={{ margin: '0 0 1rem 0', color: '#1a237e', textAlign: 'center' }}>{project.title}</h3>
            <p style={{ color: '#444', marginBottom: '1.5rem', textAlign: 'center' }}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
              color: '#fff',
              background: '#1a237e',
              padding: '0.5rem 1.2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              alignSelf: 'center',
              fontWeight: 'bold',
              transition: 'background 0.2s',
            }}>View Project</a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
