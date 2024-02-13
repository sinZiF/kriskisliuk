import LocalFontLayout from "@/ui/local-fonts/localFontLayout";
import LocalFontTitleLayout from "@/ui/local-fonts/localFontTitleLayout";
import Title from "@/ui/title/Title";
import Image from "next/image";

export default function PhotographicWorks() {
    return(
        <LocalFontLayout id="phorographic">
            <LocalFontTitleLayout>
                <Title className="text-title-color">фотоработы</Title>
            </LocalFontTitleLayout>
            <div className="grid xl:grid-cols-12 gap-4 mb-12 grid-cols-6">
                <picture className="grid col-span-2 "><Image src="/PhotoWorks/nature.jpg" alt="nature" width={300} height={300}/></picture>
                <picture className="grid col-span-2 "><Image src="/PhotoWorks/old-town.jpg" alt="old-town" width={300} height={300}/></picture>
                <picture className="grid col-span-2"><Image src="/PhotoWorks/field.jpg" alt="field" width={300} height={300}/></picture>
                <picture className="grid col-span-2"><Image src="/PhotoWorks/counter.jpg" alt="counter" width={300} height={300}/></picture>
                <picture className="grid col-span-2"><Image src="/PhotoWorks/bicycle.jpg" alt="bicycle" width={300} height={300}/></picture>
                <picture className="grid col-span-2"><Image src="/PhotoWorks/bar.jpg" alt="bar" width={300} height={300}/></picture>
            </div>
        </LocalFontLayout>
    )
}