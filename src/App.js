import React from "react";
import { useState } from "react";

export default function MyApp() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userDetail, setUserDetail] = useState({
    fullName: "",
    age: "",
    email: "",
    password: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log("FullName:", fullName);
    console.log("Age:", age);
    console.log("Email", email);
    console.log("Password", password);

    setFullName("");
    setAge("");
    setEmail("");
    setPassword("");
  };

  console.log(userDetail, "user detail");

  return (
    <div>
      <form onSubmit={handleClick}>
        <label>Full Name:</label>
        <br />
        <input
          required
          type="text"
          name="name"
          value={userDetail.fullName}
          onChange={(e) =>
            setUserDetail((prevState) => ({
              ...prevState,
              fullName: e.target.value,
            }))
          }
        />
        <br />
        <label>Age:</label>
        <br />
        <input
          type="string"
          name="age"
          value={userDetail.age}
          onChange={(e) =>
            setUserDetail((prevState) => ({
              ...prevState,
              age: e.target.value,
            }))
          }
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" name="name" value="submit" />
      </form>
    </div>
  );
}
