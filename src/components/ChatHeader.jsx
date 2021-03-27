import './ChatHeader.css';
import { MenuUnfoldOutlined, SettingOutlined, CloseOutlined } from '@ant-design/icons';
import {newChat} from "react-chat-engine";
import {useState} from "react";
import { ChatSettings, ChatList } from 'react-chat-engine';
import ChatFeed from "./ChatFeed";


const ChatHeader = (props) => {

    const { chat } = props

    const [menu, setMenu] = useState(false);
    const [setting, setSetting] = useState(false);
    const [backdrop, setBackdrop] = useState(false);

    const handleMenu = () => {
        setMenu(!menu)
        setBackdrop(!backdrop)
    };

    const handleSetting = () => {
        setSetting(!setting)
        setBackdrop(!backdrop)
    };

    const handleCloseBackdrop = () => {
        {
            menu && handleMenu();
        }
        {
            setting && handleSetting();
        }
    };



    // console.log('menu', menu)
    //
    // console.log('setting', setting)

    return (
        <>
            <div>
                <div className='main-chatHeader-container'>
                    <span className="test-span" >
                        <MenuUnfoldOutlined
                            // onClick={() => {(alert("You open the menu"))}}
                            onClick={ setting ? null : handleMenu }
                            style={{ color: setting ? 'rgb(240, 240, 240)' : '#842fe5'}}
                            className="menu-icon" />
                    </span>
                    <div className="chatHeader-container" >
                        <div className="chatHeader-title">{chat?.title}</div>
                        <div className="chatHeader-subtitle">
                            {chat.people.map((person) => ` ${person.person.username}`)}
                        </div>
                    </div>
                    <span className="test-span">
                    <SettingOutlined
                        // onClick={() => {(alert("You open the settings"))}}
                        onClick={ menu ? null : handleSetting }
                        style={{ color: menu ? 'rgb(240, 240, 240)' : '#842fe5'}}
                        className="setting-icon" />
                    </span>

                </div>
                <div className="more-space"/>
            </div>
            <div>
                <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'  >
                        <li className='navbar-toggle'>
                            <a href="#">
                                <CloseOutlined onClick={handleMenu}
                                               className='close-icon' style={{ color: '#842fe5'}} />
                            </a>
                        </li>

                        <ChatList {...props} />

                    </ul>
                </nav>
            </div>
            <div>
                <nav className={setting ? 'nav-setting active' : 'nav-setting'}>
                    <ul className='nav-setting-items'  >
                        <li className='navbar-toggle'>
                            <a href="#">
                                <CloseOutlined onClick={handleSetting}
                                               className='close-setting-icon' style={{ color: '#842fe5'}} />
                            </a>
                        </li>

                        <ChatSettings {...props} />

                        {/*<li key="01" className="nav-text">*/}
                        {/*    <a href="#">*/}
                        {/*        <SettingOutlined*/}
                        {/*            style={{ color: '#842fe5'}} />*/}
                        {/*        <span>Lorem</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li key="02" className="nav-text">*/}
                        {/*    <a href="#">*/}
                        {/*        <SettingOutlined*/}
                        {/*            style={{ color: '#842fe5'}} />*/}
                        {/*        <span>Ipsum</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li key="03" className="nav-text">*/}
                        {/*    <a href="#">*/}
                        {/*        <SettingOutlined*/}
                        {/*            style={{ color: '#842fe5'}} />*/}
                        {/*        <span>Dolor</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </div>
            <div
                onClick={handleCloseBackdrop}
                className={ backdrop ? "backdrop" : "" }
            />
        </>
    );
};

export default ChatHeader;