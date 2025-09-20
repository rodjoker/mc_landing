'use client';
import React, { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  videoUrl: string;
  fichaTecnica: { label: string; value: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  videoUrl,
  fichaTecnica,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shortDescription = description.length > 150 
    ? description.slice(0, 150) + '...' 
    : description;

  // Extraer ID de YouTube
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYoutubeId(videoUrl);
  const isYouTube = !!videoId;
  const embedUrl = isYouTube
    ? `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&loop=0&playlist=${videoId}&showinfo=0&rel=0&modestbranding=1`
    : videoUrl;

  return (
    <>
      <div className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Video */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          {isYouTube ? (
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video controls className="w-full h-full object-cover">
              <source src={videoUrl} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          )}
        </div>

        {/* Texto */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-300 text-justify mb-4">{shortDescription}</p>
            {description.length > 150 && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm mb-4"
              >
                Read More
              </button>
            )}
            <div className="bg-zinc-800 rounded-md p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Ficha Técnica</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                {fichaTecnica.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-medium text-white">{item.label}:</span> {item.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-zinc-900 p-6 rounded-lg max-w-3xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-300 text-justify mb-6">{description}</p>
            <div className="bg-zinc-800 rounded-md p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Ficha Técnica</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                {fichaTecnica.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-medium text-white">{item.label}:</span> {item.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
