"use client"
import HeaderImage from './components/image/image'
import { DownloadSimple, Moon, Sun, WhatsappLogo } from '@phosphor-icons/react'
import Navbar from './components/navbar'
import Link from 'next/link'
// import Logo from "../public/assets/logo.png"
import Image from "next/image"
import { useTheme } from 'next-themes'
import Logo from './components/logo'

const fileName = 'catalogo.pdf';
const filePath = `/catalogo.pdf`;

export default function Home() {
  const { setTheme, theme } = useTheme()
  return (
    <main className="w-full h-full min-h-screen flex justify-center items-center bg-gray-50 dark:bg-black ">

      <div className='w-full max-w-5xl flex justify-center items-center p-4 max-sm:p-2'>
        <div className='w-full bg-[#f2f2f2] dark:bg-[#0e0e0e] p-4 shadow rounded-md border  dark:border-[#333333] grid grid-cols-2 max-[887px]:grid-cols-1 max-[887px]:gap-y-4 gap-x-4 items-center relative'>
          <div className='text-black absolute top-0 right-0 flex justify-center items-center p-4'>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} >
              {theme === "light" ? (
                <Sun className='text-yellow-600' size={20} weight={"bold"} />
              ):(
                <Moon className='text-white' size={20} weight={"bold"} />
              )}
            </button>
          </div>

          <div className='w-full flex justify-center items-center'>
            <div className='w-full max flex max-[887px]:order-1 p-4 max-[887px]:w-[70vw] justify-center items-center'>
              {/* <HeaderImage /> */}
              {/* <Image src={Logo} alt="Logo da empresa raja solar" className='p-4 max-[887px]:w-[70%]' /> */}
              <div className='w-full h-full p-4 flex justify-center items-center'>
              <Logo/>

              </div>
            </div>
          </div>
          <div className='w-full flex flex-col gap-y-4 text-black dark:text-white max-[887px]:order-2'>
            <div>
              <span className='font-semibold'>INFORMATIVO</span>
              <h1 className='text-4xl max-lg:text-2xl font-semibold'>SITE EM MANUTENÇÃO</h1>
            </div>
            <div>
              <p className='font-light max-lg:text-sm'>Caro usuário, nosso site está passando por uma reformulação para oferecer uma experiência aprimorada. Você pode solicitar atendimento pelos nossos canais e redes sociais.</p>
            </div>
            <div className='w-full flex gap-x-4'>
              <Link href={"https://api.whatsapp.com/send/?phone=5546999883073&text=Ol%C3%A1+vim+atrav%C3%A9s+do+site&type=phone_number&app_absent=0"} target='_blank' className=' transition-all w-fit flex items-center gap-x-1 py-2 px-4 text-white bg-black rounded-md hover:scale-105 max-lg:text-sm max-sm:text-xs'>Fale conosco <WhatsappLogo /> </Link>
              <Link href={filePath} download={fileName} target='_blank' className=' transition-all w-fit flex items-center gap-x-1 py-2 px-4 text-white bg-[#ED3237] rounded-md hover:scale-105 max-lg:text-sm max-sm:text-xs'>Baixar catálogo<DownloadSimple /> </Link>

            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
