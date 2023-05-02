
import { Inter } from 'next/font/google'
import ApiCat from './api/ApiCat'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-6xl font-bold'>Hello World</h1>
      <p className='mt-3 text-2xl'>Welcome to my Next.js + Tailwind CSS template</p>
      <p className='mt-3 text-2xl'>This is a template for Next.js + Tailwind CSS + TypeScript + ESLint + Prettier + Google Fonts</p>
      <p className='mt-3 text-2xl'>This template is based on the following tutorial: <a href='https://www.youtube.com/watch?v=EW7m2WIvFgQ'>https://www.youtube.com/watch?v=EW7m2WIvFgQ</a></p>
      
          <ApiCat />
    </div>
    </>
  )
}
