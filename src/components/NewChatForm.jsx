import { useState } from 'react';
import { Input } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import './NewChatForm.css';
import {newChat as newChat$1, newChat} from "react-chat-engine";
import Offline from "./Offline";


const NewChatForm = (props) => {

    const {creds } = props;

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);

    };

    const handleAdd = (event) => {
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) {

            newChat(creds, {
                title: text
            }, function () {})

        }

        setValue('');
    };

    const suffix = (
        <button type="submit"
                className="addChat-button"

        >
            <PlusCircleTwoTone
                className="addChat-icon"
                // onClick={() => {(alert("You add a new chat"))}}
                onClick={handleAdd}
                style={{ color: '#842fe5'}}
            />
        </button>
    );



    return (
        <div className="main-container">
            <div className="addChat-container">
                <Input
                    style={{ borderRadius: '25px' }}
                    allowClear
                    suffix={suffix}
                    value={value}
                    onChange={handleChange}
                    placeholder="Add new chat" />
            </div>
        </div>



        // <div className="main-container">
        //     <div className="addChat-container">
        //         <div>
        //             <Input
        //                 style={{ borderRadius: '25px' }}
        //                 allowClear
        //                 suffix={suffix}
        //                 value={value}
        //                 onChange={handleChange}
        //                 placeholder="Add new chat" />
        //         </div>
        //     </div>
        // </div>
    );
};

export default NewChatForm;