import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from './redux/slices/commentsSlice';

const Comments = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((store) => store.comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <div className='comments-wrapper'>
      <h1 className='title'>Comments</h1>
      {comments.map((comment) => (
        <div className='comments-items' key={comment.id}>
          <span className='comments-name'> {comment.name}</span>
          <span className='comments-body'> {comment.body}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
