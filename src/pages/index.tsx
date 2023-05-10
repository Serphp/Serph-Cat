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
    </section>

    </>
  )
}
