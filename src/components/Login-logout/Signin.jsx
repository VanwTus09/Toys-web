import { useContext, useState } from "react";
import { signIn } from "../../api/Auth";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { setUser } = useContext(Context);
  const navigate = useNavigate();

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const onChangeFormField = (value, field) => {
    setSignInForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSignIn = async () => {
    const { email, password } = signInForm;
    const response = await signIn(email, password);
    setUser(response?.user);
    alert("Bạn đã đăng nhập thành công");
    navigate("/");
  };

  return (
    <section className="text-center relative  ">
      <div className="bg-gray-50 dark:bg-gray-900 ">
        {" "}
        <h1 className="font-bold text-2xl">Sign in </h1>
        <div className="p-3">
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={signInForm.email}
                onChange={(e) => onChangeFormField(e.target.value, "email")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                value={signInForm.password}
                onChange={(e) => onChangeFormField(e.target.value, "password")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <button
              onClick={handleSignIn}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <p className="p-2">
              Bạn chưa có tài khoản ? Đăng kí tại{" "}
              <a href="/Signup" className="font-bold">
                Đây
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;
