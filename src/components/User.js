import { useState } from "react";

const User = () => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count= {count}</h1>
      <h1>Count2= {count2}</h1>
      <h2>Name: Tushar</h2>
      <h3>Location: Yavatmal</h3>
      <h4>Contact: abcd@gmail.com</h4>
    </div>
  );
};

export default User;
