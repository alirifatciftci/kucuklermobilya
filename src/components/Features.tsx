import { Ruler, Clock, ShieldCheck, MapPin, Users, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Ruler className="w-10 h-10" />,
      title: 'Özel Ölçü Üretim',
      description:
        'Mekanınıza özel ölçülerde, ihtiyaçlarınıza göre tasarlanmış mobilyalar',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Zamanında Teslimat',
      description:
        'Belirlenen sürede üretim ve montaj garantisi ile hızlı teslimat',
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'Kaliteli Malzeme',
      description:
        'Birinci sınıf ahşap ve yan malzemelerle uzun ömürlü ürünler',
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Tuzla'da Yerel Atölye",
      description:
        'İstanbul Tuzla merkezli atölyemizde üretim ve servis hizmeti',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Uzman Ekip',
      description:
        'Yılların tecrübesi ile mobilya üretiminde uzmanlaşmış ekibimiz',
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Modern Tasarım',
      description:
        'Geleneksel işçiliği modern tasarımla buluşturan özgün ürünler',
    },
  ];

  return (
    <section id="features" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Neden Biz?</h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Mobilya üretiminde fark yaratan özelliklerimiz ve avantajlarımız
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-8 rounded-sm hover:bg-neutral-700 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 text-white rounded-sm mb-6 group-hover:rotate-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-700 to-amber-800 rounded-sm p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Hayalinizdeki Mobilyayı Birlikte Tasarlayalım
          </h3>
          <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif ve danışmanlık hizmeti için bizimle iletişime geçin
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-amber-800 px-8 py-4 rounded-sm font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Hemen İletişime Geçin
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
