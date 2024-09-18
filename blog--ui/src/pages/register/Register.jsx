import axios from "axios"
import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { axiosInstance } from "../../config"
function Register() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError ] = useState(false)

  const handleSubmit = async(e)=>{
    e.preventDefault();
  try {
    setError(false)
      const res = await axiosInstance.post("api/auth/register",
        {
          username,
          email,
          password,
        }
      );
    res.data && window.location.reload("/login")
    
    
  } 

  
  catch (error) {
    setError(true);
    
  }
    
    
  };
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm" onSubmit={handleSubmit}>
      <label className="names">Username</label>
      <input className="registerInput" type="text" placeholder="Enter your username..."
      onChange={e=>setUsername(e.target.value)} />
      <label className="names">Email</label>
      <input className="registerInput" type="text" placeholder="Enter your email..." 
       onChange={e=>setEmail(e.target.value)} />
      <label className="names">Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..." 
        onChange={e=>setPassword(e.target.value)}/>
      <button className="registerButton" type="submit">Register</button>
    </form>
      <button className="registerLoginButton"><Link className="link" to="/login">
     Login </Link></button>
    {error && <span>something went wrong</span>}
  </div>
  )
}

export default Register