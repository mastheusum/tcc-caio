import React from 'react';

function Titulo() {
    return(
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <i class="fas fa-film mr-2"></i>
                        Streaming do Caio
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                             <a class="nav-link nav-link-1 active" aria-current="page" href="index.html">Profile</a>
                          </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Titulo;