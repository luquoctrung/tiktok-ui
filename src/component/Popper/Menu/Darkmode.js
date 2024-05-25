import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.style.setProperty('--primary', '#00ff00');
            root.style.setProperty('--text-color', '#fff');
            root.style.setProperty('--white', '#000');
            root.style.setProperty('--black', '#fff');
        } else {
            root.style.setProperty('--primary', '#fe2c55');
            root.style.setProperty('--text-color', '#333');
            root.style.setProperty('--white', 'rgb(255, 255, 255)');
            root.style.setProperty('--black', '#000');
        }
    }, [darkMode]);

    const handleDarkModeChange = () => {
        setDarkMode(!darkMode);
    };

    return <input type="checkbox" checked={darkMode} onChange={handleDarkModeChange} />;
};

export default DarkModeToggle;
