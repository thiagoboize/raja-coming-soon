"use client"
import HeaderImage from './components/image/image'
import { DownloadSimple, WhatsappLogo } from '@phosphor-icons/react'
import Navbar from './components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full h-full min-h-screen grid grid-rows-[90px_minmax(90px,auto)] justify-center items-center bg-slate-50 ">
      <div className=' h-full w-full flex justify-center items-start '>
        <Navbar />
      </div>
      <div className='w-full max-w-5xl flex justify-center items-center p-4 max-sm:p-2'>
        <div className='w-full grid grid-cols-2 max-[887px]:grid-cols-1 max-[887px]:gap-y-4 gap-x-4 items-center'>
          <div className='w-full flex flex-col gap-y-4 text-black max-[887px]:order-2'>
            <div>
              <span className='font-semibold'>INFORMATIVO</span>
              <h1 className='text-4xl max-lg:text-2xl font-semibold'>SITE EM MANUTENÇÃO</h1>
            </div>
            <div>
              <p className='font-light max-lg:text-sm'>Caro usuário, nosso site está passando por uma reformulação para oferecer uma experiência aprimorada. Você pode solicitar atendimento pelos nossos canais e redes sociais.</p>
            </div>
            <div className='w-full flex gap-x-4'>
              <button className=' transition-all w-fit flex items-center gap-x-1 py-2 px-4 text-white bg-black rounded-md hover:scale-105 max-lg:text-sm max-sm:text-xs'>Fale conosco <WhatsappLogo /> </button>
              <Link href="/download" className=' transition-all w-fit flex items-center gap-x-1 py-2 px-4 text-white bg-[#ED3237] rounded-md hover:scale-105 max-lg:text-sm max-sm:text-xs'>Baixar catálogo<DownloadSimple /> </Link>

            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <div className='w-full max flex max-[887px]:order-1 p-4 max-[887px]:w-[70vw]'>
              <HeaderImage />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
