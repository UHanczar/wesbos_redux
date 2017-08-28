import React, { Component } from 'react';

class Comments extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    console.log(postId, author, comment);
    this.props.addComment(postId, author, comment);
    
    this.refs.author.value = '';
    this.refs.comment.value = '';
  }

  render() {
    console.log(this.props.postId);
    const renderComments = (comment, i) => (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={() => this.props.removeComment(this.props.postId, i)}>&times;</button>
        </p>
      </div>
    );

    return (
      <div className='comments'>
        {this.props.postComments.map(renderComments)}
        <form ref='commentForm' className='comment-form' onSubmit={e => this.handleSubmit(e)}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    );
  }
}

export default Comments;