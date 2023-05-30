/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Home() {

  return (
    <>
    <section className='catconteiner'>

      <div id='' className='catleft'>
      <h1 className='catname'> Login </h1>
      <button className='catbutton'><Link href='/Profile'> Entrar </Link></button>
      </div>
      <div className='catright'>
        <h1 className='catname'> Los michitos </h1>
        <button className='catbutton'><Link href='/cats'> Entrar </Link></button>
      </div>
      <div className='catbuttom'>
        <h1 className='catname'> Whatsapp Sticker </h1>
        <button className='catbutton'><Link href='/stickers'> Entrar </Link></button>
      </div>
      {/* Second */}

      <div id='' className='catfooter'>
        <div className="cleft">
          <h2 className='catname'> Serphp </h2>
          <h2 className='catsub'>
          2023 Serphp Cat
          </h2>
        </div>
        <div className="cright">
            <h2 className='catsub'>
            Serphp Cat es una aplicación web que te permite crear stickers para whatsapp de tus gatos favoritos.
            </h2>
            <h3 className='cattitle'> Serphp Cat </h3>
          </div> 

      {/* <button className='catbutton'><Link href='/Profile'> Entrar </Link></button> */}
      </div>
      <div className='catright2'>
        <h1 className='catname'> Historia </h1>
        <button className='catbutton'><Link href='/cats'> Entrar </Link></button>
      </div>

    </section>

    </>
  )
}
