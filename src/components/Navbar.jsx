import { useState } from 'react';

export const Navbar = () => {
    const [Navbar, setNavbar] = useState(false); 

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#" className="navbar-logo">Logo</a>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}