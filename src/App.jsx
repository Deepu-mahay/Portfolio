import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import viteLogo from '/src/assets/boy5.png'
import './App.css'
import Header from './Layout/header'
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

function Home() {
  return (
    <main style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      padding: '2rem 0'
    }}>
      <img src={viteLogo} alt="Profile" style={{ width: '160px', height: '160px', borderRadius: '50%', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: '1.5rem' }} />
      <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0', color: '#222' }}>Hi, I'm Deepu</h1>
      <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: '500px', textAlign: 'center', marginBottom: '2rem' }}>
        Welcome to my portfolio! I'm a passionate developer eager to build beautiful and functional web experiences. Explore my projects and get in touch!
      </p>
      <a href="/projects" style={{
        background: '#282c34',
        color: '#fff',
        padding: '0.75rem 2rem',
        borderRadius: '30px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'background 0.2s',
      }}>View Projects</a>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/> }/>
      </Routes>
      <footer style={{ textAlign: 'center', padding: '1rem 0', color: '#888', fontSize: '0.95rem' }}>
        &copy; {new Date().getFullYear()} Deepu. All rights reserved.
      </footer>
    </Router>
  );
}

export default App
