import Image from "next/image"

interface ButtonProps {
    isArrow?: boolean,
    className?: string,
    width?: number,
    height?: number,
    children?: React.ReactNode
}
export default function Button(
    {className, isArrow = true, width = 60, height = 2, children} : ButtonProps
    ) {
    return <button className={`${className}
        flex
        justify-center
        items-center
        uppercase
        cursor-pointer
        border-solid
        border-2
        tracking-widest
        border-main-red
        rounded-md`}>
        {children} {isArrow && (<Image
            className="ml-2 text-2xl"
            src="/arrow.png"
            alt="arrow"
            width={width}
            height={height} />)}
    </button>
}