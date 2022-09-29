import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
      {toggle &&(
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui culpa,
            exercitationem a dolorum ea consectetur, aperiam, tempore iste autem
            praesentium iusto. Praesentium fugit autem, illum in neque corrupti
            amet quia.
          </p>
        )}
      <div style={{ textAlign: "center" }}>
        <button 
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {
            toggle ? "Hide" : "show"
          }
        </button>
      </div>
    </div>
  );
};

export default Toggle;
