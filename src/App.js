import React, {Fragment} from 'react';

// Layout
import Header from './layout/header';
import Welcome from './layout/welcome';
import Awards from './layout/awards';
import Proyects from './layout/jobs';

// Util
import EffectCurve from './util/effectCurve';

function App() {
  return (
    <Fragment>

      <div className="container-fluid bg-white pb-5">
        <Header/>
        <Welcome/>
      </div>

      <EffectCurve start />

      <div className="container-fluid" id="awards">
        <Awards/>
      </div>

      <EffectCurve />

      <div className="container-fluid" id="jobs">
        <Proyects/>
      </div>

    </Fragment>
  );
}

export default App;
