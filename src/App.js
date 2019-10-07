import React from 'react';

// There is also other examples like, Use-effect, change here.
// import UseStateExample from './components/use-state-example/use-state-example.component';
// import UseEffectExample from './components/use-effect-example/use-effect-example.component'

// Using the custom Hooks example:
import User from './components/user/user.component'
import Post from './components/post/post.component'


import './App.css';

const App = props => {
  // return <UseStateExample />;
  return (
    <main className='App'>
      <User userId={5} />
      <Post />
    </main>
  )
};

export default App;
