import React from 'react';

// There is also other examples like, Use-effect, etc.
import UseReducerExample from './components/use-reducer-example/use-reducer-example.component'

import './App.css';

const App = props => {
  // return <UseStateExample />;
  return (
    <main className='App'>
      <UseReducerExample />
    </main>
  )
};

export default App;
