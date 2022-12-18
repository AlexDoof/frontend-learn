
let state = {
    profilePage: {
        posts: [
            { id: 1, message: "HI, bitches!!!", likesCount: 12 },
            { id: 2, message: "Bla bla bla fuck you!", likesCount: 16 },
            { id: 2, message: " пук пук!", likesCount: 336 },
            { id: 2, message: "ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ!!!!!!!!!!!", likesCount: 1236 },
        ],

    },
    dialogsPage: {
        messages: [
            /* БД сообщений*/ { id: 1, message: "Hi!!!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Yo ! =)" },
            { id: 4, message: "Yo ! =)" },
            { id: 5, message: "Yo ! =))" },
            { id: 6, message: "Yo !!! =)" },
        ],
        dialogs: [
            /* БД диалогов */ { id: 1, name: "Alexey" },
            { id: 2, name: "Daniil" },
            { id: 3, name: "Leonid" },
            { id: 4, name: "Masha" },
            { id: 5, name: "Arina" },
            { id: 6, name: "Aleksandr" },
        ]
    },

}
export default state;