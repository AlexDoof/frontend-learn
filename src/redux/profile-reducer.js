const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "HI, bitches!!!", likesCount: 12 },
        { id: 2, message: "Bla bla bla fuck you!", likesCount: 16 },
        { id: 3, message: " пук пук!", likesCount: 336 },
        { id: 4, message: "ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ!!!!!!!!!!!", likesCount: 1236 },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        

        case UPDATE_NEW_POST_TEXT: 
            
            stateCopy.newPostText = action.newText;
            return stateCopy;
        
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer;