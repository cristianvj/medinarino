"use client"

import { useState, useEffect } from "react"

export default function ExclusiveOffer() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <section className="p-30 bg-gradient-to-r from-blue-600 to-green-400 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">🎁 Únete Hoy y Obtén un Bono Exclusivo</h2>
        <p className="text-xl mb-8">
          Los primeros 100 registrados recibirán un descuento especial en el plan y acceso anticipado al directorio médico.
        </p>
        <div className="text-4xl font-bold mb-8">Tiempo restante: {formatTime(timeLeft)}</div>
        <a
          href="#registro"
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300"
        >
          ¡Asegura tu Lugar Ahora!
        </a>
      </div>
    </section>
  )
}