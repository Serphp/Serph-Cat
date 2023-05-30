/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useSession } from '@supabase/auth-helpers-react'
import { CatContext } from '../Context/CatContext';
import { useState, useEffect, useContext } from 'react';
//import Image from 'next/image';

export default function Home() {

  const { catImageUrl, fetchCatImage, gifCat, catimgtext, handletext, catText, catjson, catinfo } = useContext(CatContext);
  const session = useSession();
  const urlcat = catjson ? catjson._id : null;

  const [temptext, settemptext] = useState('');

  const handletexttemp = (e: any) => {
    settemptext(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem('temptext', temptext);
  }, [temptext]);


  return (
    <>

<h1 className='title'> Gatos </h1>

        <div className="contenedor">

          
        <h2> Bienvenido a la sección de Stickers </h2>
            
            {
              session && (
              <>
              <div className="catleftx">
              <Link href="/stickers/maker"><button className="catbutton2"> Create Sticker </button></Link>
              <button className="catbutton2" onClick={fetchCatImage}> Create Cat </button>
              <button className="catbutton2" onClick={gifCat}> Create Gif </button>
              <button className="catbutton2" onClick={catinfo}> Create Json </button>

              </div>
              </>
              )
            }

          {/* <input type="text" placeholder="Search" value={catText} onChange={handletext} className="catinput" />
          <button className="catbutton" onClick={catimgtext}> Search </button> */}
          
          <div className='catindex'>
            {catImageUrl ? (
              <img src={catImageUrl} alt="Cat"/>
            ) : (
              <div>No se pudo cargar la imagen del gato.</div>
            )}

            {catjson ? (
              <div className="catjson">
                {/* <p> {catjson.file} </p> */}
                <img src={`https://cataas.com/cat/${urlcat}/says/${temptext}`} alt="Cat"/>
                <input type="text" placeholder="Text" value={temptext || "ejemplo"} onChange={handletexttemp} className="catinput" />
                </div>
            ) : (
              <div>No se pudo cargar la imagen del gato.</div>
            )}
          </div>

          </div>

    </>
  )
}
