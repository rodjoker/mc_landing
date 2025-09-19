import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "Proyecto Destacado",
      description:
        "Una muestra de nuestro trabajo más reciente, donde la creatividad y la técnica se unen para crear experiencias visuales únicas.",
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
        "Una muestra de nuestro trabajo más reciente, donde la creatividad y la técnica se unen para crear experiencias visuales únicas.",
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
