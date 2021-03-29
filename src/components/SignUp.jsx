import React, { useState } from 'react';
import axios from 'axios';
import { UserAddOutlined } from '@ant-design/icons';


const privateKey = 'dcb9cb5a-753d-48b0-936d-6b8a657987a2';

const SignUp = ({ onclickBtnProps }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        // console.log("username", username)
        // console.log("secret", password)

        e.preventDefault();

        const authObject = {
            "PRIVATE-KEY": privateKey,
        };

        try {
            let requestData = {
                "username": `${username}`,
                "secret": `${password}`
            };
            await axios.post('https://api.chatengine.io/users/',  requestData, {
                headers: authObject,
            });

            window.history.back()

            setError('');
        } catch (err) {
            setError('Oops, incorrect datas.');
        }
    };

    return (

        <div className="wrapper">
            <div className="title">SignUp
                <span>
                    <UserAddOutlined style={{ fontSize: '35px' }} />
                </span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <label>Username</label>
                </div>
                <div className="field">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label>Password</label>
                </div>
                {error && <p className="error">{error}</p>}

                <br/>
                <div className="field">
                    <input type="submit" value="Signup"/>
                </div>
                <div className="signin-btn">Already a member? <button onClick={onclickBtnProps} >Signin now</button></div>
            </form>
        </div>

    );
};

export default SignUp;