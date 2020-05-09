import React, {Fragment} from 'react';

// Layout
import Header from './layout/header';
import Welcome from './layout/welcome';
import Awards from './layout/awards';
import Proyects from './layout/jobs';
import AboutMe from './layout/about';
import Contact from './layout/contact';

// Util
import Effect from './util/effect';

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
        <Awards/>
      </div>
      <Effect curve />

      <div className="container-fluid" id="jobs">
        <Proyects/>
      </div>


      <Effect start />
        <div className="container-fluid" id="about">
          <AboutMe/>
        </div>
      <Effect />

      <div className="container-fluid" id="contact">
        <Contact/>
      </div>

      <div className="container-fluid pt-4 footer">
        <div className="row pb-4">
          <div className="container text-center">
            <span className="small"> &copy; Diego Finol - 2020</span>
            <a href="#home" id="backtohome" title="Volver arriba">Δ</a>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
