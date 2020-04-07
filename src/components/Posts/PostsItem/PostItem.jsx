import React from "react";
import style from "./PostItem.module.css"
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength10 =maxLengthCreator(15)

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Post"} name={"Post"} component={Textarea}
                    validate={[required, maxLength10]}/></div>
        <button> Add post</button>
    </form>
}

const ReduxPostForm = reduxForm({
    form: 'post'
})(PostForm);

const PostItem = (props) => {
    if (props.isAuth === false) return <Redirect to={"/Login"}/>
    let postElement = props.postData.map
    (p => <div className={style.post}>
        <div><img alt="no" src={p.postAvatar}></img></div>
        <div>{p.postText}</div>
        <div>Like: {p.postLike}</div>
        <button onClick={() => {
            props.likePost(p.id)
        }}>
            like
        </button>
    </div>);


    let onSubmit = (formData) => {
        props.addPost((formData.Post));};

    return (
        <div>
            <div className={style.post}>
                <img alt="o" src="https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"/>
                <ReduxPostForm onSubmit={onSubmit}/>
            </div>
            <div>

                {postElement}
            </div>
        </div>)
};


export default PostItem
