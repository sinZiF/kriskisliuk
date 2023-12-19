import Image from "next/image"

interface ButtonProps {
    title: string,
    isArrow: boolean,
    className: string
}
export default function Button(
    {title, isArrow, className} : ButtonProps
    ) {
    return <button className={`${className}
        uppercase
        cursor-pointer
        border-solid
        border-2
        border-main-red
        rounded-md`}>
        {title} {isArrow && (<Image
            className="ml-5"
            src="/arrow.png"
            alt="arrow"
            width={60}
            height={2} />)}
    </button>
}