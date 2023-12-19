import { myFontTitle } from "../font/font";

export default function LocalFontTitleLayout({
    children
}: {
    children: React.ReactNode
} ) {
    return <div className={myFontTitle.className}>
        {children}
    </div>
}