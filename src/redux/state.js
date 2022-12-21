
let rerenderEntireTree = () => {
    console.log('State was changed!');
}

let state = {
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

}

window.state=state;

export let addMessage = () => {
    let newMessage = {
        id: state.dialogsPage.messages.length + 1,
        message : state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText ='';
    rerenderEntireTree(state);
}

export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message : state.profilePage.newPostText,
        likesCount : 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText ='';
    rerenderEntireTree(state);
}

/* Функция синхронизации поля ввода нового поста с state*/
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText= newText;
    rerenderEntireTree(state);
}

/* Функция синхронизации поля ввода нового сообщения с state*/
export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;