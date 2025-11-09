import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const Login = () => {
  const { signInwithgoogle, loginUser } = use(AuthContext);

  const handellogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelGooglelogin = () => {
    signInwithgoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-base-200 py-8 my-4">
      <p className="text-3xl font-bold text-center">Login Now</p>{" "}
      <div className="">
        <div className="hero-content flex-col m-auto">
          <div className=" bg-base-100 w-full max-w-sm shadow-xl mx-auto">
            <div className="card-body">
              <form onSubmit={handellogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Email"
                    name="email"
                  />{" "}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input input-bordered w-full"
                    placeholder="Password"
                    name="password"
                  />{" "}
                  <div className="text-right mt-2">
                    {" "}
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4 w-full">Login</button>{" "}
                </fieldset>
              </form>
              <div className="divider">OR</div>{" "}
              <button
                class="btn bg-white text-black border-[#e5e5e5] mt-2 w-full"
                onClick={handelGooglelogin}
              >
                {" "}
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="text-center mt-4">Don't Have An Account? </p>{" "}
              <NavLink
                to={"/register"}
                className="text-green-700 font-bold text-center block"
              >
                {" "}
                Register Here
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
