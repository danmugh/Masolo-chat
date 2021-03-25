import './ChatHeader.css'

const ChatHeader = ({ chat }) => {

    return (

        <div className="main-con">
            <div className="chatHeader-container" >
                <div className="chatHeader-title">{chat?.title}</div>
                <div className="chatHeader-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
        </div>

    );
};

export default ChatHeader;