import React from "react";

export default function Footer() {
    return (
    <div className="container">
    <footer className="py-3 my-4">
        <div className="border-bottom">
            <p className="text-center text-body-secondary">Textea - An Open Source Project by <a target="_blank" rel="noreferrer" href="https://github.com/dakshy">dakshy</a></p>
        </div>
        <div className="nav justify-content-center pb-3 mt-3">
        <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a target="_blank" rel="noreferrer" href="https://github.com/dakshy/react-textea" className="nav-link px-2 text-body-secondary">GitHub</a></li>
        </div>
    </footer>
    </div>
    )
}