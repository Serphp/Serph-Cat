/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useSession } from '@supabase/auth-helpers-react'
import { CatContext } from '../Context/CatContext';
import { useState, useEffect, useContext } from 'react';

export default function Home() {

  const { catImageUrl, fetchCatImage, gifCat, catimgtext, handletext, catText, catjson, catinfo } = useContext(CatContext);
  const session = useSession();
  const urlcat = catjson ? catjson._id : null;

  const [temptext, settemptext] = useState('');
  const [filename, setfilename] = useState('');

  const handletexttemp = (e: any) => {
    settemptext(e.target.value);
  }

  const handlefilename = (e: any) => {
    setfilename(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem('temptext', temptext);
  }, [temptext]);

  const handleDownload = () => {
    if (catjson._id) {
    const download = 'https://cataas.com/cat/' + catjson._id + '/says/' + temptext;
    console.log(download);
    window.open(download, '_blank');
    }
  }

  const handleDownload2 = async () => {
    try {
      const response = await fetch(`https://cataas.com/cat/${catjson._id}/says/${temptext}`);
      if (!response.ok) {
        throw new Error('Error al descargar la imagen');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      // Nombre de archivo deseado
      link.download = filename || 'cat.png';
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al descargar la imagen:', error);
    }
  };
  

  console.log(catImageUrl);

  return (
    <>

<h1 className='title'> Gatos </h1>

        <div className="contenedor">

          
        <h2> Bienvenido a la sección de Stickers </h2>
            
        <div className="catleftx">
              <button className="catbutton2"><Link href="/stickers/maker"> Create Sticker </Link></button>
              <button className="catbutton2" onClick={fetchCatImage}> Create Cat </button>
              <button className="catbutton2" onClick={gifCat}> Create Gif </button>
              <button className="catbutton2" onClick={catinfo}> Create Json </button>

              </div>

          {/* <input type="text" placeholder="Search" value={catText} onChange={handletext} className="catinput" />
          <button className="catbutton" onClick={catimgtext}> Search </button> */}
          
          <div className='catindex'>
            {catImageUrl ? 
            (
              <img src={catImageUrl} className='catimghome' alt="Cat"/>
            ) : (
              <div className='container'>
                <input type="text" placeholder="Text" value={temptext || "ejemplo"} onChange={handletexttemp} className="catinput" />
                <input type="text" placeholder="Filename" value={filename} onChange={handlefilename} className="catinput" />

                <button className="catbutton" onClick={handleDownload}> Download </button>
                <button className="catbutton" onClick={handleDownload2}> Download2 </button>
              </div>
            )}

            {catjson ? (
              <div className="catjson">
                {/* <p> {catjson.file} </p> */}
                <img src={`https://cataas.com/cat/${urlcat}/says/${temptext || 'hello world'}`} width={512} alt="Cat"/>
                </div>
            ) : (
              null
            )}
          </div>

          </div>

    </>
  )
}
