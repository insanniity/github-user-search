import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

const TopNavBar = () => {
    return(
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <Link to="/">
                    <div className="navbar-title">Bootcamp DevSuperior</div>
                </Link>                
            </div>
        </nav>
    )
}

export default TopNavBar;