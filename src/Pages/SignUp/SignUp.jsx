import { useContext, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { Context } from "../../Context/AuthProvider";

const SignUp = () => {
  const [showP, setShowp] = useState(false);
  const [error, setError] = useState('')

  const { signWithGoogle, signUpUser } = useContext(Context);
  const handleShowP = () => {
    setShowp(!showP);
  };
  const handleGoogleSignin = () => {
    signWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    e.target.reset();

    if (password.length < 6) {
      return setError('Password Should At-least 6 character or longer')
    }
    else if(!/(?=.*[A-Z])(?=.*[@#$%^&*()_+-=]).*/.test(password)){
      return setError('Your Password should contain at-least one Uppercase an Special character.')
  }

    signUpUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-[80vh]">
          <div className="hero-content flex-col gap-8">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <div className="card  w-96   shadow-2xl pt-3 bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="your name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="emil"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="form-control relative">
                      <input
                        type={showP ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                      <span
                        className="absolute top-4 right-2"
                        onClick={handleShowP}
                      >
                        {showP ? <GoEye /> : <GoEyeClosed />}
                      </span>
                    </div>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-success text-white font-semibold">
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="my-1 text-red-400 font-medium">
                  {
                    error && <p>Error : {error}</p>
                  }
                  <p className="my-4 text-black">
                  Do not have a account ? :{" "}
                  <Link to={"/signIn"} className=" font-bold text-green-500">
                    Sign In
                  </Link>
                </p>
                </div>

                
              </div>
            </div>
            <button
              onClick={handleGoogleSignin}
              className="btn z-50 w-full  bg-gray-50 hover:bg-gray-50  drop-shadow-2xl font-semibold mb-3"
            >
              <FcGoogle></FcGoogle>
              Sign Up With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
