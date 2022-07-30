import React from 'react';
import { RailTransit } from './components';
import './App.css';

const App = () => {
  const [transitType] = React.useState<'rail' | 'bus'>('rail');

  return (
    <div className='page'>
      {transitType === 'rail' ? <RailTransit /> : <></>}
    </div>
  );
};

export default App;
