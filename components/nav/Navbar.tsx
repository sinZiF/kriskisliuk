'use client'
// nextjs component
import Link from "next/link";
import Image from "next/image";
// react hook
import { useState } from "react";
// icons
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
//local font
import LocalFontTitleLayout from "@/app/ui/local-fonts/localFontTitleLayout";
import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout";
//my component
import TextLogo from "@/app/ui/textLogo/TextLogo";

export default function Navbar() {
    const navigationLinks: string[] = ['обо мне', 'услуги', 'кейсы', 'отзывы', 'контакты'];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // function Logo() {
    //     return <div className="s:text-2xl">
    //         <h1 className="md:text-5xl">Кристина Кислюк</h1>
    //         <div className={`${myFont.className} text-main-red s:text-xs md:text-2xl my-2 tracking-widest font-black`}>
    //             <p>pinterest strategist</p>
    //             <p>& content creator</p>
    //         </div>
    //     </div>
    // }

    function IMG_LOGO() {
        return <Image src='/logo-bg.png' alt="logo" width={30} height={30}></Image>
    }

    function BurgerMenu() {
        return <div onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose /> : <CiMenuBurger />}
        </div>
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
      }

    return (
    <LocalFontLayout classNameSection="bg-color-main-red">

    <LocalFontTitleLayout>
        <div className="transform transition-all duration-200">
            <nav className="s:py-6 tracking-widest">
                <ul className="">
                    <div className="">
                        <div className="flex flex-col text-title-color">
                            <TextLogo bool={!isMenuOpen} className="order-2 z-10" />
                            <div className="flex justify-between order-1">
                                    <div>
                                        <IMG_LOGO />
                                    </div>
                                    <div className="z-10">
                                        <button onClick={toggleMenu} className="text-black">
                                            {isMenuOpen ? <IoMdClose /> : <CiMenuBurger />}
                                        </button>
                                    </div>
                                </div>
                        </div>
                        <div className={`${isMenuOpen ? '' : 'hidden'} fixed overflow-hidden top-0 left-0 right-0 translate-x-[-5%] flex flex-col justify-center items-center gap-4 pt-28 s:h-screen s:w-screen s:bg-about`}>
                            {/* {isMenuOpen ? '' : <TextLogo />} */}
                        {/* flex gap-4 lg:gap-8 sm:text-2xl pt-4 tracking-widest md:block md:flex-row  */}
                            {navigationLinks.map((name: string) =>
                                <li key={name}>
                                    <Link href="/"
                                        className='gap-px tracking-normal uppercase h-min w-full s:text-title-color s:text-2xl'>
                                        {name}
                                    </Link>
                                </li>
                                )
                            }
                        </div>
                    </div>
                </ul>
            </nav>
          {/* </div> */}
      </div>
    </LocalFontTitleLayout>
    </LocalFontLayout>
    )
}