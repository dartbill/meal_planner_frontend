import axios from "axios";
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './style.css'

const Footer = () => {
    return (
        <>
            <p>Brought to you by</p>
            <ul className="footerNames">
                <li><a href="https://github.com/LaylaSouthcombe" target="_blank">Layla<br/>Southcombe</a> </li>
                <li><a href="https://github.com/dartbill" target="_blank">Billie<br/>Dartnell</a></li>
                <li><a href="https://github.com/aha000111" target="_blank">Ali<br/>Ahmad</a></li>
                <li><a href="https://github.com/alihamedali96" target="_blank">Amir<br/>Ali</a></li>
                <li><a href="https://github.com/Nadirkhan98" target="_blank">Nadir<br/>Khan</a></li>
            </ul>
        </>
    )
}

export default Footer;