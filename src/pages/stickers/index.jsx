
import Link from "next/link";
import React, { useState } from "react";
//import ReactModal from "react-modal";

export default function Stickers() {

  return (
    <>

        <div className="contenedor">

          
        <h2> Bienvenido a la sección de Stickers </h2>
            
          <div className="catleft">
            <Link href="/stickers/maker">
          <button className="catbutton2"> Create Sticker </button>
          </Link>
          </div>

          <div className="catinfo">

            <div className="catinfoitem">
              <h1 className="catitle"> Stickers 1 </h1>
                <div className="catdescription">
                  <Link href="/stickers/pack1">
                  <button className="catbutton">Ver Pack</button>
                  </Link>
                </div>
            </div>
          
          
            <div className="catinfoitem">
              <h1 className="catitle"> Stickers 2 </h1>
              <div className="catdescription">
                <Link href="/stickers/pack2">
                <button className="catbutton">Ver Pack</button>
                </Link>
              </div>
            </div>

            <div className="catinfoitem">
              <h1 className="catitle"> Stickers 3 </h1>
              <div className="catdescription">
                <Link href="/stickers/pack3">
                <button className="catbutton">Ver Pack</button>
                </Link>
              </div>
            </div>

          </div>
        </div>

        
    </>
  )
}
