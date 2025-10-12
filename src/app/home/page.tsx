import Header from '../../components/Header'
import Footer from '../../components/Footer'
import VideoCard from '../../components/VideoCard'
import InfoCard from '../../components/InfoCard'

export default function Home() {
  const videos = [
    {
      title: "Delirios de Poeta",
      description: "Una mirada abstracta cobra vida en este video de animación, creado para dar forma visual a las palabras del artista Hakayzen, un talentoso rapero con una propuesta única. Tuve el placer de colaborar en este proyecto como director del video animado, donde a través de más de 150 fotografías y varias semanas de edición, logramos construir un universo visual que refleja ese mundo abstracto y emocional que la canción busca transmitir.",
      videoUrl: "https://youtu.be/8-UZJIyPZd0",
      category: "Video Edition"
    },
    {
      title: "Shut up, do Somenthing",
      description: "Un videoensayo que, a partir de un guion literario escrito en pocos días y un guion técnico en parte improvisado, explora el dilema de la persona como espectadora o como creadora. Una pieza que plantea la pregunta esencial: ¿serás uno más detrás de la pantalla o decidirás crear algo por ti mismo?",
      videoUrl: "https://youtu.be/BpphuoJOJwg?si=2efbcQvBZF6PGNu7",
      category: "Video Edition"
    },
    {
      title: " Improv With the Timeline",
      description: "Una selección de clips aleatorios unidos por una misma idea: rendir homenaje a la capacidad creativa del ser humano en todas sus formas. Un ejercicio de montaje rítmico y estilizado, concluido en apenas unas horas.",
      videoUrl: "https://youtu.be/wUl_57PEP8E?si=uMivIqoRUUOpGzHh",
      category: "Video Edition"
    },
    {
      title: "Finde the Opportunity",
      description: "Después de una tarde de postulaciones y de recibir solo negativas como respuesta, decidí crear una pequeña cápsula narrativa con la intención de compartir un sentimiento común a quienes atraviesan la constante lucha de la búsqueda de empleo digital a través de la red.",
      videoUrl: "https://youtu.be/1BtfbbPWUtA?si=d3eQAOyNbmKRvdn5",
      category: "Video Edition"
    },
  ];

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="pt-20 pb-12">
        {/* About Me Summary Section */}
        <section className="container mx-auto px-4 py-12 mt-16">
          <InfoCard
            title="Productor Audiovisual"
            description="Como productor audiovisual, conceptualizo, guionizo, dirijo y edito proyectos que abarcan desde videoclips y cortometrajes hasta contenido para redes sociales, tutoriales y documentales. He trabajado como guionista en proyectos musicales independientes y en la creación de contenido de valor para plataformas como YouTube y TikTok, donde desarrollo ideas en colaboración con el cliente, estructuro guiones tanto narrativos como técnicos y coordino la producción audiovisual. En la etapa de postproducción, edito utilizando herramientas de la suite de Adobe (Premiere Pro, After Effects, Audition), trato el color con DaVinci Resolve, y tengo conocimientos en diseño y animación de motion graphics, los cuales sigo estudiando y perfeccionando como parte de mi desarrollo profesional. Además, realizo grabaciones de voz en español e inglés, aplicando técnicas de optimización de audio y explorando el uso de inteligencia artificial para mejorar sonido, generar imágenes y aumentar la productividad en cada entrega."
            imageUrl="/one.jpeg"
            imageAlt="Director trabajando"
          />
        </section>

        {/* Videos Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <VideoCard
                key={index}
                index={index}
                title={video.title}
                description={video.description}
                videoUrl={video.videoUrl}
                category={video.category}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
