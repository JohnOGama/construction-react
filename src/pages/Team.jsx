import React from "react";
import TeamItem from "../components/TeamItem";
import Path22 from "../assets/path/Path 22.svg";

function Team() {
  return (
    <>
      <div className="w-full h-auto pt-[70px] relative">
        <div className="max-w-[1300px] mx-auto">
          <h1 className=" gotham-black text-[50px] text-center text-[#60BE1B] mt-[110px]">
            NUESTRO EQUIPO
          </h1>
          <div className="grid grid-cols-3">
            <TeamItem />
            <TeamItem />
            <TeamItem />
          </div>
        </div>
        <img
          src={Path22}
          className="absolute top-[400px] left-[-470px] w-[800px] z-[20]"
        />
      </div>
    </>
  );
}

export default Team;
