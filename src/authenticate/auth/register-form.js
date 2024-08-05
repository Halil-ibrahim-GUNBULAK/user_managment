import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <form
      action=""
      className="flex px-16 py-12 flex-col gap-3 max-w-xl border  border-gray-300 rounded-2xl shadow-2xl ">
      <div>
        Zaten üye misiniz ? <Link to="/login">Giriş Yap</Link>
      </div>
      <label className="flex flex-col gap-1">
        Kullanıcı Adı
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
      <label className="flex flex-col gap-1">
        Email
        <input
          type="text"
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
      <button className="bg-blue-400 rounded shadow-sm text-white text-lg p-3">
        Kaydol{" "}
      </button>
    </form>
  );
};
export default RegisterForm;
