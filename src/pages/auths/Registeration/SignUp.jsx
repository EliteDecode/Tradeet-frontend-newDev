import { Link } from "react-router-dom";
import Loading from "../../../components/Spinner";
import SignUpForm from "../../../components/AuthComponent/SignUpForm";
import SignUpActions from "../../../components/AuthComponent/SignUpActions";

const SignUp = () => {
  const isLoading = false;
  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          id="signup"
          className="w-full flex flex-col justify-center items-center">
          <div
            className="flex md:flex-col md:justify-start justify-center md:items-start md:border md:border-[#ADBC9F] 
					md:shadow-sm md:w-[680px] w-full  shadow-[#00000084] 
					rounded-[10px] mt-16 ">
            <div className="pt-6 px-10 flex flex-col w-full">
              <h1
                className="text-[#2D2D2D] md:text-[32px] text-[26px] leading-[32px] 
						font-Montserrat font-semibold">
                Create Account
              </h1>
              <span className="md:text-[18px] text-[14px] mt-2 leading-[17px] font-medium">
                Welcome to Tradeet, Create your account with
              </span>
              <div className="pt-[20px] md:w-auto w-full"></div>

              {/* <SignUpActions /> */}
              <SignUpForm />
            </div>
          </div>
          <div className="mt-4 mb-16 md:w-[680px] w-full px-10 flex justify-between items-center">
            {/* className="flex md:justify-start md:items-start justify-center items-center 
						md:mt-1" */}
            <div>
              <span className="text-[#2D2D2D] text-[17px] leading-[20px] font-normal">
                Already have an account?
              </span>
              <Link to="/auth/login">
                <span
                  className="ml-2 text-[17px] text[#12362A] font-normal leading-[20px]
									cursor-pointer">
                  Login
                </span>
              </Link>
            </div>
            {/* className="flex md:justify-end md:items-end justify-center items-center 
						md:-mt-3 -mt-10" */}
            <div className="flex gap-[2px] ">
              <div className="w-[46px] h-[4px] bg-[#12362A] rounded-[12px]"></div>
              <div className="w-[18px] h-[4px] bg-[#ADBC9F] rounded-[12px]"></div>
              <div className="w-[18px] h-[4px] bg-[#ADBC9F] rounded-[12px]"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SignUp;
