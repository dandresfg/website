import React from 'react';

const Welcome = () => {
  return (
    <div className="" style={{overflow: 'Hidden'}}>
      <div className="row">
        <div className="container">
          <div className="row justify-content-center photo">
            <img src="./resources/coding-1853305_1280.jpg" className="rounded-circle" width="250" height="250" alt=""/>
          </div>
          <div className="welcome-msg text-center">
            <span>¡Bienvenido!</span>
            <p className="h6 mx-auto">
              Soy un desarrollador web fullStack, que
              disfruta del diseño de aplicaciones web y de
              la lógica detrás de cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
