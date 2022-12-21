import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
/*-----------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {updateNewPostText} from './redux/state' ;
import {updateNewMessageText} from './redux/state' ;
import {addPost} from './redux/state';
import {addMessage} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <App state={state} 
      addPost={addPost}
      addMessage={addMessage} 
      updateNewPostText = {updateNewPostText}
      updateNewMessageText ={updateNewMessageText} />
    </React.StrictMode>
  );
}

/*-------------------------------------------------------*/

subscribe(rerenderEntireTree);

rerenderEntireTree(state);

reportWebVitals();
