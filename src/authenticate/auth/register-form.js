import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const isDisabled = fullname === "" || email === "" || password === "";
  const navigation = useNavigate();
  const payload = {
    fullName: fullname,
    email: email,
    password: password,
    memberAgreementVersion: "v1",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register", payload);
      console.log("Kullanıcı Oluşturuldu");
      navigation("/login");
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
        Zaten üye misiniz ? <Link to="/login">Giriş Yap</Link>
      </div>
      <label className="flex flex-col gap-1">
        Kullanıcı Adı
        <input
          type="text"
          onChange={(e) => setfullname(e.target.value)}
          className="shadow-sm p-3 border-gray-500 bg-gray-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Email
        <input
          type="text"
          onChange={(e) => setemail(e.target.value)}
          className="shadow-sm p-3 border-gray-500 bg-gray-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Password
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          className="shadow-sm p-3 border-gray-500 bg-gray-200"
        />
      </label>
      <label className="flex gap-1">
        <input
          type="checkbox"
          className="shadow-sm p-3 border-gray-500 bg-gray-200"
        />
        Üyelik Sözleşmesini Kabul Ediyorum
      </label>
      <button
        disable={isDisabled}
        className={`bg-blue-400 rounded shadow-sm text-white text-lg p-3 
          ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}>
        Kaydol
      </button>
    </form>
  );
};
export default RegisterForm;
