import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
// import { Input, Space } from 'antd';
// import { PictureFilled,  } from '@ant-design/icons';

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

    // const suffix = (
    //     <div>
    //         <label htmlFor="upload-button">
    //     <span
    //         className="image-button"
    //     >
    //       <PictureFilled
    //           className="picture-icon"
    //           style={{
    //               fontSize: 16,
    //               color: '#1890ff',
    //           }}
    //       />
    //     </span>
    //         </label>
    //         <input
    //             type="file"
    //             multiple={false}
    //             id="upload-button"
    //             style={{ display: 'none' }}
    //             onChange={handleUpload.bind(this)}
    //         />
    //         <button
    //             type="submit"
    //             // className="send-button"
    //         >
    //             <SendOutlined className="send-icon" />
    //         </button>
    //     </div>
    //
    // );

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
            <span className="image-button">
              <PictureOutlined className="picture-icon" />
            </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload.bind(this)}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>

            {/*<Input*/}
            {/*    // className="message-input"*/}

            {/*    placeholder="Type your message text"*/}
            {/*    enterButton={handleSubmit}*/}
            {/*    size="large"*/}
            {/*    suffix={suffix}*/}
            {/*    value={value}*/}
            {/*    allowClear*/}
            {/*    onChange={handleChange}*/}
            {/*    onSubmit={handleSubmit}*/}
            {/*    onSearch={handleSubmit}*/}
            {/*/>*/}

        </form>


    );
};

export default MessageForm;