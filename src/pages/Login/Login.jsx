import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Header from "../../shared/Header/Header";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  // for location where to go after login
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // signIn
    signIn(email, password)
      .then((result) => {
        console.log(result);

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="font-poppins ">
      <Header></Header>
      <NavBar></NavBar>

      <div className=" text-white bg-login-image bg-cover bg-no-repeat py-20">
        <div className="hero-overlay bg-opacity-60"></div>
        <div>
          <h1 className="text-4xl font-semibold text-center ">Login Here</h1>
          <div className="mx-3 md:2 mt-7">
            <form
              onSubmit={handleLogin}
              className="mx-auto md:w-3/4 lg:w-1/2 px-2 "
            >
              <div className="form-control">
                <label className="label">
                  <span className="">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className=" link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-violet-600 text-white hover:text-black text-xl">Login</button>
              </div>
            </form>
            <p className="text-center mt-4 font-semibold font-poppins">
              Don't have an account ?{" "}
              <Link className="text-violet-600 underline" to="/register">
                Register Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
