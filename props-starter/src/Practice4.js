import React from "react";

const Practice4 = () => {
  const user = {
    id: 1,
    username: "BraveLittleTodoList",
    firstName: "Carlos",
    lastName: "Chapa",
    preferredName: "Carlos",
    url: "nucamp.co",
    twitter: "@BraveTodoList"
  };
  return (
    <div className="practice">
      {/*         
        1. Spread the "user" object into User so each "user" property becomes it's own prop
      */}
      <User {...user}/>
    </div>
  );
};

/*
  2. Destructure username and firstName from props
*/
const User = ({ firstName, username}) => {
  return (
    <div className="user">
      <h1>Hi {firstName} </h1>
      <p>Username: {username}</p>
    </div>
  );
};

export default Practice4;
