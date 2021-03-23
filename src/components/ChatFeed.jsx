import MessageForm from './MessageForm';
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    // console.log(props)

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat]

    console.log('chats :', chats)
    console.log('activeChat :', activeChat)
    console.log('chat :', chat)
    console.log('userName :', userName)
    console.log('messages :', messages)

    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;