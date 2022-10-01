import React, {useRef} from "react";

const useRefHook = () => {

  const userNameRef = useRef()
  const userPasswordRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userName = userNameRef.current.value
    const userPassword = userPasswordRef.current.value
    console.log(userName);
    console.log(userPassword)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">UserName: </label>
        <input type="text" id="userName" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password"  id="password" ref={userPasswordRef} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default useRefHook;
