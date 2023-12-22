import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout";
import LocalFontTitleLayout from "@/app/ui/local-fonts/localFontTitleLayout";
import Title from "@/app/ui/title/Title";

export default function About() {
    function LiEl({children} : {children: React.ReactNode}) {
        return (
            <li className="pr-16">{children}</li>
        )
    }
    return(
        <LocalFontLayout>
            <section id="about"  className="pt-56 bg-about text-title-color">
                <div className="m-auto px-16 flex flex-col max-w-screen-2xl pb-14">
                    <LocalFontTitleLayout>
                        <Title>обо мне</Title>
                    </LocalFontTitleLayout>
                    <div>
                        <ul className="grid grid-cols-2 gap-x-52 gap-y-10 text-2xl tracking-wider leading-normal">
                            <LiEl>• Pinterest-стратег: грамотно выстраиваю стратегии, которые приводят к достижению поставленной цели</LiEl>
                            <LiEl>• Свободно владею английским, немецким и польским языками. Достучусь до сердец вашей целевой аудитории по всему миру</LiEl>
                            <LiEl>• Знаю, как масштабировать бизнес при помощи Pinterest и привлекать новых клиентов/покупателей из любого  уголка планеты</LiEl>
                            <LiEl>• Создаю контент со смыслом</LiEl>
                        </ul>
                    </div>
                </div>
            </section>
        </LocalFontLayout>
    )
}