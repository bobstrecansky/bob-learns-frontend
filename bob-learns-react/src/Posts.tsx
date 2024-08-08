import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // @ts-ignore
  // @ts-ignore
  useEffect(() => {
    const getPosts = () => {
      return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => setPosts(res.data))
        .catch((err) => console.log(err));
};
    getPosts();
    return <h1>Posts</h1>;
  );
    export default Posts();
  };
