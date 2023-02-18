import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Tarang Chat</span>
      <div className="user">
        <img src="https://images.herzindagi.info/image/2022/Oct/sbi-asha-scholarship-program-2022-BENEFITS.jpg" alt="" />
        <span>Sudeep</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar