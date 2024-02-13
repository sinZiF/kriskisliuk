import { HiArrowLongRight } from "react-icons/hi2";
interface ButtonProps {
    isArrow?: boolean,
    className?: string,
    width?: number,
    height?: number,
    size?: number,
    children?: React.ReactNode
}
export default function Button(
    {className, isArrow = true, width = 60, height = 2, size=28, children} : ButtonProps
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
        rounded-md
        font-black`}>
        {children}
        <HiArrowLongRight className="" size={size}/>
    </button>
}