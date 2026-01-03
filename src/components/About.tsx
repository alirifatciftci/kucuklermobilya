import { Hammer, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'El İşçiliği',
      description: 'Her ürün, usta ellerde özenle işlenir',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Kaliteli Malzeme',
      description: 'Birinci sınıf ahşap ve malzemeler',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Özel Tasarım',
      description: 'İhtiyaçlarınıza özel üretim',
    },
  ];

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Hakkımızda
            </h2>
            <div className="w-20 h-1 bg-amber-700 mb-8"></div>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Tuzla'da bulunan atölyemizde, yılların deneyimi ve tutkusuyla
              mobilya üretimi yapıyoruz. Her bir ürünümüz, sizin ihtiyaçlarınıza
              ve zevkinize göre özel olarak tasarlanır ve üretilir.
            </p>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Kaliteden ödün vermeden, en iyi ahşap malzemeleri kullanarak,
              eviniz ve iş yeriniz için benzersiz mobilyalar yaratıyoruz.
              Geleneksel el işçiliğini modern tasarımla birleştirerek,
              nesiller boyu kullanabileceğiniz dayanıklı ürünler sunuyoruz.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Müşteri memnuniyeti bizim için en önemli değerdir. Projelerinizi
              hayata geçirmek için sizinle birlikte çalışıyor, her aşamada
              yanınızda oluyoruz.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6045275/pexels-photo-6045275.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mobilya Atölyesi"
              className="rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-700/10 -z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 text-white rounded-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
