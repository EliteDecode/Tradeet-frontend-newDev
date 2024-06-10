import LeftIcon from "../../../assets/left-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { customList } from "country-codes-list";

const ConfirmNumber = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate()

  const countryCodes = customList("countryCode", "{countryCallingCode}");
  return (
    <section>
      <div id="confirm" className="mb-16 p-4 ">
        <div className="flex justify-center items-center mt-4 md:mt-28 ">
          <div
            className="md:border md:border-[#ADBC9F] md:w-[500px] w-full h-[420px] 
					md:shadow-sm rounded-[8px] p-6 relative"
          >
            <button
              onClick={() => navigate(-1)}
              className="flex md:justify-center justify-start items-center -top-10 left-0 md:absolute mb-5 md:mb-0"
            >
              <img src={LeftIcon} alt="left icon" className="cursor-pointer" />
              <span className="md:block hidden text-[18px] font-medium leading-[21px] text-[#2D2D2D] ml-2">
                Go back
              </span>
            </button>

            <div className="">
              <span className="md:text-[28px] text-[25px] text-[#2D2D2D] leading-[39px] font-semibold">
                Confirm Phone Number
              </span>
              <div className="flex max-w-[350px]">
                <span className="md:text-[15px] text-[13px] text-[#2D2D2D] leading-[21px] font-medium">
                  Please confirm your country code and enter your phone number.
                </span>
              </div>
            </div>
            <div className=" mt-[15px] md:w-[27.5rem] w-full border-b border-[#D9D9D9]"></div>

            <form>
              <div className="rounded-[10px]  mt-8 w-full">
                <p className="ml-1 mb-1 text-[14px] text-[#2D2D2D] font-medium leading-[20px]">
                  Country
                </p>
                <div className=" relative w-full">
                  <ReactFlagsSelect
                    selected={selectedCountry}
                    onSelect={(code) => setSelectedCountry(code)}
                    searchable
                  />
                </div>
              </div>

              {/* Phone number */}
              <div className=" mt-4 ">
                <label
                  htmlFor="phone"
                  className="ml-1 mb-1 text-[14px] text-[#2D2D2D] font-medium leading-[20px]"
                >
                  Phone Number
                </label>
                <div className=" relative">
                  <p className="absolute top-3 left-3 font-medium">
                    {Object.entries(countryCodes).map(([key, value]) => {
                      if (key === selectedCountry) {
                        return (
                          <span key={key} className="user-detail">
                            <span>+{value}</span>
                          </span>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </p>
                  <input
                    name="phone"
                    id="phone"
                    type="number"
                    placeholder="8100000000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex justify-start items-center pl-16 md:w-[450px] w-full h-[46px] rounded-[10px] font-medium text-[16px] leading-[20px] border border-[#D9D9D9] focus:border-[#12362A] focus:outline-none "
                  />
                </div>
              </div>

              {/* Continue button */}
              <Link to="/auth/verification">
                <button className="bg-[#12362A] md:w-[450px] w-full h-[46px] rounded-[8px] mt-6">
                  <span className="text-white md:text-[20px] text-[18px] font-semibold leading-[24px]">
                    Continue
                  </span>
                </button>
              </Link>
            </form>
            {/* Country */}

            <div
              className="flex md:justify-start md:items-start justify-center items-center 
						md:mt-12 mt-14"
            >
              <span className="text-[#2D2D2D] text-[17px] leading-[20px] font-normal">
                Already have an account?
              </span>
              <Link to="/auth/login">
                <span
                  className="ml-2 text-[17px] text[#12362A] font-normal leading-[20px]
									cursor-pointer"
                >
                  Login
                </span>
              </Link>
            </div>
            <div
              className="flex md:justify-end md:items-end justify-center items-center 
						md:-mt-3 -mt-10 gap-[2px]"
            >
              <div className="w-[18px] h-[4px] bg-[#ADBC9F] rounded-[12px]"></div>
              <div className="w-[46px] h-[4px] bg-[#12362A] rounded-[12px]"></div>
              <div className="w-[18px] h-[4px] bg-[#ADBC9F] rounded-[12px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmNumber;
