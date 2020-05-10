import React from 'react'
import LiveChat from '../resources/works/livechat.jpg';


import Workdone from '../util/workdone';

const Proyects = () => {
  const Jobs = [
    { url: LiveChat, name: 'Live Chat', tags:['React','Node','SocketIo','Material-UI'], to:'https://sleepy-goldwasser-d1f960.netlify.app/', alt: true},
    //{ url: LiveChat, name: 'My website', tags:['React','Bootstrap', 'Responsive Design']},
    //{ url: LiveChat, name: 'My website', tags:['React','Bootstrap', 'Responsive Design']},
    //{ url: LiveChat, name: 'My website', tags:['React','Bootstrap', 'Responsive Design'], alt: true },
    //{ url: LiveChat, name: 'My website', tags:['React','Bootstrap', 'Responsive Design'], alt: true },
    //{ url: LiveChat, name: 'My website', tags:['React','Bootstrap', 'Responsive Design']}
  ]
  return (
    <div className="row">
      <div className="container">
        <div className="card-columns">
          {
            Jobs.map((Job, _) => (
              <Workdone url={Job.url} name={Job.name} tags={Job.tags} alt={Job.alt} to={Job.to} key={_}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Proyects
