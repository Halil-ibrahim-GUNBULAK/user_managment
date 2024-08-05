import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <form
      action=""
      className="flex px-16 py-12 flex-col gap-3 max-w-xl border  border-gray-300 rounded-2xl shadow-2xl ">
      <div>
        Üye değilseniz ? <Link to="/register">Üye Ol</Link>
      </div>

      <label className="flex flex-col gap-1">
        Email
        <input
          type="text"
          className="shadow-sm p-3 border-gray-500 bg-gray-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Password
        <input
          type="text"
          className="shadow-sm p-3 border-gray-500 bg-gray-200"
        />
      </label>

      <button className="bg-blue-400 rounded shadow-sm text-white text-lg p-3">
        Giriş Yap
      </button>
    </form>
  );
};
export default LoginForm;
