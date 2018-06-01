import React from 'react'

const Posts = ({posts}) => (
  <ul>
    {
      posts.map(post => (
        <li>{post.data.title}</li>
      ))
    }
  </ul>
);

export default Posts