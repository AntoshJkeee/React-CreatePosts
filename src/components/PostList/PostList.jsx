import React from 'react';
import PostItem from "../PostItem/PostItem";
import classes from './PostList.module.scss'

const PostList = ({posts, title}) => {

    return (
        <div className={classes.postlist}>
            <h1 className={classes.postlist__text}>{title}</h1>
            {
                posts.map((el, index) => <PostItem number={index} key={el.id} post={el}/>)
            }
        </div>
    );
};

export default PostList;
