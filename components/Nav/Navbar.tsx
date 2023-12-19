import Link from "next/link"
import LocalFontTitleLayout from "@/app/local-fonts/localFontTitleLayout"

export default function Navbar() {
    const listNav: string[] = ['обо мне', 'услуги', 'кейсы', 'отзывы', 'контакты']
    function Logo() {
        return <div>
            <h1 className="text-5xl">Кристина Кислюк</h1>
            <p className="text-main-red text-3xl w-2/3">pinterest strategist & content creator</p>
        </div>
    }
    return (<LocalFontTitleLayout>
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
                    {/* <li className="text-main-red">обо мне</li>
                    <li>услуги</li>
                    <li>кейсы</li>
                    <li>отзывы</li>
                    <li>контакты</li> */}
                </div>
            </ul>
        </nav>
    </LocalFontTitleLayout>)
}