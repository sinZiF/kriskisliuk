import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout";
import LocalFontTitleLayout from "@/app/ui/local-fonts/localFontTitleLayout";
import Title from "@/app/ui/title/Title";
import Image from "next/image";

const dataCases = [
    {
        title: ['Аня', 'Контентмейкер'],
        srcImg: '/cases/ania.jpg',
        description: [
            '- Разработка стратегии продвижения под вашу нишу;',
            '- Регулярный постинг пинов;',
            '- Работа с аналитикой и статистиками, тестирование и внедрение дополнительных стратегий;',
            '- Разработка стратегии продвижения под вашу нишу;',
            '- Регулярный постинг пинов;',
            '- Работа с аналитикой и статистиками, тестирование и внедрение дополнительных стратегий;'
        ]
    },
    {
        title: ['Ольга', 'Фотограф'],
        description: [
            '- Разработка стратегии продвижения под вашу нишу;',
            '- Регулярный постинг пинов;',
            '- Работа с аналитикой и статистиками, тестирование и внедрение дополнительных стратегий.'
        ]
    },
    {
        title: ['Яна', 'Графический дизайнер'],
        description: [
            '-  Разработка стратегии продвижения под вашу нишу;',
            '- Регулярный постинг пинов;',
            '- Работа с аналитикой и статистиками, тестирование и внедрение дополнительных стратегий;',
            '-  Разработка стратегии продвижения под вашу нишу;',
            '- Регулярный постинг пинов;',
            '- Работа с аналитикой и статистиками, тестирование и внедрение дополнительных стратегий;',
            '-  Разработка стратегии продвижения под регулярный постинг пинов;',
            '- Работа с аналитикой и статистиками, тестирование и внедрение;'

        ]
    }
]
interface CaseType {
    titleName: string;
    title:  string;
    // srcImg: string;
    // nameImg: string;
    description: string[];
    className?: string;
}
function Case({titleName, title, description, className} : CaseType) {
    return(
        <div className={`grid col-span-7 bg-about rounded-2xl p-10 ${className}`}>
            <div>
                <h3 className="my-2 text-4xl">{titleName} <span className="text-2xl">| {title}</span></h3>
            </div>
            <div className="flex gap-10 font-bold tracking-widest leading-6">
                <div>
                    {description.map(cur => <p key={cur}>{cur}</p>)}
                </div>
                <div className="grid grid-cols-5 grid-rows-1 content-center justify-center m-auto">
                    <Image className="col-start-2 col-span-4" alt='img' src='/cases/ania.jpg' width={350} height={300} />
                </div>
            </div>
        </div>
    )
}

export default function Cases() {
    return(
        <LocalFontLayout id="cases">
            <LocalFontTitleLayout>
                <Title className="text-title-color">КЕЙСЫ</Title>
            </LocalFontTitleLayout>
            <div className="grid grid-cols-12 grid-rows-4-[1fr_1fr_1fr] mb-16">
                <Case className="order-3 col-start-1 col-span-6 row-start-3 row-span-3 text-title-color" titleName={dataCases[0].title[0]} title={dataCases[0].title[1]} description={dataCases[0].description} />
                <Case className="order-1 col-start-2 col-span-9 row-start-1 row-span-3 bg-white border-2 border-main-red text-main-red" titleName={dataCases[1].title[0]} title={dataCases[1].title[1]} description={dataCases[1].description} />
                <Case className="order-2 col-start-6 col-span-7 row-start-2 row-span-3 bg-title-color text-white" titleName={dataCases[2].title[0]} title={dataCases[2].title[1]} description={dataCases[2].description} />
            </div>
        </LocalFontLayout>
    )
}