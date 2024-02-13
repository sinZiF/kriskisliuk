import { myFont } from "../font/font"

interface Attributes{
  id?: string,
  classNameSection?: string,
  classNameDiv?: string,
  bgColor?: string
  children: React.ReactNode,
}

export default function LocalFontLayout({
    id,
    classNameSection,
    classNameDiv,
    children,
    bgColor = 'bg-color-white'
  }: Attributes) {
    return <section id={id} className={`${myFont.className} ${classNameSection} ${bgColor}`}>
      <div className={`${classNameDiv} m-auto s:px-4 md:px-16 flex flex-col max-w-screen-2xl min-w-80`}>
          {children}
      </div>
    </section>
}