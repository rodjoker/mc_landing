import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InfoCard from '../../components/InfoCard'

export default function AboutMe() {
  const aboutInfo = [
    {
      title: "About Me",
      description: "Desde que tengo memoria, mi vida ha sido un proyector de historias. No solo me limitaba a ver películas como Shrek o Megamente, sino que las devoraba una y otra vez, intrigado por cómo se construía cada escena para hacerme sentir, reír o soñar. Hoy, esa fascinación sigue intacta.Con más de cuatro años de experiencia, he transformado mi pasión de espectador a creador, pasando de ver la gran pantalla a la sala de edición. Como director y editor, mi misión es simple: usar el poder del cine para contar historias que conecten, inspiren y dejen una marca duradera. Esto es más que un trabajo; es mi forma de ver y entender el mundo",
      imageUrl: "/one.jpeg",
      imageAlt: "Director trabajando"
    },
    {
      title: "Mi Experiencia",
      description: "A lo largo de mi trayectoria como creativo audiovisual he trabajado en proyectos que abarcan desde la edición hasta la dirección de contenidos, consolidando una experiencia integral en distintas áreas del medio. Como *editor principal de minidocumentales para YouTube, perfeccioné mi dominio de **Adobe Premiere Pro, desarrollando montajes de 10 a 20 minutos en los que combinaba material fotográfico con videos de apoyo, aplicando **transiciones rápidas y diseño sonoro* para reforzar la narrativa y mantener un ritmo coherente con cada historia. Posteriormente, asumí un desafío de mayor escala en la producción de *tutoriales de alta frecuencia (seis videos diarios), donde me encargaba de **grabar, narrar, editar y publicar* el contenido. Para optimizar recursos y sostener la calidad en un entorno de alta demanda, implementé un *workflow sistematizado, con estilos de edición predefinidos y la integración de **herramientas de inteligencia artificial en audio, lo que permitió agilizar las narraciones y reducir tiempos de posproducción. Actualmente, desarrollo de forma integral mi **marca personal* a través de una *serie episódica en YouTube, en la que experimento con **nuevos ritmos de edición, composición de planos y propuestas estéticas en dirección de fotografía, presentadas en formato de videoensayo. La **primera parte de esta serie está siendo publicada semana a semana durante este mes, mientras que la **segunda etapa se encuentra en fase de preproducción*, proyectada para ser lanzada a finales de este año.",
      imageUrl: "/two.jpeg",
      imageAlt: "Equipo de producción",
      reverse: true
    },
    {
      title: "Capitulo 1",
      description: "Desde pequeño descubrí mi fascinación por las historias a través del cine y la televisión. Solía ver una y otra vez mis películas y series favoritas, pero más allá del entretenimiento, me intrigaba analizar lo que ocurría detrás de la primera capa del relato: las tramas que se entrelazaban, los arcos narrativos de los protagonistas y secundarios, e incluso la manera en que se construían escenarios espectaculares o, en el caso de la animación, cómo se diseñaban y daban vida a los personajes. Sin saberlo entonces, ya me estaba adentrando en el mundo de la narrativa audiovisual como un observador curioso. No fue sino hasta culminar el instituto que comprendí que ese interés podía convertirse en un camino a seguir, y decidí profundizar e investigar más sobre ello.",
      imageUrl: "/four.jpeg",
      imageAlt: "Proceso creativo"
    },
    {
      title: "Capitulo 2",
      description: "Al llegar el momento de elegir una carrera universitaria, ya tenía claro el rumbo que quería seguir. Durante mis últimos años de instituto investigué a fondo la industria audiovisual, desde los grandes referentes de Hollywood y Europa hasta los jóvenes creadores que comenzaban a abrirse camino en redes sociales, un espacio que para entonces apenas empezaba a consolidarse. Cuando llegó la hora de decidir, no tuve dudas: en 2020 inicié mis estudios de forma online, combinando la teoría con la práctica en proyectos académicos que poco a poco fueron moldeando mi narrativa como creador. Tras los primeros dos años de carrera, di mis primeros pasos en el ámbito profesional trabajando como editor freelance para distintos canales de YouTube, lo que marcó el inicio de mi recorrido laboral y sentó las bases de lo que hoy constituye mi presente como creativo.",
      imageUrl: "/mc4.jpeg",
      imageAlt: "Proceso creativo"
    },
    {
      title: "Capitulo 3",
      description: "En la actualidad he tomado una decisión que marca un punto de inflexión en mi identidad como creador: construir de manera seria y consistente un espacio en mis redes sociales que refleje de lo que soy capaz. Mi objetivo es doble: por un lado, *conectar con nuevas experiencias laborales* y, por otro, *experimentar con narrativas y estéticas innovadoras* que fortalezcan mi voz artística. Lo más importante de este proceso es la búsqueda de una mayor *profesionalización de mi arte, con la intención de consolidar un **background más completo* que represente fielmente mi identidad como creativo en un mundo donde resulta imprescindible contar con una ventana que dé visibilidad al trabajo propio.",
      imageUrl: "/three.jpeg",
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
          <p className="text-gray-400 text-center text-justify max-w-3xl mx-auto text-lg">
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
            <p className="text-gray-400 mb-6 text-justify">
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
