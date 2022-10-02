import React, { useState } from "react";
import User from "./user";

const Users = () => {
  const [userName, setUserName] = useState({ id: 101, name: "BulBul Ahmed" });
  return (
    <div>
      <User user={userName} />
    </div>
  );
};

export default Users;
