import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout";
import LocalFontTitleLayout from "@/app/ui/local-fonts/localFontTitleLayout";
import Title from "@/app/ui/title/Title";
import Image from "next/image";
import Button from "../buttons/Button";
import { Fragment } from "react";


// data source for loading the local lists services
interface ServicesList {
    basis: string[],
    basisStrategy: string[],
    management: string[],
    contentCreator: string[],
}
const servicesList: ServicesList = {
    basis: [
        '- Основы работы с площадкой.',
        '- Оформление, чтобы аккаунт работал и продвигал вас/ваши услуги/ваш бизнес.',
        '- Фишки, секреты, рабочие лайфхаки.',
        '- Основные статистики и аналитика: что важно, как поднять и тд.'
    ],
    basisStrategy: [
        '- Разработка стратегии продвижения под вашу нишу.',
        '- Углубленный разбор статистик и аналитики.',
        'Итог консультации: четкий план работы, который нужно только реализовать.',
    ],
    management: [
        '- Разработка стратегии продвижения под вашу нишу.',
        '- Регулярный постинг пинов.',
        '- Работа с аналитикой и статистиками, тестирование и внедрение дополнительных стратегий.'
    ],
    contentCreator: [
        '- Подбор референсов.',
        '- Cоздание ленты Instagram из референсов (мудборд).',
        '- Съемка контента (фото/видео.',
        '- Разбор ленты Instagram.',
        '- Разбор визуального оформления аккаунта на Pinterest и составление при необходимости нового.'
    ],
}

interface ConsultationType {
    title?: string,
    description: string,
    servivesList: string[],
}

export default function Services() {
    // block instant
    function ConsultationBlock({title = 'Pinterest', description, servivesList} : ConsultationType) {
        return(
            <div className="border-solid border-2 rounded-3xl border-main-red bg-white z-10 flex flex-col justify-between tracking-widest cursor-default">
                <div>
                    <LocalFontTitleLayout>
                    <div className="text-main-red font-black p-8 pb-4 mb-6 rounded-t-2xl hover:bg-main-red hover:text-white">
                        <h3 className="text-4xl">{title}</h3>
                        <p>{description}</p>
                    </div>
                    </LocalFontTitleLayout>
                    <div className="px-8">
                        <ul className="text-title-color">
                            {servivesList.map((service, id) => <li key={id}>{service}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button isArrow={false} className="w-4/5 p-2 text-xs my-8 text-main-red font-black tracking-widest" >
                        ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                    </Button>
                </div>
            </div>
        )
    }
    // return the jsx component instance service
    return(
        <div className="relative">
            <LocalFontLayout id="services" classNameSection="py-10 bg-color-white">
                <LocalFontTitleLayout>
                    <Title className="text-main-red font-black my-10 ">услуги</Title>
                </LocalFontTitleLayout>
                <div>
                    <div className="grid grid-cols-2 gap-4 w-3/5">
                        <ConsultationBlock description="базовая консультация" servivesList={servicesList.basis} />
                        <ConsultationBlock description="консультация + проработка стратегии" servivesList={[...servicesList.basis, '➕', ...servicesList.basisStrategy]}/>
                        <ConsultationBlock description=" ведение под ключ" servivesList={servicesList.management}/>
                        <ConsultationBlock title="Контент" description="создание" servivesList={servicesList.contentCreator}/>
                    </div>
                </div>
            </LocalFontLayout>
            <div className="absolute top-44 right-0 h-max">
                <Image src="/new_lines.png"
                    width={518}
                    height={100}
                    alt='lines' />
            </div>
        </div>
    )
}