import {combineReducers , legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sidebar : sideBarReducer
});

let store =  createStore(reducers);
window.store = store;

export default store;
