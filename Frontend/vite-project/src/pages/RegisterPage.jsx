import React, {useState} from "react";
import API from "../api";

function RegisterPage() {

const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");

const register = async (e) => {
    e.preventDefault();

    try {
        await API.post("/auth/register" , {name , email , password});
alert("User Registered Successfully")
    } catch (error) {
        console.error("Error Found" , error.message);
    }
}


    return (

    <div>

        <h2>Register</h2> 

        <form onSubmit={register}>
            <label>Name</label>
    <input 
    type = "text"
    value={name}
    placeholder="Enter your name"
    onChange={(e) => setName(e.target.value)}
/> 

<label>Email</label>
    <input 
    type = "email"
    value={email}
    placeholder="Enter your email"
    onChange={(e) => setEmail(e.target.value)}
/> 

<label>Password</label>
    <input 
    type = "password"
    value={password}
    placeholder="Enter your password"
    onChange={(e) => setPassword(e.target.value)}
/> 

            <button>Register</button>
            
            
        </form>
    </div>
)
}

export default RegisterPage;
