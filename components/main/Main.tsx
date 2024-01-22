import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout";
import Image from "next/image";
import Button from "../buttons/Button";
import Link from "next/link";

export default function Main() {
    return(
        <LocalFontLayout classNameSection="bg-color-white" id="main">
            <main className="s:pt-24">
                <div className="
                    s:fixed
                    s:top-16
                    left-16
                    s:w-64">
                    <Image
                        src='/kris.svg'
                        alt="kristsina"
                        width={700}
                        height={700}
                    />
                </div>
                <div className='
                    font-medium
                    s:pt-16
                    s:absolute
                    s:pr-4
                    s:top-56
                    text-base
                    tracking-wide
                    leading-normal'>
                    <h2>Я не умею читать мысли, но я точно знаю как сделать так, чтобы ваш контент искали на <span className="text-main-red uppercase font-bold">Pinterest</span></h2>
                    <Button className="
                        s:font-black
                        s:absolute
                        s:-top-28
                        s:w-28
                        s:text-[10px]
                        s:border-[1px]
                        flex
                        items-center
                        py-1
                        text-main-red" width={30}>
                            <Link href='#services'>услуги</Link>
                    </Button>
                </div>
            </main>
      </LocalFontLayout>
    )
}