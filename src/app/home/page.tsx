'use client';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import VideoCard from '../../components/VideoCard'
import InfoCard from '../../components/InfoCard'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Service {
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
}

// Service Card Component
const ServiceCard = ({ service, index }: { service: Service, index: number }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px 0px"
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -100 : 100,
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      scale: 1
    }
  };

  return (
    <>
      <motion.div 
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
          ease: "easeOut"
        }}
        className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-4">{service.shortDescription}</p>
        <button
          onClick={() => setSelectedService(service)}
          className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
        >
          Leer más
        </button>
      </motion.div>

      {selectedService && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-zinc-900 p-6 rounded-lg max-w-lg w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-3xl mr-2">{selectedService.icon}</span>
                <h3 className="text-xl font-bold text-white inline-block">{selectedService.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-400">{selectedService.fullDescription}</p>
          </div>
        </div>
      )}
    </>
  );
};

// Services Grid Component
const ServiceCards = () => {
  const services = [
    {
      title: "Video Editing",
      shortDescription: "Tienes una idea y quieres transformarla en un video que realmente conecte? Mi servicio de edición de video te ayuda a dar forma a tu contenido para que se vea profesional, atractivo y adaptado a cualquier plataforma.",
      fullDescription: "¿Tienes una idea y quieres transformarla en un video que realmente conecte? Mi servicio de edición de video te ayuda a dar forma a tu contenido para que se vea profesional, atractivo y adaptado a cualquier plataforma. Con un enfoque en narrativa, color, sonido y diseño visual, el objetivo es crear piezas que transmitan tu mensaje de manera clara y memorable, generando un impacto real en tu audiencia.",
      icon: "🎬"
    },
    {
      title: "Video Recording",
      shortDescription: "Tu marca tiene una historia que merece ser contada en video.",
      fullDescription: "Tu marca tiene una historia que merece ser contada en video. Con mi servicio de videografía, transformo tus ideas en contenido visual de alta calidad que refleja la esencia de tu proyecto y conecta con tu audiencia. En un entorno digital donde lo visual define el alcance, te ayudo a llevar tu identidad a la pantalla de una forma clara, creativa y entretenida, impulsando tu presencia en redes y generando resultados reales para tu negocio.",
      icon: "🎥"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
};

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

        {/* Services Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Servicios Destacados</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transformo tus ideas en contenido visual profesional que conecta con tu audiencia
            </p>
          </div>
          <ServiceCards />
        </section>
      </div>
      <Footer />
    </main>
  );
}
