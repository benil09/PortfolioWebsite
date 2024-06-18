import './Navbar.css';
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";





const Nav = ()=>{
    return(
        <nav>
         
            <a href="#navbar"><IoHomeOutline /></a>
            <a href="#about"><RiUser3Line /></a>
            <a href="#experience"><BiBook /></a>
            <a href="#services"><RiServiceLine /></a>
            <a href="#contacts"><BiMessageSquareDetail /></a>

        </nav>

    );
}

export default Nav;







