import React from 'react';

import Skill from '../util/skill';

// css
import FadeIn from 'react-fade-in';

// Social
import fb from '../resources/fb-logo.png';
import git from '../resources/gitlogo.png';
import ws from '../resources/whatsapp.png';

const Contact = () => {
  const attr = [
    {label: 'CSS', amount: 85},
    {label: 'Diseño', amount: 78},
    {label: 'Express', amount: 80},
    {label: 'Next', amount: 78},
    {label: 'MongoDB', amount: 75},
    {label: 'Node', amount: 73},
    {label: 'Firebase', amount: 70},
    {label: 'SocketIo', amount: 72, alt: true},
    {label: 'Redux', amount: 78, alt: true},
    {label: 'RestAPI', amount: 80, alt: true},
    {label: 'Javascript', amount: 83, alt: true},
    {label: 'Bootstrap', amount: 88, alt: true},
    {label: 'React', amount: 90, alt: true},
    {label: 'SQL', amount: 95, alt: true},
  ]
  return (
    <div className="row pb-md-5 justify-content-center">
      <div>
        <div className="container">
            <div className="row">

              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="col-12 col-lg-10 mx-auto">
                    <div className="card border-0 pt-md-5 mb-5">

                        <div className="card-img-top pt-md-5 mt-md-5 pb-3">
                          <img src={git} className="d-block mx-auto rounded-circle"
                          width="150" height="150" alt="imagen referencia Diego Finol"/>
                        </div>

                        <div className="card-body mb-4 text-center">
                          <span className="h3 py-3">Programador Web</span>
                          <span className="h6 d-block text-muted">andres.dafg@gmail.com</span>
                          <span className="small d-block text-muted">Maracaibo, Venezuela</span>
                          <span className="small text-muted">(+58) 0424-6099246</span>
                        </div>

                        <div className="card-footer">
                          <div className="row justify-content-center">
                            <a href="https://drive.google.com/open?id=1atnqhK_Mokgxck-OqADv5abUaNkmWHzP" target="blank" className="btn btn-primary">Descargar CV</a>
                          </div>
                        </div>

                        <div className="card-footer">
                          <div className="row justify-content-center">
                            <a href="https://wa.me/584246099246"><img src={ws} className="founded" width="26" height="26" alt="redes sociales diego finol" /></a>

                            <a href="https://www.facebook.com/DandresFG">
                              <img src={fb} className="founded p-1 mx-3" width="30" height="30" alt="redes sociales diego finol" />
                            </a>
                            <a href="https://github.com/dandresfg">
                              <img src={git} className="founded p-1" width="30" height="30" alt="redes sociales diego finol" />
                            </a>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="w-100">
                    <FadeIn>
                    {
                      attr.map(attribute => (
                        <Skill label={attribute.label} amount={attribute.amount} key={attribute.label} alt={attribute.alt} />
                      ))
                    }
                    </FadeIn>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
