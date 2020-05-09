import React from 'react';

import Skill from '../util/skill';

// Social
import fb from '../resources/fb-logo.png';
import git from '../resources/gitlogo.png';
import ws from '../resources/whatsapp.png';

const Contact = () => {
  const attr = [
    {label: 'Diseño', amount: 75},
    {label: 'CSS', amount: 85},
    {label: 'Bootstrap', amount: 88, alt: true},
    {label: 'Javascript', amount: 83, alt: true},
    {label: 'Vue', amount: 65},
    {label: 'React', amount: 90, alt: true},
    {label: 'Next', amount: 78},
    {label: 'Firebase', amount: 70},
    {label: 'MongoDB', amount: 75},
    {label: 'SQL', amount: 95, alt: true},
    {label: 'Node', amount: 73},
    {label: 'Express', amount: 80},
    {label: 'API', amount: 83, alt: true},
    {label: 'MVC', amount: 75},
    {label: 'Redux', amount: 80, alt: true},
  ]
  return (
    <div className="row pb-5 justify-content-center">
      <div>
        <div className="container">
            <div className="row">

              <div className="col-12 col-lg-5">
                <div className="row">
                  <div className="col-12 col-lg-10 mx-auto">
                    <div className="card border-0">

                        <div className="card-img-top pt-5 pb-3">
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
                            <img src={ws} className="founded" width="26" height="26" alt="redes sociales diego finol" />
                            <img src={fb} className="founded p-1 mx-3" width="30" height="30" alt="redes sociales diego finol" />
                            <img src={git} className="founded p-1" width="30" height="30" alt="redes sociales diego finol" />
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-7">
                <div className="row">
                  <div className="w-100">

                    {
                      attr.map(attribute => (
                        <Skill label={attribute.label} amount={attribute.amount} key={attribute.label} alt={attribute.alt} />
                      ))
                    }

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