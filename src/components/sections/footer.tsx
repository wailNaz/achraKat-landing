import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#features", label: "المميزات" },
    { href: "#gallery", label: "المعرض" },
    { href: "#partners", label: "الشركاء" },
    { href: "#faq", label: "الأسئلة الشائعة" },
    { href: "#contact", label: "اتصل بنا" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Instagram, href: "#", label: "إنستغرام" },
    { icon: Linkedin, href: "#", label: "لينكدإن" },
  ];

  return (
    <footer className="bg-dark-gray text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-primary-blue font-cairo">
                أشرقت
              </span>
            </div>
            <p className="text-gray-300 font-tajawal text-sm leading-relaxed">
              منصة التسوق الذكي والشراكات التي تجمع بين سهولة التسوق وفرص
              الشراكة المربحة
            </p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-coral transition-colors duration-200 transform hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-cairo">روابط الموقع</h4>
            <ul className="space-y-2 font-tajawal">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-violet transition-colors duration-200 transform hover:scale-105"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-cairo">تواصل معنا</h4>
            <ul className="space-y-2 text-sm font-tajawal">
              <li>
                <span className="block text-gray-400">البريد الإلكتروني:</span>
                <a
                  href="mailto:info@achrakat.com"
                  className="hover:text-coral text-gray-300 transition-colors duration-200"
                >
                  info@achrakat.com
                </a>
              </li>
              <li>
                <span className="block text-gray-400">الهاتف:</span>
                <a
                  href="tel:+212600000000"
                  className="hover:text-coral text-gray-300 transition-colors duration-200"
                >
                  +212 6 00 00 00 00
                </a>
              </li>
            </ul>
          </div>

          {/* Download Buttons */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-cairo">حمّل التطبيق</h4>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-12 hover:scale-105 transition-transform hover:shadow-lg"
                />
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-12 hover:scale-105 transition-transform hover:shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm font-tajawal">
            © {currentYear} أشرقت. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
