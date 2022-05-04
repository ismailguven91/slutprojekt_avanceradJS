import ReactDOM from "react-dom/client";
import { useState } from "react";
import HomePage from "./modules/Homepage";
import ShopPage from "./modules/ShopPage";



function App() {

    let userName = '';
    const [stateName, setStateName] = useState('');
    const [stateIsLoggedIn, setStateIsLoggedIn] = useState(false);

 /*    function updateUserInfo(){
        setStateName(stateName);
        console.log(stateName);
    } */
    
    function updateLogInStatus(){
        setStateIsLoggedIn(!stateIsLoggedIn)

    }

    console.log(stateName);

    return (
        <>
        {stateIsLoggedIn ? <ShopPage updateLogInStatus={updateLogInStatus} name={stateName}/> : <HomePage updateLogInStatus={updateLogInStatus} setStateName={setStateName}/>}
        </>
    )
}


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);