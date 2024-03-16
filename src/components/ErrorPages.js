import React from "react";

function NotFound() {
    return (
        <div class="container d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold"><img src="https://i.imgur.com/ukMvI0d.png" alt=""/></h1>
                <p class="fs-3" style={{fontWeight:900}}> <span class="text-danger">Oops!</span> Page not found.</p>
                <p class="lead" style={{fontWeight:300}}>
                    The page you're looking for doesn't exist.
                  </p>
            </div>
        </div>
    )
}

export default NotFound;