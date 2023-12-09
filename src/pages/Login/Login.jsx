import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState();

  const location = useLocation();

  const textStyle = {
    fontFamily: "'Ephesis', cursive",
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      navigate(location?.state ? location?.state : "/");
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Good Job...",
          text: "Login Successfully",
        });
        form.reset();
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  //     googleLogin()
  //       .then(() => {
  //         Swal.fire({
  //           icon: "success",
  //           title: "Good Job...",
  //           text: "Login Successfully",
  //         });
  //         navigate(location?.state ? location?.state : "/");
  //       })
  //       .catch((error) => {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: error.message,
  //         });
  //       });
  //   };
  return (
    <div>
      <Helmet>
        <title>Wedding Wave | Login</title>
      </Helmet>
      <div
        className="flex justify-center items-center md:py-20  pt-28 "
        // className="w-full h-[80vh] object-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/TKKWzZt/405220605-179386261922439-6898573939199129398-n.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="lg:flex hidden">
          <img
            src="https://i.ibb.co/HB5P5XD/Premium-Vector-Online-registration-and-sign-up-with-man-sitting-near-smartphone-removebg-preview.png"
            alt=""
            className="h-[500px]"
          />
        </div>

        <div className="flex items-center justify-center h-screen ">
          <div className="bg-white p-8  shadow-md w-96 rounded-md">
            <h2
              className="text-4xl font-bold mb-4 text-center"
              style={textStyle}
            >
              Login to Wedding Weave
            </h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4 mt-12 border-b-2 pb-9">
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="  p-2 rounded w-full focus:outline-none focus:border-black border-2 text-black font-medium hover:bg-black hover:text-white"
                >
                  <div className="flex items-center gap-6 justify-center">
                    <FcGoogle className="text-xl"></FcGoogle>
                    continue with google
                  </div>
                </button>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="username"
                  name="email"
                  className="w-full border p-2 rounded"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4 relative flex">
                <div className="flex-1">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-full border p-2 rounded"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <span
                  className="absolute top-1/2 right-0 px-4 pt-1"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="hover:bg-[#BFB2B3] text-white p-2 rounded w-full bg-[#836B6C]  focus:outline-none focus:ring focus:border-blue-300"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="pt-5">
              <p>
                Do not have an account?
                <Link to={"/register"}>
                  <span className="text-[#BFB2B3] font-medium">Sign up</span>{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
