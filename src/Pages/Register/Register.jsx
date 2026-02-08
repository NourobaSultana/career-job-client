import React, { use } from "react";
import animationLottie from "../../assets/Lotties/Register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../Context/AuthContext";
import SocialLogin from "../../Shared/SocialLogin";
import { NavLink } from "react-router";

console.log(animationLottie);

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center ">
          <div className="text-center">
            {/* <Lottie
              animationData={animationLottie}
              loop={true}
              className="w-[300px] h-[300px]"
            /> */}
          </div>
        </div>
        <div className="card bg-white w-full max-w-sm mx-auto shrink-0 shadow-xl rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-center mt-3 text-gray-800">
            Register Now!
          </h1>
          <div className="card-body mt-6">
            <form onSubmit={handleRegister} className="space-y-4">
              <fieldset className="space-y-2">
                <label className="label text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />

                <label className="label text-gray-700 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </fieldset>

              <div className="text-right">
                <a className="link link-hover text-sm text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button className="btn w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors">
                Register
              </button>
            </form>

            <SocialLogin />

            <h2 className="text-center mt-6 text-gray-600 text-sm">
              Already have an account?{" "}
              <NavLink to={"/signin"}>
                <span className="text-blue-500 font-medium hover:underline">
                  Sign In
                </span>
              </NavLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
