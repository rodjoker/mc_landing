import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InfoCard from '../../components/InfoCard'

export default function AboutMe() {
  const aboutInfo = [
    {
      title: "About Me",
      description: "Desde que tengo memoria, mi vida ha sido un proyector de historias. No solo me limitaba a ver películas como Shrek o Megamente, sino que las devoraba una y otra vez, intrigado por cómo se construía cada escena para hacerme sentir, reír o soñar. Hoy, esa fascinación sigue intacta.Con más de cuatro años de experiencia, he transformado mi pasión de espectador a creador, pasando de ver la gran pantalla a la sala de edición. Como director y editor, mi misión es simple: usar el poder del cine para contar historias que conecten, inspiren y dejen una marca duradera. Esto es más que un trabajo; es mi forma de ver y entender el mundo",
      imageUrl: "/mc1.jpeg",
      imageAlt: "Director trabajando"
    },
    {
      title: "Mi Experiencia",
      description: "in development process.",
      imageUrl: "/mc2.jpeg",
      imageAlt: "Equipo de producción",
      reverse: true
    },
    {
      title: "Mi Proceso",
      description: "in development process.",
      imageUrl: "/mc3.jpeg",
      imageAlt: "Proceso creativo"
    },
    {
      title: "Mi Proceso",
      description: "in development process.",
      imageUrl: "/mc4.jpeg",
      imageAlt: "Proceso creativo"
    },
    {
      title: "Mi Proceso",
      description: "in development process.",
      imageUrl: "/mc5.jpeg",
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
