import MultipleInputs from "./MultipleInputs";
import ProductInfo from "./ProductInfo";
import UserInfo from "./UserInfo";


export default function LogIn({updateLoggedIn}){
    
        // const [loggedIn, setLoggedIn] = useState(true);
        function handleClick(){
            updateLoggedIn();
        }
    
    
        return (<>
           {/* {loggedIn ? <div><ProductInfo/> <UserInfo/> </div> : <MultipleInputs/>} */}
           <button onClick={handleClick}>Log In</button>
    
         
        </>)
    }