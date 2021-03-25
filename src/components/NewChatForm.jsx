import { useState } from 'react';
import { Input } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import './NewChatForm.css'



const NewChatForm = (props) => {

    const {creds } = props;

    console.log('creds', creds)

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) {

            // ...
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
                onClick={handleSubmit}
            />
        </button>
    );

    return (
        <div className="main-container">
            <div className="addChat-container">
                <div>
                    <Input
                        style={{ borderRadius: '25px' }}
                        allowClear
                        suffix={suffix}
                        value={value}
                        onChange={handleChange}
                        placeholder="Add new chat" />
                </div>
            </div>
        </div>

    );
};

export default NewChatForm;