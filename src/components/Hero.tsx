import { ArrowRight } from 'lucide-react';
import mainImage from '../assets/main.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${mainImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Özel Tasarım Mobilyalar
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-4">
          Tuzla / İstanbul
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Usta ellerde şekillenen, özenle üretilen mobilyalarla yaşam alanlarınızı
          kişiselleştirin. Her ölçüye özel, el işçiliğiyle yapılmış kaliteli
          mobilyalar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('gallery')}
            className="group bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-sm text-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-xl"
          >
            Mobilyalarımız
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-neutral-900 text-white px-8 py-4 rounded-sm text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Teklif Al
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
