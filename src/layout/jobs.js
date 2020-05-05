import React from 'react'
import Demo from '../utl.jpg';
import Demo2 from '../utl2.jpg';


import Workdone from '../util/workdone';

const Proyects = () => {
  const Jobs = [
    { url: Demo2, name: 'My website', tags:['React','Bootstrap', 'Responsive Design'], alt: true},
    { url: Demo, name: 'My website', tags:['React','Bootstrap', 'Responsive Design']},
    { url: Demo, name: 'My website', tags:['React','Bootstrap', 'Responsive Design']},
    { url: Demo2, name: 'My website', tags:['React','Bootstrap', 'Responsive Design'], alt: true },
    { url: Demo2, name: 'My website', tags:['React','Bootstrap', 'Responsive Design'], alt: true },
    { url: Demo, name: 'My website', tags:['React','Bootstrap', 'Responsive Design']}
  ]
  return (
    <div className="row">
      <div className="container">
        <div className="card-columns">
          {
            Jobs.map((Job, _) => (
              <Workdone url={Job.url} name={Job.name} tags={Job.tags} alt={Job.alt} key={_}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Proyects
