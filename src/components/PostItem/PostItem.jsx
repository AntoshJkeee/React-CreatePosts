import React from 'react';
import classes from './PostItem.module.scss'

const PostItem = ({post, number}) => {
    return (
        <div className={classes.post}>
            <div className="post__content">
                <strong>{number}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;
