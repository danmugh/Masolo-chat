import MessageForm from './MessageForm';
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import ChatHeader from "./ChatHeader";
import Offline from "./Offline"
import Spinner from "./Spinner";

const ChatFeed = (props) => {
    // console.log(props)

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat]

    const renderReadReceipts = (message, isMyMessage) => {
        return (
            chat.people.map((person, index) => person.last_read === message.id && (
                <div
                    key={`read_${index}`}
                    className="read-receipt"
                    style={{
                        float: isMyMessage ? 'right' : 'left',
                        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
                    }}
                />
            ))
        )
    }

    // console.log('chats :', chats)
    // console.log('activeChat :', activeChat)
    // console.log('chat :', chat)
    // console.log('userName :', userName)
    // console.log('messages :', messages)

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }} className="message-bubble" >
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        });
    };

    renderMessages()

    // display: flex;
    // justify-content: center;
    // align-items: center;

    if (!chat) return (
        // <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
        <div style={{position: 'relative'}} >
            <Spinner />
        </div>
    )

    return (
        <div className="chat-feed">
            <div>
                <ChatHeader chat={chat} {...props} />
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;