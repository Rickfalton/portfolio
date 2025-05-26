import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project-item">
                    <h3>Globen Aid</h3>
                    <p>Fundraising App</p>
                </div>
                <div className="project-item">
                    <h3>Leta Food</h3>
                    <p>Online food delivery app</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;