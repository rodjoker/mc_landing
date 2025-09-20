import Header from '../../components/Header';
import ServicesList from '../../components/ServicesList';

export default function ServicesPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen pt-20 bg-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Our Services
        </h1>
        <ServicesList />
      </div>
    </div>
    </>
  );
}