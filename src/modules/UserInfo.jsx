export default function UserInfo({userInfo}){
    
    const {firstName} = userInfo;
    return(
        <>
            <h1>Welcome, {firstName}!</h1>
            <p>You're logged in</p>
        </>
    )
}