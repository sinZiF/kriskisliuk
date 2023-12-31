import Image from "next/image"

interface ButtonProps {
    isArrow: boolean,
    className: string,
    children: React.ReactNode
}
export default function Button(
    {isArrow, className, children} : ButtonProps
    ) {
    return <button className={`${className}
        uppercase
        cursor-pointer
        border-solid
        border-2
        border-main-red
        rounded-md`}>
        {children} {isArrow && (<Image
            className="ml-5"
            src="/arrow.png"
            alt="arrow"
            width={60}
            height={2} />)}
    </button>
}