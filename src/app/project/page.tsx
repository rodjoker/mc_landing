import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Projects() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="pt-20 pb-12">
        {/* Video Section */}
        <section className="container mx-auto px-4 py-12 flex justify-center items-center">
          <div className="w-[80%] aspect-video">
            <video 
              className="w-full h-full rounded-lg shadow-2xl"
              controls
              autoPlay
              muted
              playsInline
            >
              <source src="/WhatsApp Video 2025-09-14 at 1.27.44 AM.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </section>

        {/* Title Section */}
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Proyecto Destacado
          </h1>
          <p className="text-gray-400 text-center max-w-3xl mx-auto text-lg">
            Una muestra de nuestro trabajo más reciente, donde la creatividad y la técnica se unen para crear experiencias visuales únicas.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  )
}
