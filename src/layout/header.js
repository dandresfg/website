import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="container">
          <nav className="row justify-content-center">
            <div class="name d-none d-md-inline-block">
              <h2 class="">PORTAFOLIO WEB</h2>
            </div>
            <div class="menu">
              <a href="#aboutme">Sobre mí</a>
              <a href="#proyects">Proyectos</a>
              <a href="#contact">Contacto</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
