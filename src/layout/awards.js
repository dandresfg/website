import React from 'react';

import Award from '../util/award';
import DevicesRoundedIcon from '@material-ui/icons/DevicesRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';

const data = [
  {
    svg: <DevicesRoundedIcon style={{fontSize:'50px', color: 'white'}}/>,
    label: 'Javascript',
    content: 'Dominio de React, para crear aplicaciones interactivas y modernas',
    bg: {backgroundColor:'#FFC107'}
  },
  {
    svg: <TimelineRoundedIcon style={{fontSize:'50px', color: 'white'}}/>,
    label: 'Database',
    content: 'He utilizado MySQl y MongoDB durante la mayoría de mis proyectos',
    bg: {backgroundColor:'#D44950'}
  },
  {
    svg: <StorageRoundedIcon style={{fontSize:'50px', color: 'white'}}/>,
    label: 'Server',
    content: 'Experiencia creando aplicaciones en tiempo real con WebSockets',
    bg: {backgroundColor:'#007BFF'}
  }
]

const Awards = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="row  justify-content-center  text-center">

          {
            data.map(i => (
              <div className="col-12 col-md-4 col-lg-3" key={i.bg.backgroundColor}>
                <div className="row justify-content-center">
                  <Award svg={i.svg} label={i.label} content={i.content} bg={i.bg}/>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Awards
