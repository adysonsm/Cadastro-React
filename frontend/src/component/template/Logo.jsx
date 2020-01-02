import './Logo.css'
import React from 'react';
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo p-5">
            <img src={logo} alt="logo" className="p-4" />
        </Link>
    </aside>
