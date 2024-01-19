import { myFontTitle } from "@/app/ui/font/font";
import LocalFontTitleLayout from "@/app/ui/local-fonts/localFontTitleLayout";
import LocalFontLayout from "@/app/ui/local-fonts/localFontLayout";
import Title from "@/app/ui/title/Title";
import ButtonSocialNetwork from "../buttons/ButtonSocialNetwork";

type Network = {
    name: string;
    link: string;
}

const SOCIAL_NETWORK: Array<Network> = [
    {
        name: 'instagram',
        link: 'https://www.instagram.com/kriskisliuk/'
    },
    {
        name: 'pinterest',
        link: 'https://pl.pinterest.com/kriskisliuk/_created/'
    },
    {
        name: 'youtube',
        link: 'https://www.youtube.com/@kriskisliuk'
    },
    {
        name: 'tiktok',
        link: 'https://www.tiktok.com/@kriskisliuk'
    },
    // {
    //     name: 'telegram',
    //     link: 'https://t.me/kriskisliuk'
    // },
    {
        name: 'threads',
        link: 'https://www.threads.net/@kriskisliuk'}
    ]

export default function Footer() {
    return(
        <LocalFontLayout classNameSection="bg-title-color pb-8">
        <LocalFontTitleLayout>
            <Title className="text-white">КОНТАКТЫ</Title>
        </LocalFontTitleLayout>
        <div className={`${myFontTitle.className} flex gap-8 justify-center`}>
            {SOCIAL_NETWORK.map(network => <ButtonSocialNetwork key={network.name} href={network.link} network={network.name} />) }
        </div>
    </LocalFontLayout>
    )
}