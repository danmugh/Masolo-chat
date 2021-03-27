const TheirMessage = (props) => {

    const { message, lastMessage } = props

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                />
            )}
            {message.attachments && message.attachments.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className={isFirstMessageByUser ? 'firstMessage-image' : 'message-image'}
                    />
                )
                : (
                    <div className={isFirstMessageByUser ? 'theirFirst-message' : 'their-message'} >
                        {message.text}
                    </div>
                )}
        </div>
    );
}

export default TheirMessage;