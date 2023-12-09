import Image from "next/image"

export default function Home() {
  return (
    <section>
      <main className="relative flex justify-end ml-10">
        <div className="absolute -top-24 left-10">
          <Image
            src='/kris.svg'
            alt="kristsina"
            width={650}
            height={650}
          />
        </div>
        <div className="text-3xl w-1/2 p-10">
            <p>Я не умею читать мысли, но я точно знаю как сделать так, чтобы ваш контент искали на <span className="text-main-red">Pinterest</span></p>
            <button>услуги</button>
        </div>
      </main>
    </section>
  )
}
