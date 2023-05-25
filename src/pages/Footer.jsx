import React from "react";
import SocialM from "../assets/Group 60.svg";
import Call from "../assets/path/Path 14.svg";
import Email from "../assets/Group 54.svg";
import Location from "../assets/path/Path 9.svg";

function Footer() {
  return (
    <>
      <div className="w-full h-auto bg-[#364049]">
        <div className="max-w-[1300px] mx-auto py-[100px]">
          <div className="grid grid-cols-3 text-white gap-10 ">
            <div className="flex flex-col  items-center">
              <h1 className="text-[100px] gotham-black">LOGO</h1>
              <img src={SocialM} className="text-center w-[150px]" />
            </div>
            <div className="flex flex-col ml-5">
              <h1 className="gotham-light text-[25px] mb-5 text-[#60BE1B]">
                CONTACT US
              </h1>
              <div className="flex gap-5 mb-5 items-center">
                <img src={Call} />
                <p>+1 (829) 544-2948</p>
              </div>
              <div className="flex gap-5 mb-5 items-center">
                <img src={Email} />
                <p>ventas@tcspaint-rd.com</p>
              </div>
              <div className=" gap-5 mb-5 r grid grid-cols-2">
                <img src={Location} className="" />
                <p className="ml-[-160px]">
                  Colina de los Rios, Calle la Cima, Nº 2, Santo Domingo 10604,
                  Distrito Nacional. Republica Dominicana
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <form className="flex flex-col">
                <input
                  type="text"
                  placeholder="Nombre*"
                  className="rounded-full bg-[#80868C] placeholder:text-white w-[300px] py-3 pl-4 border-1 "
                />
                <input
                  type="text"
                  placeholder="Correo Electronico*"
                  className="rounded-full bg-[#80868C] placeholder:text-white w-[300px] py-3 pl-4 my-4 border-1 "
                />
                <textarea
                  rows="10"
                  placeholder="Que quisieras decirnos?*"
                  className="bg-[#80868C] placeholder:text-white w-[300px]  pl-4 rounded-2xl pt-2 h-[100px] border-1 resize-none"
                ></textarea>
                <button className="bg-[#60BE1B] w-[300px] mt-2 rounded-2xl py-2 gotham-black">
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
