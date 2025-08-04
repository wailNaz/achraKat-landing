export type TranslationKey = 
  | 'nav.home'
  | 'nav.features'
  | 'nav.gallery'
  | 'nav.partners'
  | 'nav.faq'
  | 'nav.testimonials'
  | 'nav.contact'
  | 'nav.signupPartner'
  | 'hero.welcome'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.downloadAppStore'
  | 'hero.downloadGooglePlay'
  | 'hero.registerPartner'
  | 'features.title'
  | 'features.subtitle'
  | 'features.fastDelivery.title'
  | 'features.fastDelivery.description'
  | 'features.securePayment.title'
  | 'features.securePayment.description'
  | 'features.exclusiveOffers.title'
  | 'features.exclusiveOffers.description'
  | 'features.profitablePartnerships.title'
  | 'features.profitablePartnerships.description'
  | 'gallery.title'
  | 'gallery.subtitle'
  | 'gallery.shopping'
  | 'gallery.catalog'
  | 'gallery.payment'
  | 'gallery.partnership'
  | 'gallery.tracking'
  | 'gallery.offers'
  | 'partners.title'
  | 'partners.subtitle'
  | 'partners.companyName'
  | 'partners.commercialRegNumber'
  | 'partners.email'
  | 'partners.phone'
  | 'partners.submit'
  | 'partners.successTitle'
  | 'partners.successDescription'
  | 'partners.partnershipCard.title'
  | 'partners.partnershipCard.description'
  | 'faq.title'
  | 'faq.subtitle'
  | 'faq.registration.question'
  | 'faq.registration.answer'
  | 'faq.partnership.question'
  | 'faq.partnership.answer'
  | 'faq.delivery.question'
  | 'faq.delivery.answer'
  | 'faq.returns.question'
  | 'faq.returns.answer'
  | 'faq.payment.question'
  | 'faq.payment.answer'
  | 'faq.support.question'
  | 'faq.support.answer'
  | 'testimonials.title'
  | 'testimonials.subtitle'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.name'
  | 'contact.email'
  | 'contact.phone'
  | 'contact.message'
  | 'contact.submit'
  | 'contact.successTitle'
  | 'contact.successDescription'
  | 'contact.supportTitle'
  | 'contact.supportDescription'
  | 'contact.emailLabel'
  | 'contact.phoneLabel'
  | 'contact.addressLabel'
  | 'footer.brand'
  | 'footer.description'
  | 'footer.quickLinks'
  | 'footer.support'
  | 'footer.downloadApp'
  | 'footer.termsAndConditions'
  | 'footer.privacyPolicy'
  | 'footer.copyright';

export const translations: Record<'ar' | 'fr', Record<TranslationKey, string>> = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.features': 'المميزات',
    'nav.gallery': 'المعرض',
    'nav.partners': 'الشركاء',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.testimonials': 'آراء العملاء',
    'nav.contact': 'اتصل بنا',
    'nav.signupPartner': 'سجّل كشريك',
    'hero.welcome': 'مرحباً بك في',
    'hero.title': 'أشرقت',
    'hero.subtitle': 'منصة التسوق الذكي والشراكات التي تجمع بين سهولة التسوق وفرص الشراكة المربحة',
    'hero.downloadAppStore': 'حمّل من App Store',
    'hero.downloadGooglePlay': 'حمّل من Google Play',
    'hero.registerPartner': 'سجّل كشريك الآن',
    'features.title': 'مميزات منصة أشرقت',
    'features.subtitle': 'اكتشف لماذا يختار آلاف المستخدمين والشركاء منصة أشرقت لتسوقهم وشراكاتهم',
    'features.fastDelivery.title': 'توصيل سريع',
    'features.fastDelivery.description': 'توصيل سريع وآمن إلى باب منزلك في أقل من 24 ساعة',
    'features.securePayment.title': 'دفع آمن',
    'features.securePayment.description': 'خيارات دفع متعددة وآمنة مع حماية كاملة للبيانات',
    'features.exclusiveOffers.title': 'عروض حصرية',
    'features.exclusiveOffers.description': 'اكتشف عروض وخصومات حصرية يومياً على أفضل المنتجات',
    'features.profitablePartnerships.title': 'شراكات مربحة',
    'features.profitablePartnerships.description': 'انضم كشريك واحصل على عمولات مجزية ودعم متكامل',
    'gallery.title': 'معرض التطبيق',
    'gallery.subtitle': 'شاهد واجهة التطبيق البسيطة والأنيقة المصممة خصيصاً للمستخدم العربي',
    'gallery.shopping': 'واجهة التسوق',
    'gallery.catalog': 'كتالوج المنتجات',
    'gallery.payment': 'واجهة الدفع',
    'gallery.partnership': 'لوحة الشراكة',
    'gallery.tracking': 'تتبع الطلبات',
    'gallery.offers': 'العروض والخصومات',
    'partners.title': 'انضم كشريك',
    'partners.subtitle': 'ابدأ رحلتك التجارية معنا واحصل على عمولات مجزية ودعم متكامل لنمو أعمالك',
    'partners.companyName': 'اسم الشركة',
    'partners.commercialRegNumber': 'رقم السجل التجاري',
    'partners.email': 'البريد الإلكتروني',
    'partners.phone': 'رقم الهاتف',
    'partners.submit': 'تقدم بطلب الشراكة',
    'partners.successTitle': 'تم إرسال طلب الشراكة',
    'partners.successDescription': 'سنتواصل معك قريباً لاستكمال عملية التسجيل',
    'partners.partnershipCard.title': 'شراكة نجاح',
    'partners.partnershipCard.description': 'انضم إلى شبكة الشركاء المميزين واحصل على دعم شامل لتنمية أعمالك',
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'إجابات على أهم الأسئلة حول منصة أشرقت',
    'faq.registration.question': 'كيف يمكنني التسجيل في المنصة؟',
    'faq.registration.answer': 'يمكنك التسجيل بسهولة من خلال تحميل التطبيق وإنشاء حساب جديد باستخدام بريدك الإلكتروني أو رقم هاتفك. العملية بسيطة وتستغرق أقل من دقيقتين.',
    'faq.partnership.question': 'ما هي شروط الشراكة؟',
    'faq.partnership.answer': 'نرحب بجميع التجار وأصحاب الأعمال للانضمام كشركاء. تحتاج إلى سجل تجاري ساري المفعول ووثائق الهوية. نوفر تدريباً مجانياً ودعماً فنياً متكاملاً.',
    'faq.delivery.question': 'كم المدة المطلوبة للتوصيل؟',
    'faq.delivery.answer': 'نوفر خدمة توصيل سريعة خلال 24 ساعة داخل المدن الرئيسية، وخلال 2-3 أيام عمل للمناطق النائية. يمكنك تتبع طلبك لحظة بلحظة من خلال التطبيق.',
    'faq.returns.question': 'هل يمكنني إرجاع المنتجات؟',
    'faq.returns.answer': 'نعم، نوفر سياسة إرجاع مرنة خلال 14 يوماً من تاريخ الاستلام. يجب أن تكون المنتجات في حالتها الأصلية. الإرجاع مجاني للعيوب الصناعية.',
    'faq.payment.question': 'ما هي طرق الدفع المتاحة؟',
    'faq.payment.answer': 'نقبل جميع وسائل الدفع: البطاقات الائتمانية، مدى، أبل باي، ستك باي، والدفع عند الاستلام. جميع المعاملات محمية بأعلى معايير الأمان.',
    'faq.support.question': 'كيف أتواصل مع خدمة العملاء؟',
    'faq.support.answer': 'يمكنك التواصل معنا عبر الدردشة المباشرة في التطبيق، أو الاتصال على الرقم المجاني، أو إرسال بريد إلكتروني. فريق الدعم متاح 24/7 لمساعدتك.',
    'testimonials.title': 'آراء عملائنا',
    'testimonials.subtitle': 'اكتشف تجارب عملائنا وشركائنا مع منصة أشرقت',
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو دعم',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'الرسالة',
    'contact.submit': 'إرسال الرسالة',
    'contact.successTitle': 'تم إرسال رسالتك',
    'contact.successDescription': 'شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن',
    'contact.supportTitle': 'نحن هنا لمساعدتك',
    'contact.supportDescription': 'فريق دعم متخصص متاح على مدار الساعة لمساعدتك',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.phoneLabel': 'رقم الهاتف',
    'contact.addressLabel': 'العنوان',
    'footer.brand': 'أشرقت',
    'footer.description': 'منصة التسوق الذكي والشراكات التي تجمع بين سهولة التسوق وفرص الشراكة المربحة',
    'footer.quickLinks': 'روابط سريعة',
    'footer.support': 'الدعم',
    'footer.downloadApp': 'حمّل التطبيق',
    'footer.termsAndConditions': 'الشروط والأحكام',
    'footer.privacyPolicy': 'سياسة الخصوصية',
    'footer.copyright': 'جميع الحقوق محفوظة'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.features': 'Fonctionnalités',
    'nav.gallery': 'Galerie',
    'nav.partners': 'Partenaires',
    'nav.faq': 'FAQ',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    'nav.signupPartner': 'Devenir Partenaire',
    'hero.welcome': 'Bienvenue sur',
    'hero.title': 'AchraKat',
    'hero.subtitle': 'La plateforme de shopping intelligent et de partenariats qui combine facilité d\'achat et opportunités de partenariat rentables',
    'hero.downloadAppStore': 'Télécharger sur App Store',
    'hero.downloadGooglePlay': 'Télécharger sur Google Play',
    'hero.registerPartner': 'S\'inscrire comme partenaire',
    'features.title': 'Fonctionnalités d\'AchraKat',
    'features.subtitle': 'Découvrez pourquoi des milliers d\'utilisateurs et de partenaires choisissent AchraKat pour leurs achats et partenariats',
    'features.fastDelivery.title': 'Livraison Rapide',
    'features.fastDelivery.description': 'Livraison rapide et sécurisée à votre porte en moins de 24 heures',
    'features.securePayment.title': 'Paiement Sécurisé',
    'features.securePayment.description': 'Options de paiement multiples et sécurisées avec protection complète des données',
    'features.exclusiveOffers.title': 'Offres Exclusives',
    'features.exclusiveOffers.description': 'Découvrez des offres et des réductions exclusives quotidiennes sur les meilleurs produits',
    'features.profitablePartnerships.title': 'Partenariats Rentables',
    'features.profitablePartnerships.description': 'Rejoignez-nous comme partenaire et obtenez des commissions attractives avec un support complet',
    'gallery.title': 'Galerie de l\'Application',
    'gallery.subtitle': 'Découvrez l\'interface simple et élégante de l\'application conçue spécialement pour l\'utilisateur',
    'gallery.shopping': 'Interface d\'achat',
    'gallery.catalog': 'Catalogue de produits',
    'gallery.payment': 'Interface de paiement',
    'gallery.partnership': 'Tableau de bord partenaire',
    'gallery.tracking': 'Suivi des commandes',
    'gallery.offers': 'Offres et promotions',
    'partners.title': 'Devenir Partenaire',
    'partners.subtitle': 'Commencez votre parcours commercial avec nous et obtenez des commissions attractives avec un support complet pour développer vos affaires',
    'partners.companyName': 'Nom de l\'entreprise',
    'partners.commercialRegNumber': 'Numéro d\'enregistrement commercial',
    'partners.email': 'Email',
    'partners.phone': 'Téléphone',
    'partners.submit': 'Soumettre la demande de partenariat',
    'partners.successTitle': 'Demande de partenariat envoyée',
    'partners.successDescription': 'Nous vous contacterons bientôt pour finaliser le processus d\'inscription',
    'partners.partnershipCard.title': 'Partenariat de Succès',
    'partners.partnershipCard.description': 'Rejoignez le réseau de partenaires privilégiés et bénéficiez d\'un support complet pour développer vos affaires',
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Réponses aux questions les plus importantes sur la plateforme AchraKat',
    'faq.registration.question': 'Comment puis-je m\'inscrire sur la plateforme ?',
    'faq.registration.answer': 'Vous pouvez vous inscrire facilement en téléchargeant l\'application et en créant un nouveau compte avec votre email ou numéro de téléphone. Le processus est simple et prend moins de deux minutes.',
    'faq.partnership.question': 'Quelles sont les conditions de partenariat ?',
    'faq.partnership.answer': 'Nous accueillons tous les commerçants et propriétaires d\'entreprises pour rejoindre nos partenaires. Vous avez besoin d\'un enregistrement commercial valide et de documents d\'identité. Nous fournissons une formation gratuite et un support technique complet.',
    'faq.delivery.question': 'Quel est le délai de livraison ?',
    'faq.delivery.answer': 'Nous offrons un service de livraison rapide dans les 24 heures dans les principales villes, et dans les 2-3 jours ouvrables pour les zones éloignées. Vous pouvez suivre votre commande en temps réel via l\'application.',
    'faq.returns.question': 'Puis-je retourner les produits ?',
    'faq.returns.answer': 'Oui, nous offrons une politique de retour flexible dans les 14 jours suivant la réception. Les produits doivent être dans leur état d\'origine. Les retours sont gratuits pour les défauts de fabrication.',
    'faq.payment.question': 'Quels sont les modes de paiement disponibles ?',
    'faq.payment.answer': 'Nous acceptons tous les moyens de paiement : cartes de crédit, cartes de débit, Apple Pay, et paiement à la livraison. Toutes les transactions sont protégées par les plus hauts standards de sécurité.',
    'faq.support.question': 'Comment contacter le service client ?',
    'faq.support.answer': 'Vous pouvez nous contacter via le chat en direct dans l\'application, appeler le numéro gratuit, ou envoyer un email. L\'équipe de support est disponible 24/7 pour vous aider.',
    'testimonials.title': 'Avis de nos Clients',
    'testimonials.subtitle': 'Découvrez les expériences de nos clients et partenaires avec la plateforme AchraKat',
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous sommes là pour vous aider. Contactez-nous pour toute question ou support',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.message': 'Message',
    'contact.submit': 'Envoyer le message',
    'contact.successTitle': 'Votre message a été envoyé',
    'contact.successDescription': 'Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais',
    'contact.supportTitle': 'Nous sommes là pour vous aider',
    'contact.supportDescription': 'Équipe de support spécialisée disponible 24h/24 pour vous aider',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Téléphone',
    'contact.addressLabel': 'Adresse',
    'footer.brand': 'AchraKat',
    'footer.description': 'La plateforme de shopping intelligent et de partenariats qui combine facilité d\'achat et opportunités de partenariat rentables',
    'footer.quickLinks': 'Liens Rapides',
    'footer.support': 'Support',
    'footer.downloadApp': 'Télécharger l\'App',
    'footer.termsAndConditions': 'Conditions Générales',
    'footer.privacyPolicy': 'Politique de Confidentialité',
    'footer.copyright': 'Tous droits réservés'
  }
};

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };
  
  return { t };
}

// Import the useLanguage hook
import { useLanguage } from '../hooks/use-language';