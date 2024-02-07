
export default function Title({className, children}: {className?: string, children: React.ReactNode}) {
    return(
        <h2 className={`${className} uppercase text-5xl s:my-2`}>{children}</h2>
    )
}