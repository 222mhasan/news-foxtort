import { Link } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photoUrl, email, password);

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="font-poppins">
        <NavBar></NavBar>
        <h1 className="text-4xl font-semibold text-center ">Register Here</h1>
        <div className="mx-3 md:2 mt-7">
          <form
            onSubmit={handleRegister}
            className="mx-auto md:w-3/4 lg:w-1/2 font-poppins"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered bg-slate-100 text-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="input input-bordered bg-slate-100"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered bg-slate-100"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered bg-slate-100"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mt-4 font-semibold font-poppins">
            Already have an account ?{" "}
            <Link className="text-blue-600 underline" to="/login">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
