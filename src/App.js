import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/Signin';
import NewChatForm from "./components/NewChatForm";

import './App.css';
import sound from './assets/Jesus-is-Lord-Sound-effect-via-instrumentals.com_.ng_.mp3'
import AuthPages from "./components/AuthPages";

const projectID = 'e6955a0a-4c5d-46fa-abd8-7ebb20a31ef2';

const App = () => {

    if (!localStorage.getItem('username')) return <AuthPages />;

    return (
        <ChatEngine
            height="100vh"
            // publicKey={projectID}
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}

            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio(sound).play()}
            renderNewChatForm={(creds) => <NewChatForm {...creds} />}

        />
    );
};

export default App;

// import React from 'react';
// import { ChatEngine } from 'react-chat-engine';
//
// export function App() {
//     return (
//         <ChatEngine
//             height='100vh'
//             userName='Mtk_67'
//             userSecret='123456'
//             projectID='264f5964-91f1-47e3-912b-bc4d777d1723'
//         />
//     );
// }

// "proxy": "https://api.chatengine.io:3000",
//
// export default App;