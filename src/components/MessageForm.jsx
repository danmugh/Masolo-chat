import { useState } from 'react';
import './MessageForm.css'
import { sendMessage, isTyping } from 'react-chat-engine';
import { Input, Space } from 'antd';
import { PictureFilled, SendOutlined } from '@ant-design/icons';

// const { Search } = Input;

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) {
            sendMessage(creds, chatId, { text });
        }

        setValue('');
    };

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    };

    const suffix = (
        <div>
            <button
                type="submit"
                className="send-button"
            >
                <SendOutlined
                    className="send-icon"
                    style={{ color: '#842fe5'}}
                />
            </button>
        </div>

    );

    const prefix = (
        <div>
            <label htmlFor="upload-button">
                <span
                    className="image-button"
                >
                  <PictureFilled
                      className="picture-icon"
                      style={{ color: '#842fe5' }}
                  />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload.bind(this)}
            />
        </div>
    )


    return (
        <form className="message-form" onSubmit={handleSubmit}>

            <Input
                style={{ borderRadius: '25px' }}
                placeholder="Type your message text"
                enterButton={handleSubmit}
                size="large"
                suffix={suffix}
                prefix={prefix}
                value={value}
                allowClear
                onChange={handleChange}
                onSubmit={handleSubmit}
                onSearch={handleSubmit}
            />

        </form>

    );
};

export default MessageForm;