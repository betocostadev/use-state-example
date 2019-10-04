import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Bret');

  // Fires on component updates, like component did mount.
  // Any function that will update the state and then update the page, will make useEffect run.
  useEffect(() => {
    console.log('useEffect Fired!')

    const fetchFunc = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );
      const resJson = await response.json();
      setUser(resJson[0]);
    };

    fetchFunc();
  }, [searchQuery]); // Select the functions to call for it. Use it to avoid an infinite call.

  return (
    <Card>
      <input
        type='search'
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseEffectExample;
