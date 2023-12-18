import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <nav>
        <Link to="/">Home</Link> <br/> 
        <Link to= "/Contact">Contact</Link> <br/> 
        <Link to= "/blogs">blog page</Link> <br/> 
    </nav>;
}

export default Navbar;