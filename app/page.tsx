import Image from "next/image"
import Button from "@/components/Buttons/Button"
import LocalFontLayout from "./ui/local-fonts/localFontLayout"
import Navbar from "@/components/Nav/Navbar"
import About from "@/components/About/About"
export default function Home() {
  return (
    <LocalFontLayout>
      <div className="m-auto px-16 flex flex-col max-w-screen-2xl">

      <main className="relative flex justify-end ml-10 pb-32">
        <div className="absolute -top-20 left-2">
          <Image
            src='/kris.svg'
            alt="kristsina"
            width={700}
            height={700}
          />
        </div>
        <div className='content-center text-3xl tracking-wider leading-normal w-1/2 mr-19 mt-16 pr-20'>
            <p>Я не умею читать мысли, но я точно знаю как сделать так, чтобы ваш контент искали на <span className="text-main-red uppercase font-bold">Pinterest</span></p>
            <Button className="flex items-center text-2xl  px-5 py-1 my-5 text-main-red " title="услуги" isArrow={true}/>
        </div>
      </main>
      </div>
      <About />
    </LocalFontLayout>
  )
}
