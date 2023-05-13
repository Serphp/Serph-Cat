import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Gato1Page = () => {
    return (

      <>
      <div className="contenedor">
      <h1> Gato </h1>

        <div className="boxcat">
        <div className="boxitem"> 
        <img src="https://pbs.twimg.com/media/FeD96s0aUAA6E4W?format=jpg&name=360x360" alt="Gato 1" />
        </div>
        <div className="boxitem"> Gato 1 </div>
        </div>



          <div className="buttoncon">
            <button className="buttont"> 
            <Link href="https://github.com/Serphp/Serph-Cat/raw/michitos/src/stickers/Cats%202.wastickers">
            Descargar 
            </Link>
            </button>
            <button className="buttont"> Share </button>
          </div>
        </div>
      </>
    )
  };
  
  export default Gato1Page;
  