import React, { useState } from 'react';
import axios from 'axios';
import './AuthPages.css';
import {WechatOutlined} from "@ant-design/icons";

const projectID = 'e6955a0a-4c5d-46fa-abd8-7ebb20a31ef2';

const Signin = ({ onclickBtnProps }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': projectID,
            'User-Name': username,
            'User-Secret': password
        };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (err) {
            setError('Oops, incorrect credentials.');
        }
    };

    return (

            <div className="wrapper">
                <div className="title">Join chat
                    <span>
                        <WechatOutlined style={{ fontSize: '40px' }} />
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
                    <div className="content">
                        <div className="checkbox">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="pass-link"><a href="#">Forgot password?</a></div>
                    </div>
                    <div className="field">
                        <input type="submit" value="Login"/>
                    </div>
                    <div className="signup-btn">Not a member? <button onClick={onclickBtnProps} >Signup now</button></div>
                </form>
            </div>

    );
};

export default Signin;