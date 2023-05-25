import React from "react";
import Path25 from "../assets/path/Path 25.svg";
import Path26 from "../assets/path/Path 26.svg";
import img2 from "../assets/images/image2.png";
import img from "../assets/images/image.png";

function About() {
  return (
    <>
      <div className="w-full h-auto bg-white mt-[200px] relative z-0 ">
        <div className="max-w-[1300px] mx-auto">
          <img
            src={Path25}
            className="absolute top-[-250px] left-[170px] z-[-1] w-[880px]"
          />
          <img
            src={img}
            className="z-2 absolute w-[900px] left-[220px] top-[-200px]"
          />
          <div className="grid grid-cols-2">
            <div></div>
            <div className="ml-[100px]">
              <h1 className="gotham-black mt-10 text-[40px] text-[#60BE1B] mb-[20px]">
                SOBRE NOSOTROSS
              </h1>
              <p className="text-[25px]">
                Fundada en la vibrante República Dominicana,{" "}
                <strong>TCS PAINT</strong> es una empresa dedicada y apasionada
                por la <strong>industria</strong> de la{" "}
                <strong>construcción</strong>. Nuestra herencia se basa en un
                compromiso inquebrantable con la <strong>excelencia</strong> y
                la <strong>calidad</strong> a medida que revolucionamos el
                mercado con productos <strong>innovadores</strong>
                como <strong>adhesivos y pinturas</strong>.
              </p>
            </div>
          </div>
          <p className="text-[25px] mt-[90px]">
            Estamos convencidos de que la <strong>calidad</strong> no es un{" "}
            <strong>lujo</strong>, sino la <strong>norma</strong>. Cada producto
            que sale de nuestra fábrica es el resultado de un{" "}
            <strong>riguroso proceso</strong>
            de <strong>investigación</strong> y desarrollo que{" "}
            <strong>garantiza</strong> que siempre superemos las expectativas de
            nuestros clientes. Nuestro compromiso se refleja en la{" "}
            <strong>
              consistencia, la longevidad y el acabado de nuestros productos
            </strong>
            , cualidades que los constructores y contratistas valoran y buscan.
          </p>
          <p className="text-[25px] mt-[50px]">
            Nuestros tres pilares son la <strong>calidad</strong>, la{" "}
            <strong>innovación</strong> y la
            <strong>responsabilidad</strong>. La calidad es nuestro compromiso y
            promesa a cada cliente. <strong>La innovación nos impulsa</strong> a
            estar siempre a la vanguardia en la búsqueda de formas de{" "}
            <strong>mejorar nuestros productos y servicios</strong>. La
            responsabilidad informa cada decisión que tomamos, asegurando que
            cada acción que tomamos considere el <strong>impacto</strong> en
            nuestros <strong>clientes</strong> y la industria de la
            construcción.
          </p>
          <div className="grid grid-cols-2 pb-10">
            <div>
              <p className="text-[25px] mt-[50px]">
                Nuestra misión es <strong>simple</strong> pero{" "}
                <strong>poderosa: promover</strong> la construcción de la{" "}
                <strong>República Dominicana</strong>. Nos esforzamos por ser un
                <strong>catalizador</strong> para el{" "}
                <strong>crecimiento</strong> y el desarrollo en la industria de
                la construcción al brindar a cada uno de nuestros clientes
                productos excepcionales y un servicio al cliente excepcional.
                Estamos <strong>orgullosos</strong> de ser una parte integral de
                la configuración de <strong>nuestro</strong> amado{" "}
                <strong>paisaje nacional</strong>.
              </p>
              <p className="text-[25px] mt-[50px]">
                En <strong>TCS PAINT</strong>, no solo fabricamos productos,
                también <strong>construimos relaciones duraderas</strong>{" "}
                basadas en la <strong>confianza</strong> y la{" "}
                <strong>satisfacción</strong>
                del <strong>cliente</strong>. Estamos comprometidos a continuar
                entregando un
                <strong>excelente producto</strong> que supere las expectativas
                <strong>República Dominicana</strong>.
              </p>
            </div>
            <div></div>
            <img
              src={Path26}
              className="absolute right-[50px] bottom-[-200px] w-[800px] "
            />
            <img
              src={img2}
              className="absolute right-[140px] bottom-[-100px] w-[770px] "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
