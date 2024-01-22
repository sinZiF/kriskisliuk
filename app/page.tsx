import Image from "next/image"
import Button from "@/components/buttons/Button"
import LocalFontLayout from "./ui/local-fonts/localFontLayout"
import Services from "@/components/services/Services"
import PhotographicWorks from "@/components/photographicWorks/PhotographicWorks"
import About from "@/components/about/About"
import Cases from "@/components/cases/Cases"
import Opinions from "@/components/opinions/Opinions"
import Footer from "@/components/footer/Footer"
import Main from "@/components/main/Main"

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Services />
      <PhotographicWorks />
      <Cases />
      <Opinions />
      <Footer />
    </>
  )
}
