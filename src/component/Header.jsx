import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/boy5.png';
function Header() {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            background: '#282c34',
            color: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
            <img src={logo} style={{height:"75px",}} alt="" />
            <h1 style={{ margin: 0, fontSize: '2rem', letterSpacing: '2px' }}>Deepu</h1>
            <nav>
                <Link to="/" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Home</Link>
                <a href="/about" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>About</a>
                <Link to="/projects" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Projects</Link>
                <a href="/contact" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;