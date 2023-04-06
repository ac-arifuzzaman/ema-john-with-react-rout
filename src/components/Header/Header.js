import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/orders'>Order</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;