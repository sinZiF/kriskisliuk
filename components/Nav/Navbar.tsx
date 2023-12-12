import LocalFontTitleLayout from "@/app/local-fonts/localFontTitleLayout"
export default function Navbar() {
    const listNav: string[] = ['обо мне', 'услуги', 'кейсы', 'отзывы', 'контакты']
    function Logo() {
        return <div>
            <h1 className="text-6xl">Кристина Кислюк</h1>
            <p className="text-main-red text-3xl w-64">pinterest strategist & content creator</p>
        </div>
    }
    return (<LocalFontTitleLayout>
        <nav className="py-5">
            <ul className="flex justify-between">

                <Logo />
                <div className="flex gap-x-7 text-3xl">
                    {listNav.map(name => <li className="uppercase" key={name}>{name}</li>)}
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