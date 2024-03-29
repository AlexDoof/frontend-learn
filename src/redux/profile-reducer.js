import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: "HI, bitches!!!", likesCount: 12 },
        { id: 2, message: "Bla bla bla fuck you!", likesCount: 16 },
        { id: 3, message: " пук пук!", likesCount: 336 },
        { id: 4, message: "ghbdtn z lfey....", likesCount: 1236 },
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}

export const updateNewPostTextActionCreator = (text) => { return { type: UPDATE_NEW_POST_TEXT, newText: text } }
export const addPostActionCreator = () => { return { type: ADD_POST } }

export const setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } }

export const userProfileTHUNK = (userId) => {
    return (dispatch) => {

        profileAPI.getProfileUserId(userId)
            .then((data) => {
                dispatch(setUserProfile(data));
            });
    }
}


export default profileReducer;