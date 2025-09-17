interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

const InfoCard = ({ title, description, imageUrl, imageAlt, reverse = false }: InfoCardProps) => {
  return (
    <div className={`bg-zinc-900 rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl`}>
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {/* Image Container */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
