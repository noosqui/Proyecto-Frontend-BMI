import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "@store/Services/Security";

import SignUp from "./SignUp";
const Login = () => {
  const [signin, { isLoading, status, error, ...mutRest }] = useSigninMutation();
  const Navigator = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const  data = await signin({ name, email, password }).unwrap();
    console.log(data);
    Navigator("/login");
  }
  return (
    <SignUp
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleClick={handleClick}
      error={error}
    />
  );
}

export default Login;
