import Image from "next/image"
import Button from "@/components/buttons/Button"
import LocalFontLayout from "./ui/local-fonts/localFontLayout"
import Services from "@/components/services/Services"
import PhotographicWorks from "@/components/photographicWorks/PhotographicWorks"
import About from "@/components/about/About"
import Cases from "@/components/cases/Cases"
import Opinions from "@/components/opinions/Opinions"
export default function Home() {
  return (
    <>
      <LocalFontLayout classNameSection="bg-color-white">
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
              <Button className="flex items-center text-2xl  px-5 py-1 my-5 text-main-red " isArrow={true}>услуги</Button>
          </div>
        </main>
      </LocalFontLayout>
      <About />
      <Services />
      <PhotographicWorks />
      <Cases />
      <Opinions />
    </>
  )
}
