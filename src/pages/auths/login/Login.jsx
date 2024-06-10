import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../slices/usersApiSlice";
import { setCredentials } from "../../../slices/AuthSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaApple,
  FaArrowLeftLong,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import Loading from "../../../components/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [detailsError, setDetailsError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setErrorMessage("Please input email and password");
        setDetailsError(true);
        return;
      }
      const res = await login({ email, password, rememberMe }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      setErrorMessage(
        err?.data?.message || err.error || "Incorrect username or password"
      );
    }
  };

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full px-5 md:px-0 mx-auto">
          {/* body */}
          <div className="w-full md:flex flex-col justify-center items-center ">
            <div className="md:w-[640px] mb-14 ">
              <button
                onClick={() => navigate(-1)}
                className="h-[100px] text-lg font-medium flex items-center justify-start gap-2"
              >
                <FaArrowLeftLong />
                <span>Back to website</span>
              </button>
              <div className="md:border border-[#ADBC9F] md:p-8 rounded-lg">
                <div className="md:border-none border-y min-h-[55px] md:block  gap-1 ">
                  <span>Want to login to your Charity Profile? </span>
                  <span>
                    <Link
                      to="/auth/donation-login"
                      className="text-[#12362A] font-semibold  items-center inline-block"
                    >
                      Login <MdArrowOutward className="inline" />{" "}
                    </Link>
                  </span>
                </div>
                <div className="min-h-[100px] w-full flex flex-col justify-center border-b md:border-y border-[#D9D9D9]">
                  <p className="md:text-[32px] text-[26px] font-semibold">
                    Log in to your Account
                  </p>
                  <p className="md:text-base text-sm">
                    Welcome back!, Log in to your account with
                  </p>
                </div>
                <div className="relative flex justify-center items-center">
                  <div className="flex justify-between border-t border-[#D9D9D9] items-center h-[100px] w-full gap-2 md:gap-2 pt-3">
                    <button className="md:w-[164px] w-[115px] md:h-[54px] h-[38px] rounded-lg border border-[#12362A] text-[#12362A] flex justify-center items-center">
                      <FaGoogle size={20} />
                    </button>
                    <button className="md:w-[164px] w-[115px] md:h-[54px] h-[38px] rounded-lg border border-[#12362A] text-[#12362A] flex justify-center items-center">
                      <FaApple size={20} />
                    </button>
                    <button className="md:w-[164px] w-[115px] md:h-[54px] h-[38px] rounded-lg border border-[#12362A] text-[#12362A] flex justify-center items-center">
                      <FaFacebookF size={20} />
                    </button>
                  </div>
                </div>
                <div className=" flex items-center w-full">
                  <div className="border-b w-full border-[#D9D9D9] flex-1"></div>
                  <div className="font-medium md:text-[20px] px-3 text-[14px] leading-[36px] ">
                    or sign up with Email
                  </div>
                  <div className="border-b w-full border-[#D9D9D9] flex-1"></div>
                </div>
                <div className="my-10">
                  <form onSubmit={handleLogin}>
                    <div>
                      <label htmlFor="email" className="text-sm">
                        Email
                      </label>{" "}
                      <br />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                        className={`p-4 border w-full rounded-lg ${
                          detailsError ? "border-[#EB4335]" : ""
                        } font-medium outline-none`}
                        onChange={(e) => setEmail(e.target.value)}
                        onClick={() => setDetailsError(false)}
                        value={email}
                      />
                    </div>
                    <div className="mt-6 relative">
                      <label htmlFor="password" className="text-sm">
                        Password
                      </label>{" "}
                      <br />
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        name="password"
                        id="password"
                        placeholder="Enter your Password"
                        className={`p-4 border w-full rounded-lg ${
                          detailsError ? "border-[#EB4335]" : ""
                        } font-medium outline-none`}
                        onChange={(e) => setPassword(e.target.value)}
                        onClick={() => setDetailsError(false)}
                        value={password}
                      />
                      <button
                        type="button"
                        className="absolute top-10 right-5"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <PiEyeSlashLight size={20} />
                        ) : (
                          <PiEyeLight size={20} />
                        )}
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <div className="relative rememberMe w-full">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          id="rememberMe"
                          className="rounded-full bg-[#12362A]"
                          onChange={(e) => setRememberMe(e.target.checked)}
                          value={rememberMe}
                        />
                        <label
                          htmlFor="rememberMe"
                          className="bg-white border border-[#12362A] cursor-pointer rounded-full h-[20px] w-[20px] top-5 left-0 absolute"
                        ></label>
                        <label
                          htmlFor="rememberMe"
                          className=" text-sm absolute top-5 left-6"
                        >
                          Remember Me
                        </label>
                      </div>
                      <div className="w-full flex justify-end mt-5">
                        <Link
                          to="/auth/forgot-password"
                          className="font-medium text-sm text-[#12362A]"
                        >
                          <span>Forgot password?</span>
                        </Link>
                      </div>
                    </div>
                    {detailsError && (
                      <div className="mt-4 text-[#EB4335] text-sm md:text-base">
                        {errorMessage}
                      </div>
                    )}
                    <div className="w-full mt-12">
                      <button
                        type="submit"
                        className="w-full px-6 py-4 bg-[#12362A] font-semibold md:text-xl text-sm text-white rounded-lg "
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                  <div className="text-center md:text-base text-sm flex justify-center gap-2 mt-8">
                    <span>Don't have an account?</span>
                    <Link to="/auth" className="text-[#12362A] font-semibold">
                      <span>Sign up!</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
