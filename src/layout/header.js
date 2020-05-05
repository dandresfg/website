import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="container">
          <nav className="row justify-content-center">
            <div className="name d-none d-md-inline-block">
              <h2 className="">PORTAFOLIO WEB</h2>
            </div>
            <div className="menu">
              <a href="#about">Sobre mí</a>
              <a href="#jobs">Proyectos</a>
              <a href="#contact">Contacto</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
