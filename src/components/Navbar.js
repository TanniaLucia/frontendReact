import React from 'react'
import {Link} from 'react-router-dom' 

export const Navigation =()=>(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Proyectos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new-project">Crear Proyectos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Users">Usuarios</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
)