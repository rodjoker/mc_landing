import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Contact() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
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
            <form className="bg-zinc-900 rounded-lg p-8 shadow-2xl">
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

              {/* Phone Field */}
              <div className="mb-6">
                <label 
                  htmlFor="phone" 
                  className="block text-white font-medium mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="+1 (234) 567-8900"
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

            {/* Additional Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="p-6 bg-zinc-900 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:contact@example.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@example.com
                </a>
              </div>
              <div className="p-6 bg-zinc-900 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Sígueme</h3>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
