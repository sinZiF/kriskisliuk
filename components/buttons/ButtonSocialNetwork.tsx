interface Button {
    href: string;
    network: string;
}

export default function ButtonSocialNetwork({href, network}: Button) {
    return(
        <button className="
            cursor-pointer
            tracking-widest
            font-black
            uppercase
            border-solid
            border-2
            rounded-md
            border-white
            text-white
            py-2
            px-8
            hover:bg-white 
            hover:text-title-color
            hover:border-title-color
        ">
            <a href={href}>{network}</a>
        </button>
    )
}