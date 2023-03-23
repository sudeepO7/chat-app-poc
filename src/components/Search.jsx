import React, { useContext, useState } from 'react';
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch(error) {
      setErr(true);
    }
  };

  const handleKeyDown = e => {
    e.code === 'Enter' && handleSearch();
  };

  const handleSelect = async () => {
    // Check whether the group (chats in firestore) exists, if not then create
    const combinedId = currentUser.uid > user.uid ?
      currentUser.uid + user.uid :
      user.uid + currentUser.uid;
    try {
      const res = await getDocs(db, 'chats', combinedId);
      if (!res.exists()) {
        // Create a chat in chats collection
        await setDoc(doc, (db, 'chats', combinedId), { messages: [] });
      }
    } catch(error) {
      
    }
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" 
               onKeyDown={handleKeyDown}
               value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      { err && (
        <span>User not found</span>
      )}
      { user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search