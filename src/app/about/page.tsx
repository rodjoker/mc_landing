import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InfoCard from '../../components/InfoCard'

export default function AboutMe() {
  const aboutInfo = [
    {
      title: "About Me",
      description: "Soy un director y editor de video apasionado por contar historias visuales impactantes. Con años de experiencia en la industria audiovisual, me especializo en crear contenido que conecta con la audiencia y transmite mensajes poderosos a través de la narrativa visual.",
      imageUrl: "/images/about-1.jpg",
      imageAlt: "Director trabajando"
    },
    {
      title: "Mi Experiencia",
      description: "He trabajado con marcas reconocidas internacionalmente y artistas destacados, desarrollando comerciales, videos musicales y contenido corporativo. Mi enfoque combina creatividad con precisión técnica para entregar resultados excepcionales.",
      imageUrl: "/images/about-2.jpg",
      imageAlt: "Equipo de producción",
      reverse: true
    },
    {
      title: "Mi Proceso",
      description: "Cada proyecto es único y merece una aproximación personalizada. Trabajo estrechamente con mis clientes desde la conceptualización hasta la entrega final, asegurando que cada detalle cumpla con los más altos estándares de calidad.",
      imageUrl: "/images/about-3.jpg",
      imageAlt: "Proceso creativo"
    }
  ];

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Transformando Ideas en Historias Visuales
          </h1>
          <p className="text-gray-400 text-center max-w-3xl mx-auto text-lg">
            Descubre cómo damos vida a tus ideas a través del poder del video y la narrativa visual.
          </p>
        </section>

        {/* Info Cards Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col space-y-12">
            {aboutInfo.map((info, index) => (
              <InfoCard
                key={index}
                title={info.title}
                description={info.description}
                imageUrl={info.imageUrl}
                imageAlt={info.imageAlt}
                reverse={info.reverse}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-zinc-900 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para crear algo increíble?
            </h2>
            <p className="text-gray-400 mb-6">
              Contacta conmigo para discutir tu próximo proyecto.
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Contáctame
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
