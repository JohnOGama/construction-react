import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Nav() {
  return (
    <>
      <div className="z-10 absolute w-full max-w-[1300px] mx-auto left-0 right-0 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="gotham-black text-white text-[50px]">LOGO</h1>
          <ul className="text-white flex gap-7">
            <li className="hover:text-[#60BE10] cursor-pointer duration-100">
              PRODUCTOS
            </li>
            <li className="hover:text-[#60BE10] cursor-pointer duration-100">
              SOBRE NOSOTROS
            </li>
            <li className="hover:text-[#60BE10] cursor-pointer duration-100">
              NUESTRO EQUIPO
            </li>
          </ul>
          <div className="flex items-center text-black bg-white px-2 py-1 rounded-full cursor-pointer mr-[80px] z-10 shadow-2xl">
            <p className="mr-2">+1 (829) 544-2948</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35.834"
              height="35.775"
              viewBox="0 0 35.834 35.775"
              className="bg-[#60BE1B] p-2 rounded-full"
            >
              <path
                id="Path_14"
                data-name="Path 14"
                d="M625.841,21.693a7.718,7.718,0,0,1,.367-.877,25.332,25.332,0,0,1,3.7-4.993,31.974,31.974,0,0,1,2.684-2.524,2.072,2.072,0,0,1,3.187.459,41.765,41.765,0,0,1,4.49,7.372,9.086,9.086,0,0,1,.392,1.123,1.746,1.746,0,0,1-.376,1.778c-.585.623-1.227,1.195-1.871,1.759-.825.724-.846.716-.414,1.726a16.323,16.323,0,0,0,9.427,9.121.636.636,0,0,0,.874-.221c.507-.644,1.061-1.252,1.61-1.86a2.26,2.26,0,0,1,2.8-.639,18.1,18.1,0,0,1,2.221,1.043c1.885,1.153,3.739,2.359,5.593,3.562a2.615,2.615,0,0,1,1.1,1.627,1.335,1.335,0,0,1-.12,1.044,7.878,7.878,0,0,1-.786,1.173,30.59,30.59,0,0,1-6.872,5.739,3.372,3.372,0,0,1-2.654.255,25.156,25.156,0,0,1-8.831-3.742,40.9,40.9,0,0,1-13.627-14.354,22.67,22.67,0,0,1-2.759-7.514c-.05-.306-.078-.616-.133-1.058"
                transform="translate(-625.841 -12.735)"
                fill="#fff"
              />
            </svg>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
