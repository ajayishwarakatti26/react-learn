import React from 'react'

function Card(props) {
  return (
    <div>
         <input type="text" onChange={(e)=> props.setName(e.target.value)}/>
         <p>name set inside the chiled: <br />{props.name}</p>
       
    </div>
  )
}

export default Card
