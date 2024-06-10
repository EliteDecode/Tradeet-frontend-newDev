import { useFormik } from "formik";
import React from "react";
import { ImLibrary } from "react-icons/im";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { singUpSchema } from "../../utils/schemas";

const SignUpForm = () => {
  const showPassword = "";
  const showconfirmPassword = "";

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: singUpSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <form>
      {/* Full name */}
      <div className="mt-6">
        <label htmlFor="name" className="text-sm md:text-base font-medium">
          Full Name
        </label>{" "}
        <br />
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          placeholder="Enter full name here"
          className={`p-4 border w-full rounded-lg ${
            formik.touched.name && formik.errors.name ? "border-[#EB4335]" : ""
          } font-medium outline-none focus:border-[#12362A] focus:outline-none`}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-[10px] font-semibold">
            (*){formik.errors.name}
          </div>
        ) : null}
      </div>
      {/* Email */}
      <div className="mt-6">
        <label htmlFor="email" className="text-sm md:text-base font-medium">
          Email
        </label>{" "}
        <br />
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          id="email"
          placeholder="Enter your Email"
          className={`p-4 border w-full rounded-lg ${
            formik.touched.email && formik.errors.email
              ? "border-[#EB4335]"
              : ""
          } font-medium outline-none focus:border-[#12362A] focus:outline-none`}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-[10px] font-semibold">
            (*){formik.errors.email}
          </div>
        ) : null}
      </div>

      {/* Password */}
      <div className="mt-6 relative">
        <label htmlFor="password" className="text-sm md:text-base font-medium">
          Password
        </label>{" "}
        <br />
        <input
          type={`${showPassword ? "text" : "password"}`}
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          placeholder="Enter your Password"
          className={`p-4 border w-full rounded-lg ${
            formik.touched.password && formik.errors.password
              ? "border-[#EB4335]"
              : ""
          } font-medium outline-none focus:border-[#12362A] focus:outline-none`}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-[10px] font-semibold">
            (*){formik.errors.password}
          </div>
        ) : null}
        <button
          type="button"
          className="absolute top-10 right-5"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <PiEyeSlashLight size={20} />
          ) : (
            <PiEyeLight size={20} />
          )}
        </button>
      </div>

      {/* Confirm password */}

      <div className="mt-6 relative">
        <label
          htmlFor="confirmPassword"
          className="text-sm md:text-base font-medium">
          Confirm Password
        </label>{" "}
        <br />
        <input
          type={`${showconfirmPassword ? "text" : "password"}`}
          name="confirmPassword"
          id="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          placeholder="Enter your Password"
          className={`p-4 border w-full rounded-lg ${
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "border-[#EB4335]"
              : ""
          } font-medium outline-none focus:border-[#12362A] focus:outline-none`}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-500 text-[10px] font-semibold">
            (*){formik.errors.confirmPassword}
          </div>
        ) : null}
        <button
          type="button"
          className="absolute top-10 right-5"
          onClick={() => setShowConfirmPassword(!showconfirmPassword)}>
          {showconfirmPassword ? (
            <PiEyeSlashLight size={20} />
          ) : (
            <PiEyeLight size={20} />
          )}
        </button>
      </div>

      {/* Sign up button */}
      <button
        className="bg-[#12362A] w-full h-[55px] rounded-[8px] my-8"
        onClick={formik.handleSubmit}>
        <span className="font-Montserrat text-white text-[20px] font-semibold leading-[24px]">
          Sign up
        </span>
      </button>
    </form>
  );
};

export default SignUpForm;
