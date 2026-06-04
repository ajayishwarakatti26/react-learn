import React from 'react'
import "./UserCard.css"
import  ajay from '../assets/ajay.jpeg'


const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p>{props.name}</p>
      
        <img src={ajay} alt="love" id="user-img"></img>
        <p id="user-desc">description</p>
    </div>
  )
}

export default UserCard