import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";

let store = {
    getState() {

        return this._state;
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "HI, bitches!!!", likesCount: 12 },
                { id: 2, message: "Bla bla bla fuck you!", likesCount: 16 },
                { id: 3, message: " пук пук!", likesCount: 336 },
                { id: 4, message: "ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ!!!!!!!!!!!", likesCount: 1236 },
            ],
            newPostText: ''

        },
        dialogsPage: {
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
        },
        sidebar: {

        },
    },

    _callSubscriber() {
        console.log('State was changed!');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // action - объект, который описывает что надо соершить! {type : 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;