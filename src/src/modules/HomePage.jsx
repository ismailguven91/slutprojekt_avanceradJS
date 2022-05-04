import { useState } from "react";

export default function HomePage({ updateLogInStatus, setStateName }) {

    function handleClick(event) {
        event.preventDefault();
        //updateLogIn;
        updateLogInStatus();  
    }

    function handleChange(event) {
        const userName = event.target.value;
        setStateName(userName);
    }

    return (
        <>
            <form>
                <input type="text" placeholder="Name" onChange={handleChange}></input>
                <button onClick={handleClick}>Log In</button>
            </form>
        </>
    )
}