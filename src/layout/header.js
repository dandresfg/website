import React from 'react';

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="container">
          <nav className="row">
            <div class="name d-none d-md-inline-block">
              <h2 class="">DIEGO ANDRÉS</h2>
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
