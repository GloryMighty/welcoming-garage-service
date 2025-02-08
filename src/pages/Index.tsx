
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageSquare, Clock, Car, Wrench, PaintBucket, Key } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState('fi');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-garage-900 text-white">
      {/* Language Switcher */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-garage-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2 flex justify-end gap-2">
          <button
            onClick={() => setLanguage('fi')}
            className={`px-3 py-1 rounded ${language === 'fi' ? 'bg-white text-garage-900' : 'bg-garage-800 text-white'}`}
          >
            Suomi
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded ${language === 'en' ? 'bg-white text-garage-900' : 'bg-garage-800 text-white'}`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('ar')}
            className={`px-3 py-1 rounded ${language === 'ar' ? 'bg-white text-garage-900' : 'bg-garage-800 text-white'}`}
          >
            العربية
          </button>
          <button
            onClick={() => setLanguage('sv')}
            className={`px-3 py-1 rounded ${language === 'sv' ? 'bg-white text-garage-900' : 'bg-garage-800 text-white'}`}
          >
            Svenska
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="relative h-screen bg-[url('https://lirp.cdn-website.com/7b51853d/dms3rep/multi/opt/thumb_1676498956blog-23-02-16-1920w.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm">
          <div className="container mx-auto px-4 pt-20">
            <div className={`max-w-3xl mx-auto text-center space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tervetuloa Autokorjaamo Autoparsinnan Sivustolle!
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Periaatteemme on tarjota huolto- ja korjauspalveluita mahdollisimman edullisesti. 
                Tavoitat meidät joko Whatsapp viestillä tai soittamalla.
              </p>
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-md rounded-lg inline-block">
                <p className="text-lg">
                  Korjaamomme on auki:
                  <br />
                  Ma-To 8:30 - 16:00
                  <br />
                  Perjantaisin 8:30 - 12:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-garage-900 to-garage-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Palveluihimme sisältyy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Car className="w-8 h-8" />}
              items={[
                "Vuosihuollot alk. 120€",
                "Öljynvaihdot alk. 59€",
                "Määräaikaishuollot"
              ]}
            />
            <ServiceCard
              icon={<Wrench className="w-8 h-8" />}
              items={[
                "Katsastuspalvelu alk.80€",
                "OBD ja Päästömittaukset 20€",
                "Vikadiagnoosit"
              ]}
            />
            <ServiceCard
              icon={<PaintBucket className="w-8 h-8" />}
              items={[
                "Rengastyöt",
                "Ilmastointihuollot alkaen 49€",
                "Sisustapesut ja Otsonointi"
              ]}
            />
            <ServiceCard
              icon={<Key className="w-8 h-8" />}
              items={[
                "Avainten Kopionti",
                "Ruostekorjaukset"
              ]}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300">
              Ja Monia Muita Palveluita! Poislukien autojen maalaukset, kysy lisää!
            </p>
            <p className="mt-4 text-gray-300">
              Maksuvaihtoehtoina ovat Pankki- ja luottokortit sekä Klarna Lasku
              <br />
              Tuntiveloituksemme on vain 59€/h , pakettiautot 69€/h
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-garage-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Yhteystiedot</h3>
                <div className="space-y-4">
                  <ContactItem
                    icon={<MapPin className="w-6 h-6" />}
                    text="Tehtaankatu 13, Pietarsaari"
                  />
                  <ContactItem
                    icon={<Phone className="w-6 h-6" />}
                    text="+35845 886 3211"
                    link="tel:+385458863211"
                  />
                  <ContactItem
                    icon={<MessageSquare className="w-6 h-6" />}
                    text="WhatsApp"
                    link="https://wa.me/358458863211"
                  />
                  <ContactItem
                    icon={<Mail className="w-6 h-6" />}
                    text="huolto@autoparsinta.fi"
                  />
                </div>
              </div>
              <div className="h-[300px] bg-garage-700 rounded-lg">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.3370840979898!2d22.694583!3d63.674583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46857c419d9ea3fd%3A0xdf5ec5720816ed33!2sFabriksgatan%2013%2C%2068600%20Jakobstad!5e0!3m2!1sen!2sfi!4v1710870793047!5m2!1sen!2sfi"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, items }: { icon: React.ReactNode; items: string[] }) => (
  <Card className="p-6 bg-white/5 backdrop-blur-sm border-0 hover:bg-white/10 transition-all duration-300">
    <div className="flex flex-col items-center">
      <div className="mb-4 text-garage-200">
        {icon}
      </div>
      <ul className="space-y-2 text-center">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300">{item}</li>
        ))}
      </ul>
    </div>
  </Card>
);

const ContactItem = ({ icon, text, link }: { icon: React.ReactNode; text: string; link?: string }) => (
  <div className="flex items-center space-x-3">
    <div className="text-garage-200">{icon}</div>
    {link ? (
      <a href={link} className="text-gray-300 hover:text-white transition-colors duration-200">
        {text}
      </a>
    ) : (
      <span className="text-gray-300">{text}</span>
    )}
  </div>
);

export default Index;
