import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "Its About repetition",
      description:
        "Con un ritmo frenético que marca la línea narrativa, esta cápsula audiovisual se convierte en una carta de amor al voleibol, un deporte tan complejo como explosivo. Entre secuencias en cámara lenta y un montaje cargado de momentos flash, nace It’s About Repetition: una pieza que celebra la intensidad, la constancia y la belleza de este juego",
      videoUrl: "https://youtu.be/O-F6GjQKcQU",
      fichaTecnica: [
        { label: "Director", value: "Marco Castillo" },
        { label: "Editor", value: "Marco Castillo" },
        { label: "Duración", value: "2:35 min" },
        { label: "Formato", value: "MP4 Full HD" },
        { label: "Año", value: "2025" },
      ],
    },
    {
      title: "Improv with timeline ficha tecnica",
      description:
        "El proyecto fue concebido bajo un esquema de improvisación conceptual, donde el guion funcionó más como un compendio de ideas de referencia que como una guía cerrada de montaje, orientando el tono de la edición. La primera decisión técnica fue establecer un ritmo frenético basado en la pista musical, utilizada como columna vertebral para sincronizar la disposición de los clips en el timeline. A partir de esa base, se aplicó un trabajo de montaje no lineal que vinculaba la colocación de fragmentos con compases específicos de la musicalidad, incorporando variaciones en parámetros como escala, ángulo y posición en pantalla. Estas modificaciones permitieron transformar material preexistente —presentado inicialmente como simples muestras estáticas— en una composición dinámica, logrando una estructura lúdica que prioriza la experimentación visual sobre la exposición de una idea única, funcionando como una celebración de múltiples posibilidades narrativas.",
      videoUrl: "https://youtu.be/wUl_57PEP8E?si=ecuyCWj0teg-WPbk",
      fichaTecnica: [
        { label: "Director", value: "Marco Castillo" },
        { label: "Editor", value: "Marco Castillo" },
        { label: "Duración", value: "2:35 min" },
        { label: "Formato", value: "MP4 Full HD" },
        { label: "Año", value: "2025" },
      ],
    },
    {
      title: "TALENTO",
      description:
        "Mi objetivo fue construir una breve narrativa motivacional sobre la obsesión necesaria cuando queremos alcanzar una meta, utilizando material de b-roll y fragmentos de audio de proyectos cinematográficos relacionados con el tema.",
      videoUrl: "https://youtu.be/XiDVZveAkG8?si=lbTWl-3hlo2PT1Ly",
      fichaTecnica: [
        { label: "Director", value: "Marco Castillo" },
        { label: "Editor", value: "Marco Castillo" },
        { label: "Duración", value: "2:35 min" },
        { label: "Formato", value: "MP4 Full HD" },
        { label: "Año", value: "2025" },
      ],
    },
    {
      title: "find the opportunity",
      description:
        "Este video fue concebido como un short film que busca transformar una acción cotidiana y repetitiva —la postulación a empleos a través de portales online— en un relato audiovisual con mayor carga expresiva. Para ello se diseñó una estructura basada en planos cerrados y detallados que fragmentan cada acción realizada en el ordenador, generando un lenguaje narrativo construido a partir de microgestos y rutinas diarias. La decisión de representar al personaje principal de forma anónima, sin mostrar el rostro, responde a la intención de favorecer la identificación del espectador con la situación representada. Desde el punto de vista fotográfico, la reiteración de primeros planos refuerza el carácter íntimo y personal de la experiencia, mientras que la repetición visual de la acción transmite la monotonía inherente al proceso, construyendo así una narrativa compacta y reconocible para quienes han atravesado circunstancias similares.",
      videoUrl: "https://youtu.be/1BtfbbPWUtA?si=HbTSe27iG5TwhwOW",
      fichaTecnica: [
        { label: "Director", value: "Marco Castillo" },
        { label: "Editor", value: "Marco Castillo" },
        { label: "Duración", value: "2:35 min" },
        { label: "Formato", value: "MP4 Full HD" },
        { label: "Año", value: "2025" },
      ],
    },
    {
      title: "Find your voice ",
      description:
        "Find Your Voice fue desarrollado como un experimento fotográfico con una línea narrativa definida, inspirada en un guion que abordaba la búsqueda de la voz propia en el proceso creativo. La propuesta visual se construyó mediante planos estáticos de carácter explicativo, acompañados por sutiles variaciones fotográficas como desenfoques radiales aplicados para dirigir la atención del espectador hacia el narrador. Estos recursos se complementaron con la superposición de b-rolls tratados con distintos modos de fusión, aportando una estética singular acorde al concepto abstracto del video. En la secuencia final, la narración en off se integró con composiciones fundamentadas en la regla de los tercios, el blocking de los personajes dentro del encuadre y la aplicación de conceptos cinematográficos como el frame within a frame y el contraste de luces y sombras en interacción con el sujeto. En conjunto, la pieza mantiene la experimentación artística como eje rector, explorando cómo los recursos formales pueden sostener y potenciar el discurso narrativo.",
      videoUrl: "https://youtu.be/lWg1f5OioQs?si=d6cG1toEqRkr5ctt",
      fichaTecnica: [
        { label: "Director", value: "Marco Castillo" },
        { label: "Editor", value: "Marco Castillo" },
        { label: "Duración", value: "2:35 min" },
        { label: "Formato", value: "MP4 Full HD" },
        { label: "Año", value: "2025" },
      ],
    },
    {
      title: "Fiesta de San Lorenzo ",
      description:
        "Una cobertura especial para redes sobre las Fiestas de San Lorenzo, una celebración llena de color, tradición y calidez humana. Este pequeño documental busca compartir la emoción y la creatividad con la que los habitantes de Ibahernando, España, preparan su festividad, decorando sus hogares y calles con arte y pasión para mantener viva su identidad cultural.",
      videoUrl: "https://youtu.be/0thaRlYkoPM",
      fichaTecnica: [
        { label: "Director", value: "Marco Castillo" },
        { label: "Editor", value: "Marco Castillo" },
        { label: "Duración", value: "1:14 min" },
        { label: "Formato", value: "MP4 Full HD" },
        { label: "Año", value: "2025" },
      ],
    },
    {
      title: "Portfolio",
      description:
        "Una selección de piezas audiovisuales de mi gusto personal, acompañada de algunas muestras de mi trabajo en otros formatos. Todo reunido en una cápsula de un minuto, construida a través de un montaje rítmico e improvisado.",
      videoUrl: "https://youtu.be/ycfs8_WwkIk?si=AUTnqX9ZcJNBlAqV",
      fichaTecnica: [
        { label: "Director", value: "Marco Castillo" },
        { label: "Editor", value: "Marco Castillo" },
        { label: "Duración", value: "1:14 min" },
        { label: "Formato", value: "MP4 Full HD" },
        { label: "Año", value: "2025" },
      ],
    },
    {
      title: "Delirios de poeta",
      description:
        "Una mirada abstracta cobra vida en este video de animación, creado para dar forma visual a las palabras del artista Hakayzen, un talentoso rapero con una propuesta única. Tuve el placer de colaborar en este proyecto como director del video animado, donde a través de más de 150 fotografías y varias semanas de edición, logramos construir un universo visual que refleja ese mundo abstracto y emocional que la canción busca transmitir.",
      videoUrl: "https://youtu.be/8-UZJIyPZd0",
      fichaTecnica: [
        { label: "Director", value: "Marco Castillo" },
        { label: "Editor", value: "Marco Castillo" },
        { label: "Duración", value: "3:11 min" },
        { label: "Formato", value: "MP4 Full HD" },
        { label: "Año", value: "2024" },
      ],
    },
      {
      title: "Some of my work",
      description:
        "Este documental de larga duración explora una serie de estructuras y lugares alrededor del mundo que sufrieron las consecuencias de una mala ingeniería durante su construcción, lo que llevó a que algunas colapsaran con el tiempo. La pieza fue desarrollada para un canal especializado en temas de arquitectura, historia y desastres estructurales, donde el dinamismo narrativo y la construcción de una narrativa visual e ilustrativa fueron las principales prioridades para lograr un video atractivo, informativo y visualmente potente.",
      videoUrl: "https://youtu.be/hWm3_aWRTBo",
      fichaTecnica: [
        { label: "Director", value: "Marco Castillo" },
        { label: "Editor", value: "Marco Castillo" },
        { label: "Duración", value: "9:55 min" },
        { label: "Formato", value: "MP4 Full HD" },
        { label: "Año", value: "2023" },
      ],
    },

  ];

  return (
    <>
      <Header />
    <main className="bg-black min-h-screen mt-20">
      <div className="pt-20 pb-12">
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                description={project.description}
                videoUrl={project.videoUrl}
                fichaTecnica={project.fichaTecnica}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
    </>
  );
}
