import { myFont } from "../font/font"

interface Attributes{
  id?: string,
  classNameSection?: string,
  classNameDiv?: string,
  children: React.ReactNode
}

export default function LocalFontLayout({
    id,
    classNameSection,
    classNameDiv,
    children
  }: Attributes) {
    return <section id={id} className={`${myFont.className} ${classNameSection} `}>
      <div className={`${classNameDiv} m-auto px-16 flex flex-col max-w-screen-2xl`}>
          {children}
      </div>
    </section>
}