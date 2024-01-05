
export default function Title({className, children}: {className?: string, children: React.ReactNode}) {
    return(
        <h2 className={`${className} uppercase text-5xl my-12`}>{children}</h2>
    )
}