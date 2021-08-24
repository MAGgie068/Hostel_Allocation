import React from 'react';
import './main.css';

const Hero = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
            </nav>
            <div id="p1btn">
                <button>New Booking</button>
                <button>Previous Booking</button>
            </div>
            <footer>
                <button id="logout" onClick={handleLogout}>Log Out</button>
            </footer>
        </section>
    );
}

export default Hero;