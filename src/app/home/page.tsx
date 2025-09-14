import Header from '../../components/Header'
import Footer from '../../components/Footer'
import VideoCard from '../../components/VideoCard'

export default function Home() {
  const videos = [
    {
      title: "Portfolio",
      description: "Una selección de piezas audiovisuales de mi gusto personal, acompañada de algunas muestras de mi trabajo en otros formatos. Todo reunido en una cápsula de un minuto, construida a través de un montaje rítmico e improvisado.",
      videoUrl: "https://youtu.be/ycfs8_WwkIk?si=AUTnqX9ZcJNBlAqV",
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

        {/* Videos Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <VideoCard
                key={index}
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
