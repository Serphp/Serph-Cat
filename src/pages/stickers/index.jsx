
import { useSession, useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import React, { useState } from "react";
import { cats } from "../../styles/cats";
//import ReactModal from "react-modal";



export default function Stickers() {
  
  const sessionUser = useSession();
  const user = useUser();
  
  console.log(user);

  return (
    <>

        <div className="contenedor">

          
        <h2> Bienvenido a la sección de Stickers </h2>
            
            {
              sessionUser && (
              <>
              <div className="catleft">
              <Link href="/stickers/maker">
              <button className="catbutton2"> Create Sticker </button>
              </Link>
              </div>
              </>
              )
            }


          <div className="catinfo">

          {
            cats.map((cat, index) => (
              <div className="catinfoitem" key={index}>
                <h1 className="catitle"> {cat.titulo} </h1>
                  <div className="catdescription">
                    {cat.descripcion}
                  </div>
                  <div className="cat-contenedor-button">
                    <Link href="/stickers/pack1">
                      <button className="catbutton">Ver Pack</button>
                    </Link>
                  </div>
              </div>
            ))
          }
          
          </div>
        </div>

        
    </>
  )
}
