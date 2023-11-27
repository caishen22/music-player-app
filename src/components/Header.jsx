import React from "react";
import "../css/header.css";

export default function Header(){
    return(
        <section className="header_container">
            <span className="header_h1">Music Player App</span>
            <span className="header_h4">Enjoy your favourite songs here!</span>
        </section>
    )
}