"use client";

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

export default function Contact() {

 const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
    ).then(
      () => {
        setStatusMessage("Mensaje enviado con éxito ✅");
        setIsSuccess(true);
        form.current?.reset(); // Limpia los campos
      },
      () => {
        setStatusMessage("Error al enviar el mensaje ❌");
        setIsSuccess(false);
      }
    );
  };

  return (
    <>
     <Header />
    <main className="bg-black min-h-screen mt-16">
     
      <div className="pt-20 pb-12">
        {/* Contact Form Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contacto
              </h1>
              <p className="text-gray-400 text-lg">
                ¿Tienes un proyecto en mente? Cuéntame más sobre él.
              </p>
            </div>

            {/* Form */}
            <form ref={form} onSubmit={sendEmail} className="bg-zinc-900 rounded-lg p-8 shadow-2xl">
              {/* Name Field */}
              <div className="mb-6">
                <label 
                  htmlFor="name" 
                  className="block text-white font-medium mb-2"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Description Field */}
              <div className="mb-8">
                <label 
                  htmlFor="description" 
                  className="block text-white font-medium mb-2"
                >
                  Descripción del Proyecto
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-black py-4 px-8 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Enviar Mensaje</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </button>
            </form>
            {statusMessage && (
            <p
              className={`mt-6 text-lg font-medium ${
                isSuccess ? "text-green-700" : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
          </div>
        </section>
      </div>
      <Footer />
    </main>
    </>
  )
}
