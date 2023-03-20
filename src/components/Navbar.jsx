import React from 'react'
import { signOut } from '@firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Tarang Chat</span>
      <div className="user">
        <img src="https://images.herzindagi.info/image/2022/Oct/sbi-asha-scholarship-program-2022-BENEFITS.jpg" alt="" />
        <span>Sudeep</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar