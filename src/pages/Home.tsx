import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to the Fitness Tracker</h1>
            <p>Select your character and start tracking your activities!</p>
            <div className="actions">
                <Link to="/select-character" className="button">Select Character</Link>
                <Link to="/track-activity" className="button">Start Tracking</Link>
            </div>
        </div>
    );
};

export default Home;