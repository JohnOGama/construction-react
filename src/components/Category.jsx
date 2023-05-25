import React from "react";

function Category(props) {
  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <button className="uppercase gotham-black text-white bg-[#60BE1B] w-[280px] py-5 rounded-full text-[20px]">
          {props.name}
        </button>
      </div>
    </>
  );
}

export default Category;
