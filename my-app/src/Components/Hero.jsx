import React from 'react';

const Hero = () => {
    const styles = {
        hero: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#282c34',
            color: 'white',
            textAlign: 'center',
        },
        title: {
            fontSize: '3rem',
            marginBottom: '1rem',
        },
        subtitle: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
        },
        button: {
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };

    return (
        <section style={styles.hero}>
            <div>
                <h1 style={styles.title}>RICKFALTON ODHIAMBO</h1>
                <p style={styles.subtitle}>Bio</p>
                <p style={styles.subtitle}>SKILLS</p>
                <button style={styles.button}>Learn More</button>
            </div>
        </section>
    );
};

export default Hero;