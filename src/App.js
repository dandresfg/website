import React, {Fragment} from 'react';

// Layout
import Header from './layout/header';
import Welcome from './layout/welcome';
import Awards from './layout/awards';

// Util
import EffectCurve from './util/effectCurve';

function App() {
  return (
    <Fragment>

      <div className="container-fluid pb-5">
        <Header/>
        <Welcome/>
      </div>

      <EffectCurve start />

      <div className="container-fluid" id="awards">
        <Awards/>
      </div>

      <EffectCurve />

    </Fragment>
  );
}

export default App;
