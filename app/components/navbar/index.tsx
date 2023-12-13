import Image from "next/image";
import Logo from "../../../public/assets/logo.png"
export default function Navbar() {
    return (
        <div className="w-full  flex  justify-center items-center">
            <div className="w-full p-4 max-w-5xl flex justify-between items-center">
                <div className="w-14">
                <Image src={Logo} alt="Logo da empresa Raja" />
                </div>
                <button className=' transition-all w-fit flex items-center gap-x-1 py-2 px-4 text-white bg-black rounded-md hover:scale-105 max-lg:text-sm max-sm:text-xs'>Contato </button>
            </div>
        </div>
    )
}