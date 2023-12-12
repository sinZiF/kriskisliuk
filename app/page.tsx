import Image from "next/image"
import Button from "@/components/Buttons/Button"
import LocalFontLayout from "./local-fonts/localFontLayout"
export default function Home() {
  return (
    <LocalFontLayout>
      <main className="relative flex justify-end ml-10">
        <div className="absolute -top-24 left-10">
          <Image
            src='/kris.svg'
            alt="kristsina"
            width={650}
            height={650}
          />
        </div>
        <div className='text-3xl w-1/2 px-16'>
            <p>Я не умею читать мысли, но я точно знаю как сделать так, чтобы ваш контент искали на <span className="text-main-red font-bold uppercase">Pinterest</span></p>
            <Button className="flex items-center px-10 py-3 my-10 text-main-red" title="услуги" isArrow={true}/>
        </div>
      </main>
    </LocalFontLayout>
  )
}
