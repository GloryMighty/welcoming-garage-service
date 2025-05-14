import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageSquare, Clock, Car, Wrench, CircleStop, Key } from "lucide-react";

const translations = {
  fi: {
    copyright: " 2025 MZ Autoparsinta Oy, kaikki oikeudet pidätetään",
    title: "Tervetuloa Autokorjaamo Autoparsinnan Sivustolle!",
    principle: "Periaatteemme on tarjota huolto- ja korjauspalveluita mahdollisimman edullisesti. Tavoitat meidät joko Whatsapp viestillä tai soittamalla:",
    openingTitle: "Korjaamomme on auki:",
    openingHours: "Ma-To 8:30 - 16:00",
    friday: "Perjantaisin 8:30 - 12:30",
    servicesTitle: "Palveluihimme sisältyy",
    moreServices: "Ja Monia Muita Palveluita! Poislukien autojen maalaukset, kysy lisää!",
    payment: "Maksuvaihtoehtoina ovat Pankki- ja luottokortit sekä Klarna Lasku",
    hourlyRate: "Tuntiveloituksemme on vain 69€/h , pakettiautot 79€/h",
    contact: "Yhteystiedot",
    services: {
      maintenance: [
        "Vuosihuollot alk. 120€",
        "Öljynvaihdot alk. 55€",
        "Määräaikaishuollot"
      ],
      inspection: [
        "Katsastuspalvelu alk.85€",
        "OBD ja Päästömittaukset 20€",
        "Vikadiagnoosit"
      ],
      cleaning: [
        "Rengastyöt",
        "Ilmastointihuollot alkaen 49€",
        "Sisustapesut ja Otsonointi"
      ],
      other: [
        "Avainten Kopionti",
        "Ruostekorjaukset",
        "Vetokoukkujen Asennukset"
      ]
    }
  },
  en: {
    copyright: " 2025 MZ Autoparsinta Oy, all rights reserved",
    title: "Welcome to Autoparsinta Car Service!",
    principle: "Our principle is to offer maintenance and repair services at the most affordable prices possible. You can reach us either via WhatsApp or by calling:",
    openingTitle: "Our workshop is open:",
    openingHours: "Mon-Thu 8:30 - 16:00",
    friday: "Fridays 8:30 - 12:30",
    servicesTitle: "Our Services Include",
    moreServices: "And Many Other Services! Excluding car painting, ask for more!",
    payment: "Payment options include Bank and credit cards and Klarna Invoice",
    hourlyRate: "Our hourly rate is only 69€/h, vans 79€/h",
    contact: "Contact Information",
    services: {
      maintenance: [
        "Annual maintenance from 120€",
        "Oil changes from 55€",
        "Regular maintenance"
      ],
      inspection: [
        "Inspection service from 85€",
        "OBD and Emission tests 20€",
        "Fault diagnostics"
      ],
      cleaning: [
        "Tire services",
        "AC maintenance from 49€",
        "Interior cleaning and Ozonation"
      ],
      other: [
        "Key copying",
        "Rust repairs",
        "Towbar installations"
      ]
    }
  },
  ar: {
    copyright: " ٢٠٢٥ شركة إم زد أوتوبارسينتا، جميع الحقوق محفوظة",
    title: "!مرحباً بكم في ورشة أوتوبارسينتا للسيارات",
    principle: "مبدأنا هو تقديم خدمات الصيانة والإصلاح بأسعار معقولة قدر الإمكان. يمكنك الوصول إلينا عبر واتساب أو بالاتصال",
    openingTitle: ":ساعات العمل",
    openingHours: "الإثنين-الخميس ٨:٣٠ - ١٥:٠٠",
    friday: "الجمعة ٨:٣٠ - ١٢:٣٠",
    servicesTitle: "خدماتنا تشمل",
    moreServices: "!والعديد من الخدمات الأخرى! باستثناء طلاء السيارات، اسأل للمزيد",
    payment: "خيارات الدفع تشمل البطاقات المصرفية والائتمانية وفاتورة كلارنا",
    hourlyRate: "سعرنا بالساعة ٦٩ يورو فقط، الشاحنات ٧٩ يورو",
    contact: "معلومات الاتصال",
    services: {
      maintenance: [
        "الصيانة السنوية من ١٢٠ يورو",
        "تغيير الزيت من ٥٥ يورو",
        "الصيانة الدورية"
      ],
      inspection: [
        "خدمة الفحص من ٨٥ يورو",
        "فحص OBD وانبعاثات ٢٠ يورو",
        "تشخيص الأعطال"
      ],
      cleaning: [
        "خدمات الإطارات",
        "صيانة التكييف من ٤٩ يورو",
        "تنظيف داخلي وتعقيم بالأوزون"
      ],
      other: [
        "نسخ المفاتيح",
        "إصلاح الصدأ",
        "تركيب شنكل"
      ]
    }
  },
  sv: {
    copyright: " 2025 MZ Autoparsinta Oy, alla rättigheter förbehållna",
    title: "Välkommen till Autoparsinta Bilservice!",
    principle: "Vår princip är att erbjuda underhålls- och reparationstjänster till mest förmånliga priser. Du når oss antingen via WhatsApp eller genom att ringa:",
    openingTitle: "Vår verkstad är öppen:",
    openingHours: "Mån-Tors 8:30 - 16:00",
    friday: "Fredagar 8:30 - 12:30",
    servicesTitle: "Våra tjänster inkluderar",
    moreServices: "Och många andra tjänster! Exklusive bilmåleri, fråga mer!",
    payment: "Betalningsalternativ inkluderar Bank- och kreditkort samt Klarna Faktura",
    hourlyRate: "Vårt timpris är endast 69€/h, paketbilar 79€/h",
    contact: "Kontaktinformation",
    services: {
      maintenance: [
        "Årsservice från 120€",
        "Oljebyte från 55€",
        "Regelbundet underhåll"
      ],
      inspection: [
        "Besiktningstjänst från 85€",
        "OBD och avgastester 20€",
        "Feldiagnostik"
      ],
      cleaning: [
        "Däckservice",
        "AC-service från 49€",
        "Invändig biltvätt och ozonering"
      ],
      other: [
        "Nyckelkopiering",
        "Rostreparation",
        "Dragkrokinstallationer"
      ]
    }
  }
};

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState('fi');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const t = translations[language];

  return (
    <div className="min-h-screen min-w-screen bg-garage-900 text-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-garage-900/80 backdrop-blur-sm">
        <div className="w-full max-w-[100vw] px-2 sm:px-4 py-1 sm:py-2">
          <div className="flex justify-center space-x-1 sm:space-x-2 w-full">
            <button
              onClick={() => setLanguage('fi')}
              className={`flex-1 min-w-0 px-2 py-1 text-xs sm:text-sm rounded overflow-hidden whitespace-nowrap ${language === 'fi' ? 'bg-white text-garage-900' : 'bg-garage-800 text-white'}`}
            >
              Suomi
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`flex-1 min-w-0 px-2 py-1 text-xs sm:text-sm rounded overflow-hidden whitespace-nowrap ${language === 'en' ? 'bg-white text-garage-900' : 'bg-garage-800 text-white'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`flex-1 min-w-0 px-2 py-1 text-xs sm:text-sm rounded overflow-hidden whitespace-nowrap ${language === 'ar' ? 'bg-white text-garage-900' : 'bg-garage-800 text-white'}`}
            >
              العربية
            </button>
            <button
              onClick={() => setLanguage('sv')}
              className={`flex-1 min-w-0 px-2 py-1 text-xs sm:text-sm rounded overflow-hidden whitespace-nowrap ${language === 'sv' ? 'bg-white text-garage-900' : 'bg-garage-800 text-white'}`}
            >
              Svenska
            </button>
          </div>
        </div>
      </div>

      <div 
        className="relative h-screen bg-[url('https://autoparsinta.fi/Backgnd.png')] bg-cover bg-center rounded-b-[50px]"
        style={{
          backgroundAttachment: 'fixed',
          perspective: '1px'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-b-[50px] overflow-hidden">
          {/* Animated Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Oil Drop Effects */}
            {[...Array(15)].map((_, i) => (
              <div 
                key={`oil-drop-${i}`}
                className="absolute bg-gray-700 rounded-full w-2 h-2 animate-oil-drop"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 pt-20 relative z-10">
            <div className={`max-w-3xl mx-auto text-center space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {t.principle}
                <br />
                045 886 3211
              </p>
              <div className="mt-8 p-4 bg-white/10 backdrop-blur-md rounded-lg inline-block">
                <p className="text-lg">
                  {t.openingTitle}
                  <br />
                  {t.openingHours}
                  <br />
                  {t.friday}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-garage-900 to-garage-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Wrench className="w-8 h-8" />}
              items={t.services.maintenance}
              className="transform transition-all duration-500 hover:scale-105"
              style={{
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                opacity: isVisible ? 1 : 0,
                transitionDelay: '100ms'
              }}
            />
            <ServiceCard
              icon={<Car className="w-8 h-8" />}
              items={t.services.inspection}
              className="transform transition-all duration-500 hover:scale-105"
              style={{
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                opacity: isVisible ? 1 : 0,
                transitionDelay: '200ms'
              }}
            />
            <ServiceCard
              icon={<CircleStop className="w-8 h-8" />}
              items={t.services.cleaning}
              className="transform transition-all duration-500 hover:scale-105"
              style={{
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                opacity: isVisible ? 1 : 0,
                transitionDelay: '300ms'
              }}
            />
            <ServiceCard
              icon={<Key className="w-8 h-8" />}
              items={t.services.other}
              className="transform transition-all duration-500 hover:scale-105"
              style={{
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                opacity: isVisible ? 1 : 0,
                transitionDelay: '400ms'
              }}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300">
              {t.moreServices}
            </p>
            <p className="mt-4 text-gray-300">
              {t.payment}
              <br />
              {t.hourlyRate}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-garage-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">{t.contact}</h3>
                <div className="space-y-4">
                  <ContactItem
                    icon={<MapPin className="w-6 h-6" />}
                    text="Tehtaankatu 13, Pietarsaari"
                  />
                  <ContactItem
                    icon={<Phone className="w-6 h-6" />}
                    text="+35845 886 3211"
                    link="tel:+358458863211"
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
              <div className="h-[300px] w-[500px] bg-garage-700 rounded-lg">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.2877164865386!2d22.715777684016927!3d63.67416407937154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4683eb0818f22631%3A0x7806fb8e92a753cb!2sAutoparsinta!5e0!3m2!1sen!2sfi!4v1710871500997!5m2!1sen!2sfi"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Autoparsinta"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-garage-900">
        <div 
          className="container mx-auto px-4 text-center text-gray-400"
          style={{
            transform: `translateY(${isVisible ? '0' : '20px'})`,
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease-out',
            transitionDelay: '200ms'
          }}
        >
          <p>{t.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, items, className, style }: { 
  icon: React.ReactNode; 
  items: string[];
  className?: string;
  style?: React.CSSProperties;
}) => (
  <Card 
    className={`p-6 bg-white/5 backdrop-blur-sm border-0 hover:bg-white/10 transition-all duration-300 ${className}`}
    style={style}
  >
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
