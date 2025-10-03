import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ServicesList from '../../components/ServicesList';

export default function ServicesPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen pt-20 bg-black mt-8">
      <div className="container mx-auto px-4 py-16">
        <ServicesList />
      </div>
    </div>
    <Footer/>
    </>
  );
}