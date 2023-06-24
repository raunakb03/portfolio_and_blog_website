/* eslint-disable no-undef */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  showToastDangerMessage,
  showToastSuccessMessage,
} from "../../utils/Toast";
import axios from "axios";
import GetUser from "../context/userContext";

const Login = () => {
  const navigate = useNavigate();
  const user = GetUser();
  if (user) {
    navigate("/blog");
  }
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      showToastDangerMessage("Please enter a valid email address");
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/login`,
        userData,
        config
      );

      localStorage.setItem("userData", JSON.stringify(data.user));
      showToastSuccessMessage("Login Success");
      navigate("/blog");
    } catch (error) {
      showToastDangerMessage(error.response.data.message);
    }
  };

  return (
    <div className="flex mt-[90px] align-middle justify-center items-center w-[100vw] h-[100vh] min-h-fit z-[50] linear-gradient-class">
      <div className="bg-[#fff] w-2/3 md:w-1/2 form-shadow p-8 md:p-16 rounded-[10px]">
        <h1 className="m-auto w-fit mb-10 text-2xl font-bold">Login</h1>
        <form
          onSubmit={formSubmitHandler}
          spellCheck="false"
          className="w-full text-[18px] flex align-middle justify-center items-center flex-col gap-10"
        >
          <div className="w-[90%] border-b-[2px] border-[#b7b2b2] outline-none">
            <input
              name="email"
              value={email}
              className="w-full"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="w-[90%] border-b-[2px] border-[#b7b2b2] outline-none">
            <input
              name="password"
              value={password}
              className="w-full"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <button
            className="p-3 px-5 bg-[#facf0f] rounded-[10px] transition-transform duration-[0.3s] hover:-translate-y-[3px] hover:scale-[1.1] flex justify-center items-center"
            type="submit"
          >
            Login
          </button>
          <div className="text-[15px]">
            <p>
              New Here?
              <Link to="/register" className="text-yellow-400">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
