import React, { useState } from 'react';

import Card from '../card/card.component';
// See the effects for useFetch! It is where the useEffect is working for this and the user component.
import useFetch from '../../effects/use-fetch.effect';

const User = () => {
  const [ curUser, setCurUser] = useState('')

  const user = useFetch(`https://jsonplaceholder.typicode.com/users?id=${curUser}`)

  return (
    <Card>
      <form>
          <label>
            User:
            <input type="number" value={curUser} onChange={event => setCurUser(event.target.value)} />
          </label>
        </form>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </Card>
  );
};

export default User;
