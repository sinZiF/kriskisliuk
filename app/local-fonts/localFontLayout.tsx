import { myFont } from "../font/font"

export default function LocalFontLayout({
    children
  }: {
    children: React.ReactNode
  }) {
    return <section className={myFont.className}>
            {children}
        </section>
}