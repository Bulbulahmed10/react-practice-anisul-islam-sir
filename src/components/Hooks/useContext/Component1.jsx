import React, {useState} from 'react'
import Component2 from './Component2'
import { UserContext } from './userContext'


const Component1 = () => {
  const [user, setUser] = useState({id: 101, name: "Bulbul Ahmed"})
  const [text, setText] = useState("hello i am text")
  
  return (
    <UserContext.Provider value={{user, text}}>
      <Component2  />
    </UserContext.Provider>
  )
}

export default Component1