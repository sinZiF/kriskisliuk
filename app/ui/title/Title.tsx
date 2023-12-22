
export default function Title({className, children}: {className?: string, children: React.ReactNode}) {
    return(
        <h2 className={`${className} uppercase text-5xl mb-6`}>{children}</h2>
    )
}