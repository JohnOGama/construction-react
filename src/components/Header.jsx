import React, { useState } from "react";
// import CallIcon from "../assets/path/Path 14.svg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Nav from "./Nav";
import Banner from "./UI/Banner";
import Banner1 from "./UI/Banner1";
import PaintOne from "../assets/images/PaintOne.png";
import Path3 from "../assets/path/Path 3.svg";
import Modal from "./Modal/Modal";

function Header() {
  const [active, setActive] = useState(false);
  const clickHandler = () => {
    setActive(true);
  };

  const closeandler = () => {
    setActive(!true);
  };

  return (
    <>
      <Nav />

      <div className="z-12 absolute w-full max-w-[1300px] mx-auto left-0 right-0 py-4">
        <div className="relative">
          <h1 className="text-white gotham-black mt-[200px] max-w-[650px] leading-[80px] text-[50px]">
            LA ELECCION INTELIGENTE PARA LOS{" "}
            <span className="text-[#60BE1B]">
              PROFESIONALES DE CONSTRUCCION
            </span>
          </h1>
          <div className="absolute bg-white w-[300px] mt-3 h-[2px]"></div>
          <h1 className="text-[#60BE1B] gotham-light-italic my-10 text-5xl">
            Mastique todo propositó
          </h1>

          <button
            onClick={clickHandler}
            className="z-12 flex items-center gap-4 text-white text-2xl gotham-light border-[2px] border-[#60BE1B] px-10 py-4 rounded-full hover:bg-[#60BE1B] hover:text-white duration-100 "
          >
            Contáctanos Ya!
            <MdOutlineArrowForwardIos />
          </button>
        </div>

        {/* <Banner /> */}

        <Banner1 />
        <img
          src={PaintOne}
          className="absolute top-[100px] right-[-290px] z-20  w-[900px] overflow-hidden drop-shadow-2xl"
        />
        <img
          src={Path3}
          className="absolute left-[-1000px] top-[300px] z-[-1]"
        />
      </div>
      {active && (
        <div className="fixed w-full flex items-center justify-center flex-col top-0 right-0 h-screen z-[40] bg-black/60">
          <div className=" bg-[#83CE3E] w-[800px] h-[400px] flex flex-col justify-center px-[100px] relative">
            <h1 className="gotham-black text-[40px] ml-[40px] ">
              SOLICITAR PDF
            </h1>
            <div className="flex flex-col ml-[40px]">
              <label className="text-2xl">Email: </label>
              <input type="text" className="w-[80%] mt-4 py-3 rounded-full" />
            </div>
            <button
              onClick={closeandler}
              className="absolute top-10 right-10 font-bold text-2xl"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
