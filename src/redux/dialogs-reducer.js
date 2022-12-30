const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        /* БД сообщений*/
        { id: 1, message: "Hi!!!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo ! =)" },
        { id: 4, message: "Yo ! =)" },
        { id: 5, message: "Yo ! =))" },
        { id: 6, message: "Yo !!! =)" },
    ],
    dialogs: [
        /* БД диалогов */
        { id: 1, name: "Alexey" },
        { id: 2, name: "Daniil" },
        { id: 3, name: "Leonid" },
        { id: 4, name: "Masha" },
        { id: 5, name: "Arina" },
        { id: 6, name: "Aleksandr" },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    const stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;

        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newText;
            return stateCopy;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}
export default dialogsReducer;