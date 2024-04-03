import React from 'react';


export default function Titulo() {
    return(
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <i className="bi bi-film"></i>
                        Streaming do Caio
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                             <a className="nav-link nav-link-1 active" aria-current="page" href="index.html">
                                Profile
                             </a>
                          </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
