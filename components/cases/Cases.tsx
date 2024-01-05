import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout";
import LocalFontTitleLayout from "@/app/ui/local-fonts/localFontTitleLayout";
import Title from "@/app/ui/title/Title";
import { title } from "process";

const dataCases = [
    {
        title: 'Аня | Контентмейкер',
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
        title: 'Ольга | Фотограф',
        description: [
            '- Разработка стратегии продвижения под вашу нишу;',
            '- Регулярный постинг пинов;',
            '- Работа с аналитикой и статистиками, тестирование и внедрение дополнительных стратегий.'
        ]
    },
    {
        title: 'Яна | Графический дизайнер',
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
    title: string;
    description: string[];
    className?: string;
}
function Case({title, description, className} : CaseType) {
    return(
        <div className={`grid gap-2 col-span-7 bg-about rounded-2xl ${className}`}>
            <div>
                {title}
            </div>
            <div>
                {description.map(text => <p key={title}>{text}</p>)}
            </div>
        </div>
    )
}

export default function Cases() {
    return(
        <LocalFontLayout>
            <LocalFontTitleLayout>
                <Title className="text-title-color">КЕЙСЫ</Title>
            </LocalFontTitleLayout>
            <div className="grid grid-cols-12 grid-rows-4-[1fr_1fr_1fr]">
                <Case className="order-2 col-start-1 col-span-7 row-start-3 row-span-3 bg-title-color" title="Аня | Контентмейкер" description={dataCases[0].description} />
                <Case className="order-1 col-start-2 col-span-9 row-start-1 row-span-3 bg-main-red" title="Аня | Контентмейкер" description={dataCases[0].description} />
                <Case className="order-3 col-start-6 col-span-7 row-start-2 row-span-3" title="Аня | Контентмейкер" description={dataCases[0].description} />
            </div>
        </LocalFontLayout>
    )
}