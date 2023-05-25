import React from "react";

function Modal() {
  return (
    <>
      <div className="fixed w-full flex items-center justify-center flex-col top-0 right-0 h-screen z-10 bg-black/60">
        <div className=" bg-[#83CE3E] w-[800px] h-[400px] flex flex-col justify-center px-[100px] relative">
          <h1 className="gotham-black text-[40px] ml-[40px] ">SOLICITAR PDF</h1>
          <div className="flex flex-col ml-[40px]">
            <label className="text-2xl">Email: </label>
            <input type="text" className="w-[80%] mt-4 py-3 rounded-full" />
          </div>
          <button className="absolute top-10 right-10 font-bold text-2xl">
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
