/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

export default function Home() {

  return (
    <>
    <section className='catconteiner'>
      <div id='' className='catleft'>
      <h1 className='catname'> Login </h1>
      <button className='catbutton'><a href='/Profile'> Entrar </a></button>
      </div>
      <div className='catright'>
        <h1 className='catname'> Los michitos </h1>
        <button className='catbutton'><a href='/cats'> Entrar </a></button>
      </div>
      <div className='catbuttom'>
        <h1 className='catname'> Whatsapp Sticker </h1>
        <button className='catbutton'><a href='/stickers'> Entrar </a></button>
      </div>
    </section>

    </>
  )
}
