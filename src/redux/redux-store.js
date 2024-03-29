import {applyMiddleware,combineReducers , legacy_createStore as createStore} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sidebar : sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store =  createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
