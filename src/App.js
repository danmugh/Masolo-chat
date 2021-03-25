import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import NewChatForm from "./components/NewChatForm";

import './App.css';
import sound from './assets/Chai-There-Is-God-O-Sound-Effect-via-instrumentals.com_.ng_.mp3'

const projectID = 'e6955a0a-4c5d-46fa-abd8-7ebb20a31ef2';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            onNewMessage={() => new Audio(sound).play()}
            renderNewChatForm={(creds) => <NewChatForm {...creds} />}
        />
    );
};

export default App;