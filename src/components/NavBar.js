import React from 'react'
import {
    Link
} from "react-router-dom";

function changeMode() {
	if(document.body.getAttribute('data-bs-theme') === 'dark')
	document.body.setAttribute('data-bs-theme', 'light');
	else
	document.body.setAttribute('data-bs-theme', 'dark');
}

export default function NavBar() {
  return (
    <div className="navbar navbar-expand-lg fixed-top bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link to="../" className="navbar-brand">Textea</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-md-auto">
            <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/dakshy/react-textea">GitHub</a>
            </li>
            <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
              <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
              <hr className="d-lg-none my-2 text-white-50"/>
            </li>
            <li className="nav-item" data-bs-theme="light" onClick={changeMode}>
            <div className="nav-link">
                <i className="bi bi-circle-half"></i>
                <span className="d-lg-none ms-2">Toggle theme</span>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
