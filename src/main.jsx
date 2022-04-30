import ReactDOM from "react-dom/client";
import { useState } from "react";
import UserInfo from "./modules/UserInfo";
import ProductInfo from "./modules/ProductInfo";
import LogIn from "./modules/LogIn";


function App() {


    const [loggedIn, setLoggedIn] = useState(false);
        function updateLoggedIn(){
            setLoggedIn(!loggedIn);
        }

    return (
        <>
          {loggedIn ? <ProductInfo allProducts={allProducts}/> : <LogIn updateLoggedIn={updateLoggedIn}/>}
        </>
    )
}


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);