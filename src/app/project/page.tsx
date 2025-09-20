import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "Proyecto Destacado",
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
      title: "Proyecto Destacado",
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
      title: "Proyecto Destacado",
      description:
        "Una muestra de nuestro trabajo más reciente, donde la creatividad y la técnica se unen para crear experiencias visuales únicas.",
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
      title: "Proyecto Destacado",
      description:
        "Una muestra de nuestro trabajo más reciente, donde la creatividad y la técnica se unen para crear experiencias visuales únicas.",
      videoUrl: "https://youtu.be/lWg1f5OioQs?si=d6cG1toEqRkr5ctt",
      fichaTecnica: [
        { label: "Director", value: "Marco Castillo" },
        { label: "Editor", value: "Marco Castillo" },
        { label: "Duración", value: "2:35 min" },
        { label: "Formato", value: "MP4 Full HD" },
        { label: "Año", value: "2025" },
      ],
    },
    // Puedes agregar más proyectos aquí
  ];

  return (
    <main className="bg-black min-h-screen">
      <Header />
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
  );
}
