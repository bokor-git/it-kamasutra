
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import PostItem from "./PostItem";


let mapStateToProps = (state) => {
    return {
        postData: state.postPage.postData,
        newPostText: state.postPage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        postOnChange: (newPost) => {
            let action = updateNewPostTextActionCreator(newPost);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    };
};
const PostItemContainer = connect(mapStateToProps, mapDispatchToProps)(PostItem);


export default PostItemContainer;