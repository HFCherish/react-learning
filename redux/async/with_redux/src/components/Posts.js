import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({data}) => (
  <ul>
    {data.map((post,i) =>
      <li key={i}>{post.title}</li>
    )}
  </ul>
);

Posts.propTypes = {
  data: PropTypes.array.isRequired
};

export default Posts;
