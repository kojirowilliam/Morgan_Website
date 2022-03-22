import React from 'react';
import {
    Nav,
    Bars,
    NavLink,
    NavMenu,
} from './NavbarElements';
import logo from './unnamed.jpg';
import './navbar.css';

const activeStyle = { color: 'red' };

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to="/" activeStyle={activeStyle}>
                        <a href="" className="logo"><img className="logo" src={logo} alt="logo"/></a>
                    </NavLink>
                    <NavLink to='/about' activeStyle={activeStyle}>
                        About
                    </NavLink>
                    <NavLink to ="/cool" activeStyle={activeStyle}>
                        Why You're Cool
                    </NavLink>
                    <NavLink to ="memories" activeStyle={activeStyle}>
                        Oh the Memories we Share
                    </NavLink>
                    <NavLink to="blog" activeStyle={activeStyle}>
                        William's Very Secret Blogs
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;