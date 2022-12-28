
let store = {
    _state : {
        profilePage: {
            posts: [
                { id: 1, message: "HI, bitches!!!", likesCount: 12 },
                { id: 2, message: "Bla bla bla fuck you!", likesCount: 16 },
                { id: 3, message: " пук пук!", likesCount: 336 },
                { id: 4, message: "ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ!!!!!!!!!!!", likesCount: 1236 },
            ],
            newPostText:''
    
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
    
    },

    getState () {
        return this._state;
    },

    _callSubscriber () {
        console.log('State was changed!');
    },

    addPost () {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message : this._state.profilePage.newPostText,
            likesCount : 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText ='';
        this._callSubscriber(this._state);
    },

    addMessage () {
        let newMessage = {
            id: this._state.dialogsPage.messages.length + 1,
            message : this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText ='';
        this._callSubscriber(this._state);
    },

    /* Функция синхронизации поля ввода нового поста с state*/
    updateNewPostText (newText)  {
        this._state.profilePage.newPostText= newText;
        this._callSubscriber(this._state);
    },

    /* Функция синхронизации поля ввода нового сообщения с state*/
    updateNewMessageText (newText)  {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    subscribe  (observer)  {
        this._callSubscriber = observer;
    },


}


export default store;
window.state=store;