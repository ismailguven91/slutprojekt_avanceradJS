import { useState } from "react";

export default function MultipleInputs({changeUserInfo}) {

    const [formData, setFormData] = useState({
        firstName: '',
    });

    function handleChange({ target }) {
        // console.log(target.name);
        setFormData({
            ...formData,
            [target.name]: target.value
        })
        console.log(formData);
    }

    function handleSubmit(event) {
        event.preventDefault();
        changeUserInfo(formData);
        
    }
    return (
        <form>
            <input onChange={handleChange} placeholder='First Name' name='firstName'></input>
            <br />
            <button type = "submit" onClick={handleSubmit}>Submit</button>

        

        </form>
    )
}