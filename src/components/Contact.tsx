import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Form gönderildi! (Bu bir demo mesajıdır)');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/905377071889', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            İletişim
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Projeleriniz için bizimle iletişime geçin. Size en kısa sürede geri
            dönüş yapalım
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-sm shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                İletişim Bilgileri
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-700 text-white rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Adres</h4>
                    <p className="text-neutral-600">
                      Kazım Karabekir Caddesi İstasyon Mahallesi
                      <br />
                      No 60/A İstanbul/Tuzla
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-700 text-white rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Telefon</h4>
                    <p className="text-neutral-600">+90 537 707 18 89</p>
                    <p className="text-neutral-600">+90 532 746 37 31</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-700 text-white rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">E-posta</h4>
                    <p className="text-neutral-600">kucukzaferkerem@gmail.com</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-sm font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:scale-105 transform"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp ile İletişime Geç
              </button>
            </div>

            <div className="bg-white p-4 rounded-sm shadow-lg h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48377.844537388924!2d29.273903999999998!3d40.8223857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6ee2c3dd5dd%3A0xdd6ad984a011e053!2sTuzla%2C%20Istanbul!5e0!3m2!1sen!2str!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tuzla Harita"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Bize Mesaj Gönderin
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white px-6 py-4 rounded-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Mesajı Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
