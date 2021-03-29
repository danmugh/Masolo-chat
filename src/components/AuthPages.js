import React, { useState } from 'react';
import './AuthPages.css'
import ReactCardFlip from 'react-card-flip';
import SignUp from "./SignUp";
import Signin from "./Signin";

const NewAuth = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className="parent" >
            <div className="body" >
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

                    <Signin onclickBtnProps={handleClick} />

                    <SignUp onclickBtnProps={handleClick} />

                </ReactCardFlip>
            </div>
        </div>
    );
};

export default NewAuth;
