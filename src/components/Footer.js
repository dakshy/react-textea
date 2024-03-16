import React from "react";

export default function Footer() {
    return (
        <div class="container fixed-bottom">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-body-secondary">Open Source by <a href="https://github.com/dakshy">dakshy</a></p>

            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            Textea
            </a>

            <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a target="_blank" rel="noreferrer" href="https://github.com/dakshy/react-textea" class="nav-link px-2 text-body-secondary">GitHub</a></li>
            </ul>
        </footer>
        </div>
    )
}