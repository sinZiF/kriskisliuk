import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout";
import Image from "next/image";
import Button from "../buttons/Button";
import Link from "next/link";

export default function Main() {
    return(
        <LocalFontLayout classNameSection="s:bg-gradient-to-t from-about from-70% to-color-white to-20%" id="main">
            <main className="grid grid-cols-12 grid-rows-4 gap-2 s:-mt-16 s:pb-10">
                <div className="grid s:row-start-1 s:row-end-4 s:col-start-3 s:col-end-13">
                    <Image className=""
                        src='/kris.svg'
                        alt="kristsina"
                        width={700}
                        height={200}
                    />
                </div>
                <div className='s:row-start-3 s:row-end-5 s:col-start-1 s:col-end-12 s:mt-16'>
                    <h2>Я не умею читать мысли, но я точно знаю как сделать так, чтобы ваш контент искали на <span className="text-main-red uppercase font-bold">Pinterest</span></h2>
                </div>
                    <Button className=" s:row-start-1 s:col-start-1 s:col-end-6 s:h-8 self-end
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