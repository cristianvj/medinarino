import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-400 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white-600">🏥 MediNariño</div>
        </nav>
      </header>
      <div className="md:pt-5 pt-0 pb-40">
        <div className="container mx-auto px-4 flex flex-col md:gap-10 md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Muy pronto... <br /> <br />El mejor directorio médico de Nariño!👩‍⚕️ 
            </h1>
            <p className="text-xl mb-8">
              Encuentra los mejores especialistas y clínicas de Nariño en un solo lugar. ¡Regístrate ahora y sé el primero en acceder cuando se lance la aplicación!
            </p>
            <a
              href="#registro"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300"
            >
              Únete a la Lista de Espera 🚀
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={`/img/doctors-hero.jpg?height=600&width=600`}
              alt="Doctors Hero"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
