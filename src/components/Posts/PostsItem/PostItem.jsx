import React from "react";
import style from "./PostItem.module.css"


const PostsItem = (props) => {
    return (
        <div className={style.post}>
            <div><img alt="no" src={props.postAvatar}></img></div>
            <div>{props.postText}</div>
            <div>Like: {props.postLike}</div>
            <button >
                like
            </button>
        </div>
    )
};

const  PostItem = (props) => {
    let postElement = props.postData.map
    (pos => <PostsItem postAvatar={pos.postAvatar} postText={pos.postText} postLike={pos.postLike}/>)
    let newPostElement = React.createRef();

    let postOnChange=()=>{
        let newPost =newPostElement.current.value
        props.postOnChange(newPost)

    }
    let addPost=()=> {
        props.addPost();

    }
    return (
        <div>
            <div className={style.post}>
                <img alt="o" src="https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png"/>
                <textarea ref={newPostElement} value={props.newPostText} onChange={postOnChange}/>
                <button onClick={addPost}> add post</button>
            </div>
            <div>
                {postElement}
            </div>
        </div>)
};


export default PostItem