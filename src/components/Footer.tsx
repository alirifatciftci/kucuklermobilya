import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">TUZLA MOBİLYA</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Özel tasarım, el işçiliğiyle üretilmiş kaliteli mobilyalar.
              Tuzla, İstanbul'da hizmetinizdeyiz.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/kucuklermobilya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-amber-700 rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {[
                { name: 'Ana Sayfa', id: 'home' },
                { name: 'Hakkımızda', id: 'about' },
                { name: 'Mobilyalarımız', id: 'gallery' },
                { name: 'Neden Biz', id: 'features' },
                { name: 'İletişim', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-amber-700 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Kazım Karabekir Caddesi İstasyon Mahallesi No 60/A İstanbul/Tuzla</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <a
                  href="tel:+905377071889"
                  className="text-gray-400 hover:text-amber-700 transition-colors"
                >
                  +90 537 707 18 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <a
                  href="mailto:kucukzaferkerem@gmail.com"
                  className="text-gray-400 hover:text-amber-700 transition-colors"
                >
                  kucukzaferkerem@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Tuzla Mobilya. Tüm hakları saklıdır.
          </p>
          <p className="mt-2 text-sm font-light tracking-wide">
            designed by{' '}
            <a
              href="https://www.linkedin.com/in/alirifatciftci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold tracking-wider hover:text-amber-400 transition-colors"
            >
              ali rıfat çiftçi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
