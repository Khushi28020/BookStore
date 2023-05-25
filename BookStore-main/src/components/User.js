import React, { useState } from "react";

export default function User({ name, fun }) {
  const [age, setAge] = useState(5);
  const updateAge = () => {
    setAge(age + 5);
  };
  return (
    <>
      <h1>this is username {name}</h1>
      <p>Age:{age}</p>
      <button onClick={updateAge}>click</button>
    </>
  );
}
