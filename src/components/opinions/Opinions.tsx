import LocalFontLayout from "@/ui/local-fonts/localFontLayout";
import LocalFontTitleLayout from "@/ui/local-fonts/localFontTitleLayout";
import Title from "@/ui/title/Title";
import Image from "next/image";

const srcOpinions = ['/opinions/opinion.PNG', '/opinions/opinion_2.PNG'];

type Type = {
    src: string
}

function Opinion({src} : Type){
    return(
        <div>
            <Image
                src={src}
                alt="opinion"
                width={290}
                height={300}
                className="rounded-3xl"
            />
        </div>
    )
}

export default function Opinions() {
    return(
        <LocalFontLayout>
            <LocalFontTitleLayout>
                <Title>ОТЗЫВЫ</Title>
            </LocalFontTitleLayout>
            <div className="flex justify-around gap-10 mb-10">
                {srcOpinions.map((opinion, i) => {
                    return <Opinion src={opinion} key={i}/>
                })}
            </div>
        </LocalFontLayout>
    )
}