import React from 'react';

import Calculator from './exercises/liftingStateUp';
import { TemperatureInput } from './exercises/liftingStateUp2';
import { WelcomeDialog, SignUpDialog } from './exercises/compositionVSInheritance';

function App() {
  return (
    <div className='App'>
      <label htmlFor=''>Calculator</label>
      <Calculator />
      <br />
      <TemperatureInput scale='c' />
      <TemperatureInput scale='f' />
      <br />
      <WelcomeDialog />
      <SignUpDialog />
    </div>
  );
}

export default App;
