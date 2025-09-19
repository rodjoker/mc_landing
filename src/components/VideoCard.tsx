interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
  category?: string;
}

const VideoCard = ({ title, description, videoUrl, category }: VideoCardProps) => {
  // Función para convertir URL de YouTube en ID de video
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYoutubeId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&modestbranding=1`;

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative">
        {/* Video Container */}
        <div className="relative aspect-video overflow-hidden">
          <iframe
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
        </div>

        {/* Overlay with play icon on hover */}
        <a 
          href={videoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="w-16 h-16 rounded-full bg-white bg-opacity-0 group-hover:bg-opacity-90 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
            <svg 
              className="w-8 h-8 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </a>
      </div>

      {/* Content */}
      <div className="p-6">
        {category && (
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-zinc-700 rounded-full mb-3">
            {category}
          </span>
        )}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed text-justify">
          {description}
        </p>
        
        {/* Call to action */}
        <div className="mt-4 flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
          <span>Ver video completo</span>
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
