import React from "react";
// import Path4 from "../components/UI/Path4";
import Path4 from "../assets/path/Path 4.svg";
import Category from "../components/Category";
import Product from "../components/Product";
import MagicGypsum from "../assets/paint/MagicGypsum.png";
import ArchiTex from "../assets/paint/ArchiTex.png";
import MagicPaint from "../assets/paint/MagicPaint.png";
import MagicPlast from "../assets/paint/MagicPlast.png";
import MagicTex from "../assets/paint/MagicTex.png";
import SuperMag from "../assets/paint/SuperMag.png";
import MagicFlex from "../assets/paint/MagicFlex.png";
import W50 from "../assets/paint/W50.png";
import Video from "../assets/video-ux.svg";
import Path15 from "../assets/path/Path 15.svg";
import Path16 from "../assets/path/Path 16.svg";
import Path17 from "../assets/path/Path 17.svg";
import Path18 from "../assets/path/Path 18.svg";
import Path20 from "../assets/path/Path 20.svg";
import Path21 from "../assets/path/Path 21.svg";
import Path19 from "../assets/path/Path 19.svg";

function Products() {
  return (
    <>
      <div className="w-full h-auto relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto ">
          <div className="text-center">
            <h1 className=" gotham-black text-[40px] text-[#60BE1B] mt-[150px]">
              SOMOS TU ALIADO EN CADA FASE DE LA EDIFICACIÓN
            </h1>
            <h1 className=" gotham-black text-[50px] mt-10">
              NUESTRO PRODUCTOS
            </h1>
            <p className="gotham-light text-[27px] ">
              La línea de productos que fabricamos son el resultado de más de 30
              años de experiencia de nuestro personal de investigación y
              desarrollo en conjunto con su equipo quienes después de una amplia
              retroalimentación con los clientes han logrado desarrollar
              productos de altísima calidad en función de las necesidades
              especificas del mercado nacional
            </p>
          </div>
          {/* <Path4 /> */}
          <img
            src={Path4}
            className="top-[-200px] right-[-150px] z-[-19] absolute"
          />
          <div className="grid grid-cols-4 mt-10 gap-6">
            <Category name="magic gypsum" />
            <Category name="arqui-tex" />
            <Category name="magic tex" />
            <Category name="magic paint" />
            <Category name="super mag" />
            <Category name="magic flex" />
            <Category name="magic plast 1" />
            <Category name="w-50 emulsionada" />
          </div>
          <div className="my-14">
            <Product img={MagicGypsum} title="MAGIC GYPSUM" ux={Video} />
            <Product img={ArchiTex} title="arqui-tex" ux={Video} />
            <Product img={MagicTex} title="magic tex" ux={Video} />
            <Product img={MagicPaint} title="magic paint" ux={Video} />
            <Product img={SuperMag} title="super mag" ux={Video} />
            <Product img={MagicFlex} title="magic flex" ux={Video} />
            <Product img={MagicPlast} title="magic plast" ux={Video} />
            <Product img={W50} title="W-50 EMULSIONADA" ux={Video} />
          </div>
          <img
            src={Path15}
            className="absolute top-[900px] left-0 w-[1000px] z-[-1]"
          />
          <img
            src={Path16}
            className="absolute top-[2000px] right-[-600px] w-[1300px] z-[-1]"
          />
          <img
            src={Path17}
            className="absolute top-[2000px] left-[-400px] w-[1500px] z-[-1]"
          />
          <img
            src={Path18}
            className="absolute top-[4000px] left-[-100px] w-[1200px] z-[-1]"
          />
          <img
            src={Path20}
            className="absolute top-[4000px] right-[-500px] w-[1400px] z-[-1]"
          />
          <img
            src={Path21}
            className="absolute top-[5100px] left-[-460px] w-[1400px] z-[-1]"
          />
          <img
            src={Path19}
            className="absolute top-[6500px] right-[-460px] w-[1200px] z-[-1]"
          />
        </div>
      </div>
    </>
  );
}

export default Products;
