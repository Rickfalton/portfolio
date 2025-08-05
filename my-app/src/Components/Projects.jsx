import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="flex justify-center space-x-4 mt-4">
                <a
                    href="https://github.com/Rickfalton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    GitHub
                </a>
                <br></br>
                <a
                    href="https://www.linkedin.com/in/rickfalton-odhiambo-99a246265/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    LinkedIn
                </a>
            </div>
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