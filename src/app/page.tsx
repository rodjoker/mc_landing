import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VideoCard from '@/components/VideoCard'

export default function Home() {
  const videos = [
    {
      title: "Portfolio",
      description: "Una selección de piezas audiovisuales de mi gusto personal, acompañada de algunas muestras de mi trabajo en otros formatos. Todo reunido en una cápsula de un minuto, construida a través de un montaje rítmico e improvisado.",
      videoUrl: "https://youtu.be/ycfs8_WwkIk?si=AUTnqX9ZcJNBlAqV",
      category: "Music Video"
    },
    {
      title: "Shut up, do Somenthing",
      description: "Un videoensayo que, a partir de un guion literario escrito en pocos días y un guion técnico en parte improvisado, explora el dilema de la persona como espectadora o como creadora. Una pieza que plantea la pregunta esencial: ¿serás uno más detrás de la pantalla o decidirás crear algo por ti mismo?",
      videoUrl: "https://youtu.be/BpphuoJOJwg?si=2efbcQvBZF6PGNu7",
      category: "Commercial"
    },
    {
      title: " Improv With the Timeline",
      description: "Una selección de clips aleatorios unidos por una misma idea: rendir homenaje a la capacidad creativa del ser humano en todas sus formas. Un ejercicio de montaje rítmico y estilizado, concluido en apenas unas horas.",
      videoUrl: "https://youtu.be/wUl_57PEP8E?si=uMivIqoRUUOpGzHh",
      category: "Sports"
    },
    {
      title: "Iberia Airlines",
      description: "Corporate video",
      videoUrl: "https://www.youtube.com/watch?v=your-iberia-video-id"
    },
  ];

  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="pt-20 pb-12">
        {/* Logo Grid Section */}
        <section className="container mx-auto px-4 py-12">
         
        </section>

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
