import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src="https://images.herzindagi.info/image/2022/Oct/sbi-asha-scholarship-program-2022-BENEFITS.jpg" alt="" />
        <div className="userChatInfo">
          <span>Sudeep</span>
        </div>
      </div>
    </div>
  )
}

export default Search