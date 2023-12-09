import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photo).then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user added to the database");
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User create successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(location?.state ? location?.state : "/");
          }
        });
      });
    });
  };

  return (
    <div>
      <Helmet></Helmet>
      <div
        className="flex justify-center items-center md:py-20  gap-10 pt-32 "
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
            src="https://i.ibb.co/nQsD10F/Premium-Vector-Online-registration-and-sign-up-with-man-using-laptop-removebg-preview.png"
            alt="Registration"
            className="h-[500px]"
          />
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-8 shadow-md w-96 rounded-md">
            <h2 className="text-4xl font-bold mb-9 text-center">
              Register to Wedding Weave
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="username"
                  {...register("email", { required: true })}
                  name="email"
                  className="w-full border p-2 rounded"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <span className="text-red-600">email is required</span>
                )}
              </div>
              <div className="mb-4 flex relative">
                <div className="flex-1">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label>

                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    className="w-full border p-2 rounded"
                    placeholder="Enter your password"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-0 px-3 pt-1  "
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="imgUrl"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="imgUrl"
                  {...register("photo", { required: true })}
                  name="photo"
                  className="w-full border p-2 rounded"
                  placeholder="Enter your image URL"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  id="name"
                  name="name"
                  className="w-full border p-2 rounded"
                  placeholder="Enter your name"
                  required
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#836B6C]  text-white p-2 rounded w-full hover:bg-[#BFB2B3]  focus:outline-none focus:ring focus:border-blue-300"
                >
                  Register
                </button>
              </div>
            </form>

            <div>
              <p>
                Already Have an Account?{" "}
                <Link to={"/login"}>
                  <span className="text-[#BFB2B3] font-medium">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
