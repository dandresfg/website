import React, {Fragment, Suspense} from 'react';

// Util
import Effect from './util/effect';

// Layout
import Header from './layout/header';
import Welcome from './layout/welcome';

// Lazy
const Awards = React.lazy(()=> import('./layout/awards'));
const AboutMe = React.lazy(()=> import('./layout/about'));
const Contact = React.lazy(()=> import('./layout/contact'));
const Jobs = React.lazy(()=>import('./layout/jobs'));

function App() {
  return (
    <Fragment>

      <div className="container-fluid bg-white pb-5" id="home">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <Header/>
        <Welcome/>
      </div>

      <Effect curve start />
      <div className="container-fluid" id="awards">
        <Suspense fallback={<div>Loading...</div>}>
          <Awards/>
        </Suspense>
      </div>
      <Effect curve />

      <div className="container-fluid" id="jobs">
        <Suspense fallback={<div>Loading...</div>}>
          <Jobs/>
        </Suspense>
      </div>


      <Effect start />
        <div className="container-fluid" id="about">
          <Suspense fallback={<div>Loading...</div>}>
            <AboutMe/>
          </Suspense>
        </div>
      <Effect />

      <div className="container-fluid" id="contact">
        <Suspense fallback={<div>Loading...</div>}>
          <Contact/>
        </Suspense>
      </div>

      <div className="container-fluid pt-4 footer">
        <div className="row pb-4">
          <div className="container text-center">
            <span className="small">Este sitio fue hecho con ❤ para ustedes - &copy; 2020</span>
            <a href="#home" id="backtohome" title="Volver arriba"><span role="img" aria-label="<3">⬆️</span></a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
