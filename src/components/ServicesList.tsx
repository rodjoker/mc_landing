const ServicesList = () => {
  const services = [
    {
      title: "Video Editing",
      description: "Professional video editing services to bring your vision to life. We handle cutting, transitions, effects, color grading, and sound mixing to create engaging content.",
      icon: "🎬"
    },
    {
      title: "Scriptwriting",
      description: "Expert scriptwriting services to help you tell your story effectively. From concept development to final draft, we ensure your message resonates with your audience.",
      icon: "✍️"
    },
    {
      title: "Photography",
      description: "High-quality photography services that capture the perfect moments. We specialize in various styles and techniques to meet your specific needs.",
      icon: "📸"
    },
    {
      title: "Video Recording",
      description: "Professional video recording services using state-of-the-art equipment. We ensure high-quality footage that meets your project requirements.",
      icon: "🎥"
    },
    {
      title: "YouTube Channel Consulting",
      description: "Strategic consulting for your YouTube channel. We help optimize your content, improve your aesthetics, and develop your channel's unique style.",
      icon: "🎯"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index}
          className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors duration-300"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-gray-400">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;