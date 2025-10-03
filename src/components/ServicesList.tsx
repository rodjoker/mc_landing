'use client';
import { useState } from 'react';

const ServicesList = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Video Editing",
      shortDescription: "Tienes una idea y quieres transformarla en un video que realmente conecte? Mi servicio de edición de video te ayuda a dar forma a tu contenido para que se vea profesional, atractivo y adaptado a cualquier plataforma.",
      fullDescription: "¿Tienes una idea y quieres transformarla en un video que realmente conecte? Mi servicio de edición de video te ayuda a dar forma a tu contenido para que se vea profesional, atractivo y adaptado a cualquier plataforma. Con un enfoque en narrativa, color, sonido y diseño visual, el objetivo es crear piezas que transmitan tu mensaje de manera clara y memorable, generando un impacto real en tu audiencia.",
      icon: "🎬"
    },
    {
      title: "Scriptwriting",
      shortDescription: "Toda gran producción comienza con una buena historia.",
      fullDescription: "Toda gran producción comienza con una buena historia. Mi servicio de escritura de guiones te acompaña desde la creación de la idea inicial y la redacción de la sinopsis, hasta el desarrollo de un tratamiento sólido y la escritura del guion completo. Trabajo con formatos técnicos profesionales para producciones en campo, asegurando que el guion esté listo para su rodaje, y también adapto estructuras dinámicas para contenido en redes sociales. El objetivo es darle a tu proyecto una base narrativa clara, creativa y funcional que facilite todo el proceso de producción y logre conectar con tu audiencia desde el primer momento.",
      icon: "✍️"
    },
    {
      title: "Photography",
      shortDescription: "La imagen correcta puede marcar la diferencia en cómo tu proyecto conecta con las personas.",
      fullDescription: "La imagen correcta puede marcar la diferencia en cómo tu proyecto conecta con las personas. Mi servicio de fotografía está orientado a los estilos más demandados en redes sociales, desde retratos y lifestyle hasta producto y contenido visual para marcas. Estoy preparado para colaborar contigo y adaptar mi estilo a las necesidades de tu proyecto, siempre con la meta de entregar imágenes de calidad profesional que transmitan tu mensaje y destaquen en cualquier plataforma.",
      icon: "📸"
    },
    {
      title: "Video Recording",
      shortDescription: "Tu marca tiene una historia que merece ser contada en video.",
      fullDescription: "Tu marca tiene una historia que merece ser contada en video. Con mi servicio de videografía, transformo tus ideas en contenido visual de alta calidad que refleja la esencia de tu proyecto y conecta con tu audiencia. En un entorno digital donde lo visual define el alcance, te ayudo a llevar tu identidad a la pantalla de una forma clara, creativa y entretenida, impulsando tu presencia en redes y generando resultados reales para tu negocio.",
      icon: "🎥"
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.shortDescription}</p>
            <button
              onClick={() => setSelectedService(service)}
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

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

export default ServicesList;