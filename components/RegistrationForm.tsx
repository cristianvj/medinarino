"use client"

import { sendForm } from "@/lib/actions/user.actions"
import { useState } from "react"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");
    try {
      const response = await sendForm({ formData });
  
      if (response?.ok) {
        setStatus("Mensaje enviado ✅");
        alert("Mensaje enviado ✅");
        setFormData({ name: "", email: "", type: "" });
      } else {
        setStatus("Error al enviar ❌");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("Error al enviar ❌");
    }
  };

  console.log(status)
  return (
    <section id="registro" className="py-20 bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          🚀 Únete a la Lista de Espera y Empieza tu Camino hacia la Libertad Financiera
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="type" className="block mb-2 font-semibold">
              ¿Soy un?
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Selecciona una opción</option>
              <option value="medico">Médico, Especialista o Clínica</option>
              <option value="paciente">Paciente</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            ¡Quiero Acceder Primero!
          </button>
        </form>
      </div>
    </section>
  )
}