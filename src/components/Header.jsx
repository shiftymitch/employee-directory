import React from "react";

function Header() {
    return <nav className="navbar navbar-expand-lg navbar-dark position-sticky">
        <img src="../../img/shiftycx_logo.svg" width="125px" className="d-inline-block align-top mr-4 ml-4" alt=""></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="./index.html">[portfolio]<span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="./about.html">about</a>
                <a className="nav-item nav-link" href="./contact.html">contact</a>
            </div>
        </div>
    </nav>
}

export default Header;