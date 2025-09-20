'use client';
import { useState } from 'react';

const ServicesList = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Video Editing",
      shortDescription: "Professional video editing services to bring your vision to life.",
      fullDescription: "Professional video editing services to bring your vision to life. We handle cutting, transitions, effects, color grading, and sound mixing to create engaging content. Our team uses industry-leading software and techniques to ensure your videos stand out and captivate your audience.",
      icon: "🎬"
    },
    {
      title: "Scriptwriting",
      shortDescription: "Expert scriptwriting services to help you tell your story effectively.",
      fullDescription: "Expert scriptwriting services to help you tell your story effectively. From concept development to final draft, we ensure your message resonates with your audience. We specialize in creating compelling narratives, engaging dialogues, and structured storylines that keep viewers hooked.",
      icon: "✍️"
    },
    {
      title: "Photography",
      shortDescription: "High-quality photography services that capture the perfect moments.",
      fullDescription: "High-quality photography services that capture the perfect moments. We specialize in various styles and techniques to meet your specific needs. From event photography to professional portraits and commercial shoots, we deliver stunning images that tell your story.",
      icon: "📸"
    },
    {
      title: "Video Recording",
      shortDescription: "Professional video recording services using state-of-the-art equipment.",
      fullDescription: "Professional video recording services using state-of-the-art equipment. We ensure high-quality footage that meets your project requirements. Our team is experienced in different shooting environments and can handle everything from intimate interviews to large-scale productions.",
      icon: "🎥"
    },
    {
      title: "YouTube Channel Consulting",
      shortDescription: "Strategic consulting for your YouTube channel growth and optimization.",
      fullDescription: "Strategic consulting for your YouTube channel. We help optimize your content, improve your aesthetics, and develop your channel's unique style. Our expertise includes content strategy, SEO optimization, thumbnail design, and audience engagement techniques to help your channel grow.",
      icon: "🎯"
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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