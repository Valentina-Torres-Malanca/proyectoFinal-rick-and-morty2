import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav({ itemMenu }) {
  return (
    <nav className="container-fluid NavFondo">
      <div className="navFondo row">
        <h1 className="col-4">
          <Link to="/" className="NavHome text-decoration-none">
            Rick & Morty
          </Link>
        </h1>

        <div className="d-none d-lg-block col-lg-8">
          <ul className="navbar-nav ms-auto row">
            <li className="nav-item">
              <Link
                to="/characters"
                className={`nav-link ${itemMenu === 'Characters' ? 'active' : ''}`}
              >
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${itemMenu === 'Contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <img className="imagenIconoMenu" src="/imagenes/lista.svg" alt="icono menu" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/characters"
                className={`nav-link ${itemMenu === 'Characters' ? 'active' : ''}`}
              >
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${itemMenu === 'Contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}