'use client'

export default function TextLogo({bool, className} : {className: string, bool: boolean}) {
    return <div className={`${className} s:text-2xl`}>
        {bool ? <div  className={className}>
                    <h1 className="md:text-5xl text-black">Кристина Кислюк</h1>
                    <div className={`text-main-red s:text-xs md:text-2xl my-2 tracking-widest`}>
                        <p>pinterest strategist</p>
                        <p>& content creator</p>
                    </div>
                </div> :
                <div className="flex flex-col justify-center text-center">
                    <h1 className="s:text-[27px]">Кристина Кислюк</h1>
                    <div className={`s:text-sm md:text-2xl my-2 tracking-widest font-black`}>
                        <p>pinterest strategist</p>
                        <p>& content creator</p>
                    </div>
            </div>}
    </div>
}