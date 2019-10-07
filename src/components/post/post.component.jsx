import React, { useState } from 'react';

import Card from '../card/card.component';
// See the effects for useFetch! It is where the useEffect is working for this and the user component.
import useFetch from '../../effects/use-fetch.effect';

const Post = () => {
  const [ curPost, setCurPost] = useState('')
  const post = useFetch(`https://jsonplaceholder.typicode.com/posts?id=${curPost}`)

  return (
    <Card>
      <form>
        <label>
          Post:
          <input type="number" value={curPost} onChange={event => setCurPost(event.target.value)} />
        </label>
      </form>
      {post ? (
        <div>
          <h3> {post.title} </h3>
          <p> {post.body} </p>
        </div>
      ) : (
        <p> No post found </p>
      )}
    </Card>
  );
};

export default Post;
