import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const isDisabled = email === "" || password === "";
  const navigation = useNavigate();
  const payload = {
    email: email,
    password: password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        payload
      );
      localStorage.setItem("token", res?.data.token);

      navigation("/random_user");
      console.log("Login Yapıldı", res?.data.token);
    } catch (error) {
      console.log("error:", error);
      return error;
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex px-16 py-12 flex-col gap-3 max-w-xl border  border-gray-300 rounded-2xl shadow-2xl ">
      <div>
        Üye değilseniz ? <Link to="/register">Üye Ol</Link>
      </div>

      <label className="flex flex-col gap-1">
        Email
        <input
          onChange={(e) => setemail(e.target.value)}
          className="shadow-sm p-3 border-gray-500 bg-gray-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Password
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          className="shadow-sm p-3 border-gray-500 bg-gray-200"
        />
      </label>

      <button
        disable={isDisabled}
        className={`bg-blue-400 rounded shadow-sm text-white text-lg p-3 
          ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}>
        Giriş Yap
      </button>
    </form>
  );
};
export default LoginForm;
