import { useContext, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Context } from "../../Context/AuthProvider";
import swal from "sweetalert";



const SignIn = () => {
  const { signWithGoogle, user, signInUser } = useContext(Context);
  const [showP, setShowp] = useState(false);
  const [error, setError] = useState(null)
  const location = useLocation();


  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    e.target.reset();
   

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        swal("Great!", "Sign In SuccessFully", "success");
      })
      .catch((error) => {
        
        if (error.code === 'auth/wrong-password') {
          setError("Password doesn't match") 
        } else if (error.code === 'auth/user-not-found') {
          setError("Email doesn't match")
        }else{
          console.log(error);
        }
      })
  };
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
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="hero min-h-[80vh]">
          <div className="hero-content flex-col gap-8">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <div className="card  w-96  shadow-2xl pt-3 bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSignIn}>
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
                    <button className="btn btn-success font-semibold text-white">
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="my-1 text-red-400 font-medium">
                  {
                    error && <p>Error : {error}</p>
                  }
                  <p className="my-4 text-black">
                  Do not have a account ? :{" "}
                  <Link to={"/signUp"} className=" font-bold text-green-500">
                    Sign Up
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
              Sign IN With Google
            </button>
          </div>
          {user && (
            <Navigate to={location?.state ? location.state : "/"}></Navigate>
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;
