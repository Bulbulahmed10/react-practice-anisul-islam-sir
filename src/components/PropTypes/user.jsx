import React from "react";
import PropTypes from "prop-types";

const User = ({ user }) => {
  return (
    <div>
      <h1> {user.id} </h1>
      <h1> {user.name} </h1>
    </div>
  );
};

User.propTypes = {
  //! key - value

  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.number,
  }),
};

export default User;

//! props types checking snipist

// import React from 'react'
// import PropTypes from 'prop-types'

// const user = props => {
//   return (
//     <div>user</div>
//   )
// }

// user.propTypes = {}

// export default user
