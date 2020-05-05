import React, {Fragment} from 'react';

// Layout
import Header from './layout/header';
import Welcome from './layout/welcome';
import Awards from './layout/awards';
import Proyects from './layout/jobs';
import AboutMe from './layout/about';

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

    </Fragment>
  );
}

export default App;
