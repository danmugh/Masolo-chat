import { useState } from 'react';
import axios from 'axios';

const privateKey = 'dcb9cb5a-753d-48b0-936d-6b8a657987a2';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        // console.log("username", username)
        // console.log("secret", password)

        e.preventDefault();

        const authObject = {
            "PRIVATE-KEY": privateKey,
            "username": username,
            "secret": password
        };

        try {
            await axios.post('https://api.chatengine.io/users/', { header: 'PRIVATE-KEY: {dcb9cb5a-753d-48b0-936d-6b8a657987a2}', data: {
                    "username": `${username}`,
                    "secret": `${password}`
                } });

            // window.location.reload();

            setError('');
        } catch (err) {
            setError('Oops, incorrect credentials.');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Create an account</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>

    );
};

export default SignUp;