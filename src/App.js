import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
import './App.css';

// const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const App = () => {
    // if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID="e6955a0a-4c5d-46fa-abd8-7ebb20a31ef2"
            userName="Dan67"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

// infinite scroll, logout, more customizations...

export default App;