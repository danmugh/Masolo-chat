import './ChatHeader.css'

const ChatHeader = ({ chat }) => {

    return (
        <div>
            <div className="main-chatHeader-container">
                <div className="chatHeader-container" >
                    <div className="chatHeader-title">{chat?.title}</div>
                    <div className="chatHeader-subtitle">
                        {chat.people.map((person) => ` ${person.person.username}`)}
                    </div>
                </div>
            </div>
            <div className="more-space"/>
        </div>



    );
};

export default ChatHeader;