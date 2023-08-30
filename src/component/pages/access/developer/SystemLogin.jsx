import React from "react";
import Logo from "../../../svg/Logo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SpinnerButton from "../../../partials/spinners/SpinnerButton";
import { Link } from "react-router-dom";
import ModalValidate from "../../../partials/modals/ModalValidate";
const SystemLogin = () => {
  const [isPasswordShow, setIsPasswordShow] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    setInterval(() => {
      setIsValid(true);
    }, 2500);
  };

  const handleShowPassword = () => setIsPasswordShow(!isPasswordShow);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="login w-full max-w-[380px] border border-gray-200 py-8 px-4 rounded-md shadow-sm">
          <div className="flex justify-center">
            <Logo className="mx-auto" />
          </div>
          <h2 className="mb-0 my-5 text-center text-lg">System Login</h2>
          <form action="">
            <div className="form__wrap">
              <label htmlFor="">Email</label>
              <input type="email" disabled={isLoading ? true : false} />
              <span className="error-show">*required</span>
            </div>
            <div className="form__wrap">
              <label htmlFor="">Password</label>
              <input
                type={isPasswordShow ? "text" : "password"}
                disabled={isLoading ? true : false}
              />
              <span className="error-show">*required</span>
              <button
                type="button"
                className="absolute top-9 right-3"
                onClick={handleShowPassword}
              >
                {isPasswordShow ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              className="btn btn--primary w-full"
              onClick={handleSubmit}
              disabled={isLoading ? true : false}
            >
              Login {isLoading ? <SpinnerButton /> : ""}
            </button>

            <Link
              to="/system/forgot-password"
              className="text-primary block mt-6 text-xs text-center"
            >
              Forgot Password?
            </Link>
          </form>
        </div>
      </div>
      {isValid && <ModalValidate setIsValid={setIsValid} />}
    </>
  );
};
export default SystemLogin;
