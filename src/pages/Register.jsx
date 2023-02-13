import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Tarang Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="display name" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input style={{display: 'none'}} type="file" id="avatar-upload" />
                <label htmlFor="avatar-upload">
                  <img src={Add} alt="" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register;