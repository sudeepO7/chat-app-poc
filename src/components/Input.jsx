import React, { useContext, useState } from 'react'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import Attach from "../img/attach.png"
import Img from "../img/img.png"

const Input = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = () => {

  };
  
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display: 'none'}} id="media-file" />
        <label htmlFor="media-file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input