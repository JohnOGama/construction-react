import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Product(props) {
  return (
    <>
      <div className="max-w-[1300px] mx-auto bg-white rounded-2xl my-14 z-20 shadow-2xl">
        <div className="w-[1200px] mx-auto grid grid-cols-2 relative z-20 ">
          <img src={props.img} className="w-[700px]" />
          <div className="ml-[-50px]">
            <h1 className="gotham-black text-[50px]  mt-14 uppercase">
              {" "}
              {props.title}
            </h1>
            <p className="gotham-light text-[20px] my-5 pr-14">
              Compuesto para juntas con base vinil acrílica para ser usada
              directamente del envase, que proporciona un acabado liso y
              continuo, especial para láminas de drywall, paredes y cielo raso.
              Los efectos deseados en el producto son logrados por un control en
              la interacción y la adecuada selección de las materias primas.
            </p>
            <h1 className="gotham-black text-3xl">USO: </h1>
            <ul className="list-disc ml-5 mt-5 ">
              <li className="gotham-light text-2xl">Paredes</li>
              <li className="gotham-light text-2xl my-3">Puertas</li>
              <li className="gotham-light text-2xl">Casa</li>
            </ul>
          </div>

          <img src={props.ux} className="mt-[-50px] ml-[70px] p-10 w-[500px]" />
          <div className="absolute right-[60px] bottom-[40px]">
            <button className=" border-2 border-[#60BE1B] px-[70px] py-4 gotham-black text-[#60BE1B] rounded-full text-[20px] flex items-center gap-4">
              ORDER YA!
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
