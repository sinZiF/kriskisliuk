'use client'
import Link from "next/link";
import { myFont } from "@/app/ui/font/font";
import LocalFontTitleLayout from "@/app/ui/local-fonts/localFontTitleLayout";
import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout";
import { useState } from "react";

export default function Navbar() {
    const navigationLinks: string[] = ['обо мне', 'услуги', 'кейсы', 'отзывы', 'контакты'];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function Logo() {
        return <div className="s:text-2xl">
            <h1 className="md:text-5xl">Кристина Кислюк</h1>
            <div className={`${myFont.className} text-main-red s:text-xs md:text-2xl my-2 tracking-widest font-black`}>
                <p>pinterest strategist</p>
                <p>& content creator</p>
            </div>
            {/* <Button className="text-xs px-4 py-2" width={30}>
                <Link href='#services'>услуги</Link>
            </Button> */}
        </div>
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
      }

    return (
    <LocalFontLayout classNameSection="bg-color-white">

    <LocalFontTitleLayout>
        <nav className="py-7 tracking-widest">
            <ul className="flex justify-between lg:flex-row s:flex-col">
                <Logo />
                <div className="flex gap-4 lg:gap-8 sm:text-2xl pt-4 tracking-widest s:hidden md:block md:flex-row">
                    {navigationLinks.map((name: string) =>
                        <li key={name}>
                            <Link href="/"
                                className='gap-px tracking-normal uppercase h-min w-full'>
                                {name}
                            </Link>
                        </li>
                        )
                    }
                </div>
            </ul>
            {/* <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <div className="flex md:hidden">
            <button
              className="text-main-red w-12"
              onClick={toggleMenu}
            >
              <svg viewBox="0 0 24 24" className="fill-current">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.293 4.293a1 1 0 0 0-1.414-1.414L12 10.586 5.121 3.707a1 1 0 0 0-1.414 1.414L10.586 12l-6.879 6.879a1 1 0 1 0 1.414 1.414L12 13.414l6.879 6.879a1 1 0 0 0 1.414-1.414L13.414 12l6.879-6.879z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm1 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H5z"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:justify-end text-xl`}
          >
            {navigationLinks.map((name) => (
              <li key={name} className="md:ml-6 mt-3 md:mt-0">
                <Link href="/" className="uppercase tracking-widest">
                    {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
        </nav>
    </LocalFontTitleLayout>
    </LocalFontLayout>
    )
}