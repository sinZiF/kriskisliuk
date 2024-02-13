import LocalFontLayout from "@/ui/local-fonts/localFontLayout";
import Image from "next/image";
import Button from "../../ui/buttons/Button";
import Link from "next/link";
import TextLogo from "@/ui/textLogo/TextLogo";
import { myFontTitle } from "@/ui/font/font";

export default function Main() {
    return(
        <LocalFontLayout classNameSection="s:bg-gradient-to-t from-about from-50% to-color-white to-50% h-lvh" id="main">
            <main className="grid grid-cols-12 grid-rows-[35px_1fr_1fr_1fr] s:pb-4">
                <TextLogo bool={true}  className={`${myFontTitle.className} s:row-start-2 s:row-span-2 s:col-start-1 s:col-span-12 s:justify-items-center s:font-black sm:hidden`}/>
                <div className="grid s:row-start-2 s:row-end-4 s:col-start-3 s:col-end-13 mt-8">
                    <Image className=""
                        src='/kris.svg'
                        alt="kristsina"
                        width={700}
                        height={200}
                        />
                </div>
                <div className='s:row-start-4 s:row-end-5 s:col-start-1 s:col-end-12'>
                    <h2>Я не умею читать мысли, но я точно знаю как сделать так, чтобы ваш контент искали на <span className="text-main-red uppercase font-bold">Pinterest</span></h2>
                </div>
                <Button className=" s:row-start-2 s:col-start-1 s:col-end-6 s:h-8 self-end
                    flex
                    items-center
                    py-1
                    text-main-red" width={30}>
                        <Link href='#services' className="s:text-[12px]">услуги</Link>
                </Button>
            </main>
      </LocalFontLayout>
    )
}