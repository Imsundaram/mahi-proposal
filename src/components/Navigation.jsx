import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Home, Camera, MessageCircle, Gift, Map } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation-container">
            <ul className="nav-list">
                <li><NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><Home size={24} /></NavLink></li>
                <li><NavLink to="/how-we-met" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><Heart size={24} /></NavLink></li>
                <li><NavLink to="/beautiful-mahi" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><Camera size={24} /></NavLink></li>
                <li><NavLink to="/why-i-like-you" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><MessageCircle size={24} /></NavLink></li>
                <li><NavLink to="/future-plans" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><Map size={24} /></NavLink></li>
                <li><NavLink to="/proposal" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><Gift size={24} /></NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;
