import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto mt-30 py-5 container">
      <div className="flex px-10 justify-between items-center">
        <div className="py-5">
          <h1 className="text-[28px] font-bold">Subscribe For a Newsletter</h1>
          <h2 className="text-[20px]">
            Want to get updates? Just put your email here.
          </h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="py-2 px-3 lg:w-[400px] bg-gray-400 rounded-3xl"
          />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="w-[30%] pl-8 flex flex-col space-y-1">
          <h1 className="text-[28px] font-bold">TRAVEL-X</h1>
          <h2>Providing great care for customers is our brand!</h2>
          <div className="flex flex-col mt-2 space-y-2">
            <h1 className="mb-2">Find us on:</h1>
            <div className="w-[250px] box">
              <h1>Phone: +251 912 347 874</h1>
            </div>
            <div className="w-[230px] box">
              <h1>Adress: Jemo1 Ruta build. 1st floor</h1>
            </div>
            <div className="w-[250px] box">
              <h1>Mail: abelzerihun@gmail.com</h1>
            </div>
          </div>
        </div>

        <div className="w-[33%] flex flex-col items-center">
          <div className="w-[70%] pb-3 mb-2 border-b-2 border-amber-400">
            <h1 className="text-center text-[23px]">Our Latest News</h1>
          </div>
          <h2>Read all →</h2>
        </div>

        <div className="w-[33%] flex flex-col items-center ">
          <div className="w-[70%] pb-3 border-b-2 border-amber-400">
            <h1 className="text-center text-[23px]">Important Links</h1>
          </div>
          <div className="flex flex-col mt-2 space-y-2 font-bold">
            <div className="w-[180px] box">
              <h1>Casual Cars</h1>
            </div>
            <div className="w-[180px] box">
              <h1>Weeding Cars</h1>
            </div>
            <div className="w-[180px] box">
              <h1>Gallery</h1>
            </div>
            <div className="w-[180px] box">
              <h1>About us</h1>
            </div>
            <div className="w-[180px] box">
              <h1>Contact us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
