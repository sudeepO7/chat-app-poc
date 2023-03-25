import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://images.herzindagi.info/image/2022/Oct/sbi-asha-scholarship-program-2022-BENEFITS.jpg" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.herzindagi.info/image/2022/Oct/sbi-asha-scholarship-program-2022-BENEFITS.jpg" alt="" />
      </div>
    </div>
  )
}

export default Message