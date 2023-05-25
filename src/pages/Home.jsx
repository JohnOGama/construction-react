import React from "react";
import Header from "../components/Header";
import BG from "../assets/images/tiler-working-renovation-apartment@2x.png";

function Home() {
  return (
    <>
      <div className="w-full relative">
        <Header />
        <div className="w-full h-screen bg-black relative top-0 z-[-10]"></div>
        <img
          className="absolute top-0 h-screen w-full object-fit opacity-[0.19] z-[-5]"
          src={BG}
        />
      </div>
    </>
  );
}

export default Home;
