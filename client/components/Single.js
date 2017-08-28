import React from 'react';

import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const i = props.posts.findIndex(post => post.code === props.params.postId);
  const post = props.posts[i];
  const postComments = props.comments[props.params.postId] || [];
  return (
    <div className='single-photo'>
      <Photo i={i} post={post} {...props} />
      <Comments
        postComments={postComments}
        postId={props.params.postId}
        addComment={props.addComment} removeComment={props.removeComment} 
      />
    </div>
  );
}


export default Single;