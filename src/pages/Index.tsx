
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, WhatsApp, Clock, Car, Tool, Spray, Key } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-garage-900 text-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center"
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
              icon={<Tool className="w-8 h-8" />}
              items={[
                "Katsastuspalvelu alk.80€",
                "OBD ja Päästömittaukset 20€",
                "Vikadiagnoosit"
              ]}
            />
            <ServiceCard
              icon={<Spray className="w-8 h-8" />}
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
                    text="045 886 3211"
                    link="tel:0458863211"
                  />
                  <ContactItem
                    icon={<WhatsApp className="w-6 h-6" />}
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
                {/* Map placeholder - replace with actual map implementation */}
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.3370840979898!2d22.6945833!3d63.6745833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46857c41c5555555%3A0x0!2zNjPCsDQwJzI4LjUiTiAyMsKwNDEnNDAuNSJF!5e0!3m2!1sen!2sfi!4v1650000000000!5m2!1sen!2sfi"
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
