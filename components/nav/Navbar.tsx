'use client'


import { IconContext } from "react-icons";

// nextjs component
import Link from "next/link";
// react hook
import { useState } from "react";
// icons
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
//local font
import LocalFontTitleLayout from "@/app/ui/local-fonts/localFontTitleLayout";
import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout";
import TextLogo from "@/app/ui/textLogo/TextLogo";
export default function Navbar() {
    const navigationLinks: string[] = ['обо мне', 'услуги', 'кейсы', 'отзывы', 'контакты'];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function menuTrigger() {
        return <div onClick={toggleMenu}>
            <IconContext.Provider value={{size: '20'}}>
                {isMenuOpen ? <IoMdClose className="text-[20px]"/> : <CiMenuBurger />}
            </IconContext.Provider>;
        </div>
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
      }

    return (
    <LocalFontLayout classNameSection="bg-color-main-red">

    <LocalFontTitleLayout >
        <div className="transform transition-all duration-200 s:absolute s:top-0 s:right-0 bg-gradient-mask s:w-full">
            <nav className="tracking-widest">
                <ul className="">
                    <div className="flex flex-col text-title-color">
                        <div className={`flex justify-end pr-8 py-2 ${isMenuOpen ? 'bg-about' : 'bg-gradient-mask'}`}>
                            <button onClick={toggleMenu} className="text-main-red z-10 w-2">
                            <IconContext.Provider value={{size: '20'}}>
                                {isMenuOpen ? <IoMdClose /> : <CiMenuBurger />}
                            </IconContext.Provider>
                            </button>
                        </div>
                    </div>
                    <div className={`${isMenuOpen ? '' : 'hidden'} flex flex-col justify-center items-center gap-4 s:h-screen s:w-full h-full screen bg-about s:text-title-color`}>
                    {/* flex gap-4 lg:gap-8 sm:text-2xl pt-4 tracking-widest md:block md:flex-row  */}
                        {isMenuOpen && <TextLogo bool={!isMenuOpen} className="pb-8"/>}
                        {navigationLinks.map((name: string) =>
                            <li key={name}>
                                <Link href="/"
                                    className='gap-px tracking-normal uppercase h-min w-full s:text-2xl'>
                                    {name}
                                </Link>
                            </li>
                            )
                        }
                    </div>
                </ul>
            </nav>
      </div>
    </LocalFontTitleLayout>
    </LocalFontLayout>
    )
}