import React, {useContext} from 'react'
import {UserContext} from "./userContext"


const Component4 = () => {
  const {user, text} = useContext(UserContext)
  console.log(user, text);
  return (
    <div>

     <h1> {user.id} </h1>

     <h1> {user.name} </h1>
    </div>
  )
}

export default Component4