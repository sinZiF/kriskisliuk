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
        <LocalFontLayout id="about" classNameSection="pt-60 text-title-color" classNameDiv="pb-14" bgColor="bg-about">
            <LocalFontTitleLayout>
                <Title className="mb-6">обо мне</Title>
            </LocalFontTitleLayout>
            <div>
                <ul className="grid grid-cols-2 gap-x-52 gap-y-10 text-2xl tracking-wider leading-normal">
                    <LiEl>• Pinterest-стратег: грамотно выстраиваю стратегии, которые приводят к достижению поставленной цели</LiEl>
                    <LiEl>• Свободно владею английским, немецким и польским языками. Достучусь до сердец вашей целевой аудитории по всему миру</LiEl>
                    <LiEl>• Знаю, как масштабировать бизнес при помощи Pinterest и привлекать новых клиентов/покупателей из любого  уголка планеты</LiEl>
                    <LiEl>• Создаю контент со смыслом</LiEl>
                </ul>
            </div>
        </LocalFontLayout>
    )
}