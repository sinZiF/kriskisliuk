import Link from "next/link"
import LocalFontTitleLayout from "@/app/ui/local-fonts/localFontTitleLayout"
import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout"

export default function Navbar() {
    const listNav: string[] = ['обо мне', 'услуги', 'кейсы', 'отзывы', 'контакты']
    function Logo() {
        return <div>
            <h1 className="text-5xl">Кристина Кислюк</h1>
            <p className="text-main-red text-2xl w-2/3 my-2 tracking-widest">pinterest strategist & content creator</p>
        </div>
    }
    return (
    <LocalFontLayout classNameSection="bg-color-white">

    <LocalFontTitleLayout>
        <div className="m-auto px-16 flex flex-col max-w-screen-2xl">
            <nav className="py-7 tracking-widest">
                <ul className="flex justify-between">
                    <Logo />
                    <div className="flex gap-8 text-2xl pt-5 tracking-widest">
                        {listNav.map((name: string) =>
                            <li key={name}>
                                <Link href="/"
                                    className='gap-px tracking-normal uppercase h-min'>
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