import React, { useEffect, useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [invalid, setInvalid] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/login", { username, password });
    if (res.status === 200) {
      navigate("/admin");
    } else {
      setUsername("");
      setPassword("");
      setInvalid(true);
    }
  };

  useEffect(() => {
    axios.get("/auth").then((res) => {
      if (res.status === 200) {
        navigate("/admin");
      }
    });
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <form
        className="bg-white rounded-lg shadow-lg p-10 w-4/5 md:w-1/2 lg:w-[500px]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl mb-10 font-bold uppercase">Login:</h1>
        {invalid && (
          <p className="text-xs font-bold text-red-500 mb-6 italic">
            *Invalid credentials
          </p>
        )}
        <div className="input-field">
          <label htmlFor="username" className="label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="input"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button" type="submit">
          Login <RiLoginCircleFill />
        </button>
      </form>
    </div>
  );
};

export default Login;
