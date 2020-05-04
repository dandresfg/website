import React, {Fragment} from 'react';

// Layout
import Header from './layout/header';
import Welcome from './layout/welcome';

function App() {
  return (
    <Fragment>
      <div className="container-fluid pb-5">
        <Header/>
        <Welcome/>
      </div>
    </Fragment>
  );
}

export default App;
