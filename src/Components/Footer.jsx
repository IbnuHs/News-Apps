import React from "react";
import linkedin from "../assets/linkedin-app-icon.svg";
import gmail from "../assets/gmail-icon.svg";
import instagram from "../assets/ig-instagram-icon.svg";
import github from "../assets/github-icon.svg";

export default function Footer() {
  return (
    <div className="font-zila bg-[#0E1520] text-white px-10 py-3 flex flex-col gap-3 md:flex-row md:justify-between lg:px-12 lg:py-5 ">
      <h1 className="text-[28px] font-bold">YourNews</h1>
      <div className="border-b pb-3 md:flex md:flex-col md:gap-1 md:pb-0 md:border-b-0">
        <h1 className="mb-2 md:mb-0 md:text-[12px] lg:text-[16px] text-center">
          My Social Media
        </h1>
        <div className="flex gap-5 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/ibnu-hasyim-surianto-277b84241/"
            target="_blank">
            <img src={linkedin} alt="" className="w-6 m-auto md:w-4 lg:w-5" />
          </a>
          <a href="https://www.instagram.com/developer_lawak/" target="_blank">
            <img src={instagram} alt="" className="w-6 m-auto md:w-4 lg:w-5" />
          </a>
          {/* <a href="">
            <img src={gmail} alt="" className="w-6 m-auto md:w-5 lg:w-5" />
          </a> */}
          <a href="">
            <img
              src={github}
              alt=""
              className="w-6 m-auto md:w-4 lg:w-5 bg-white rounded-full"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-[14px] text-center lg:text-[16px]">
          <span className="text-[20px] lg:text-[20px]">&copy;</span> Ibnu Hasyim
          S
        </p>
      </div>
    </div>
  );
}
