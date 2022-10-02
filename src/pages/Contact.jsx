import React from 'react'
import {useNavigate} from "react-router-dom"

const Contact = () => {

  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa tempore incidunt, at iure tempora sequi amet ipsum, suscipit necessitatibus voluptatibus ullam cupiditate, deserunt porro corrupti assumenda est quam perferendis.
        
      </p>
      <button onClick={() =>{
        navigate("/")
      }}>Go to Home page</button>
    </div>
  )
}

export default Contact