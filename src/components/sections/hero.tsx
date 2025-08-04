import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Play, ShoppingBag, Store, Truck } from "lucide-react";
import { useTranslation } from "@/lib/translations";
import { useLanguage } from "@/hooks/use-language";

export function Hero() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section id="home" className="bg-gradient-to-br from-light-blue to-white pt-20 pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left side on desktop */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-gray mb-6 font-cairo"
            >
              {t("hero.welcome")}{" "}
              <span className="text-primary-blue bg-gradient-to-r from-primary-blue to-violet bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl text-medium-gray mb-8 font-tajawal"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-8"
            >
              <div className="flex gap-4 flex-wrap">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-12 hover:scale-110 hover:shadow-lg transition-transform animate-float"
                  />
                </a>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    className="h-12 hover:scale-110 hover:shadow-lg transition-transform animate-float"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  onClick={() => {
                    const element = document.querySelector("#partners");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-2 border-primary-blue text-primary-blue px-6 py-3 rounded-full text-base font-medium hover:bg-primary-blue hover:text-white transition-all duration-300 font-tajawal"
                >
                  {t("hero.registerPartner")}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* 3D Shopping illustration - Right side on desktop */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-64 h-72 sm:w-80 sm:h-96 lg:w-72 lg:h-80 bg-gradient-to-br from-primary-blue/10 to-white rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-light-blue/20"></div>
              
              {/* Main 3D shopping marketplace illustration */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
                
                {/* Top section - Person with laptop shopping */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-8 relative"
                >
                  {/* 3D Laptop */}
                  <div className="relative">
                    <div className="w-32 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl flex items-center justify-center relative">
                      {/* Laptop screen */}
                      <div className="w-28 h-16 bg-gradient-to-br from-white to-light-blue/20 rounded-xl p-2 relative overflow-hidden">
                        {/* Shopping website interface */}
                        <div className="flex justify-between items-center mb-2">
                          <div className="w-3 h-3 bg-primary-blue/60 rounded-full"></div>
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-primary-blue/40 rounded-full"></div>
                            <div className="w-1 h-1 bg-soft-green/40 rounded-full"></div>
                            <div className="w-1 h-1 bg-warm-yellow/40 rounded-full"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-1 mb-1">
                          <div className="w-6 h-4 bg-primary-blue/30 rounded-md flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-sm"></div>
                          </div>
                          <div className="w-6 h-4 bg-soft-green/30 rounded-md flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-sm"></div>
                          </div>
                          <div className="w-6 h-4 bg-warm-yellow/30 rounded-md flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-sm"></div>
                          </div>
                        </div>
                        <div className="w-full h-1 bg-primary-blue/20 rounded-full mb-1"></div>
                        <div className="w-3/4 h-1 bg-soft-green/20 rounded-full"></div>
                      </div>
                      {/* Laptop base */}
                      <div className="absolute -bottom-1 w-36 h-3 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-2xl"></div>
                    </div>
                    
                    {/* Shopping cart icon floating */}
                    <motion.div
                      animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-6 w-14 h-12 bg-gradient-to-br from-primary-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <ShoppingBag className="w-7 h-7 text-white" />
                      <motion.div
                        animate={{ scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-warm-yellow rounded-full flex items-center justify-center text-xs font-bold text-white"
                      >
                        3
                      </motion.div>
                    </motion.div>

                    {/* Person silhouette */}
                    <motion.div
                      animate={{ scale: [0.95, 1.05, 0.95] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -left-8 -top-2 w-12 h-16 bg-gradient-to-br from-soft-green/80 to-green-600/80 rounded-t-full rounded-b-2xl flex flex-col items-center justify-center"
                    >
                      {/* Head */}
                      <div className="w-4 h-4 bg-gradient-to-br from-warm-yellow/90 to-yellow-600/90 rounded-full mb-1"></div>
                      {/* Body */}
                      <div className="w-6 h-8 bg-gradient-to-br from-soft-green/90 to-green-600/90 rounded-lg"></div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Data flow connection */}
                <div className="relative w-full flex justify-center mb-8">
                  <div className="flex space-x-3 items-center">
                    <motion.div
                      animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      className="w-2 h-10 bg-gradient-to-b from-primary-blue to-transparent rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      className="w-2 h-8 bg-gradient-to-b from-soft-green to-transparent rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                      className="w-2 h-12 bg-gradient-to-b from-warm-yellow to-transparent rounded-full"
                    ></motion.div>
                  </div>
                </div>

                {/* Center - Mobile shopping scene */}
                <motion.div
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative mb-8"
                >
                  {/* Large smartphone */}
                  <div className="w-24 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border-2 border-slate-600 flex flex-col relative">
                    {/* Phone screen */}
                    <div className="w-20 h-34 bg-gradient-to-br from-white to-light-blue/20 rounded-2xl m-2 p-3 relative overflow-hidden">
                      {/* App header */}
                      <div className="flex justify-between items-center mb-3">
                        <div className="w-8 h-2 bg-primary-blue/60 rounded-full"></div>
                        <div className="w-4 h-4 bg-soft-green/60 rounded-full flex items-center justify-center">
                          <div className="text-white text-xs">👤</div>
                        </div>
                      </div>
                      
                      {/* Product grid */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-primary-blue/20 rounded-lg h-6 flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary-blue/60 rounded"></div>
                        </div>
                        <div className="bg-soft-green/20 rounded-lg h-6 flex items-center justify-center">
                          <div className="w-3 h-3 bg-soft-green/60 rounded"></div>
                        </div>
                        <div className="bg-warm-yellow/20 rounded-lg h-6 flex items-center justify-center">
                          <div className="w-3 h-3 bg-warm-yellow/60 rounded"></div>
                        </div>
                        <div className="bg-purple-500/20 rounded-lg h-6 flex items-center justify-center">
                          <div className="w-3 h-3 bg-purple-500/60 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Add to cart button */}
                      <div className="w-full h-3 bg-gradient-to-r from-primary-blue/80 to-soft-green/80 rounded-full flex items-center justify-center">
                        <div className="text-white text-xs">🛒</div>
                      </div>
                    </div>
                    
                    {/* Phone home indicator */}
                    <div className="w-6 h-1 bg-slate-600 rounded-full mx-auto mb-2"></div>
                  </div>
                  
                  {/* Floating elements around phone */}
                  <motion.div
                    animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-4 w-10 h-10 bg-gradient-to-br from-warm-yellow to-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div className="text-white text-sm">💳</div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ x: [0, -6, 0], y: [0, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-2 -left-4 w-8 h-8 bg-gradient-to-br from-soft-green to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <div className="text-white text-xs">📦</div>
                  </motion.div>

                  {/* Partnership handshake */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div className="text-white text-lg">🤝</div>
                  </motion.div>
                </motion.div>

                {/* Analytics/Growth bars */}
                <div className="relative w-full flex justify-center mb-8">
                  <div className="flex space-x-3 items-end">
                    <motion.div
                      animate={{ scaleY: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-2 h-8 bg-gradient-to-t from-soft-green to-green-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ scaleY: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      className="w-2 h-12 bg-gradient-to-t from-primary-blue to-blue-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ scaleY: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      className="w-2 h-10 bg-gradient-to-t from-warm-yellow to-yellow-400 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ scaleY: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                      className="w-2 h-14 bg-gradient-to-t from-purple-500 to-purple-400 rounded-full"
                    ></motion.div>
                  </div>
                </div>

                {/* Bottom - Delivery success */}
                <motion.div
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Delivery truck with modern design */}
                  <div className="w-36 h-24 bg-gradient-to-br from-primary-blue to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                    {/* Truck cab */}
                    <div className="absolute left-4 top-3 w-10 h-12 bg-slate-700 rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-8 bg-gradient-to-br from-white/90 to-light-blue/50 rounded-lg flex items-center justify-center">
                        <div className="text-primary-blue text-xs">🚚</div>
                      </div>
                    </div>
                    
                    {/* Package area */}
                    <div className="absolute right-4 top-4 w-16 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-2 h-2 bg-white/80 rounded-sm"></div>
                        <div className="w-2 h-2 bg-warm-yellow/80 rounded-sm"></div>
                        <div className="w-2 h-2 bg-soft-green/80 rounded-sm"></div>
                        <div className="w-2 h-2 bg-white/80 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Wheels */}
                    <div className="absolute -bottom-2 left-8 w-6 h-6 bg-slate-800 rounded-full border-2 border-slate-600"></div>
                    <div className="absolute -bottom-2 right-8 w-6 h-6 bg-slate-800 rounded-full border-2 border-slate-600"></div>
                  </div>
                  
                  {/* Success indicator */}
                  <motion.div
                    animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3 w-10 h-10 bg-soft-green rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                  >
                    <div className="text-white text-sm font-bold">✓</div>
                  </motion.div>
                  
                  {/* Satisfaction rating */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -left-3 flex space-x-1"
                  >
                    <div className="w-2 h-2 bg-warm-yellow rounded-full"></div>
                    <div className="w-2 h-2 bg-warm-yellow rounded-full"></div>
                    <div className="w-2 h-2 bg-warm-yellow rounded-full"></div>
                    <div className="w-2 h-2 bg-warm-yellow rounded-full"></div>
                    <div className="w-2 h-2 bg-warm-yellow rounded-full"></div>
                  </motion.div>
                </motion.div>

                {/* Ambient floating elements */}
                <motion.div
                  animate={{ rotate: 360, opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute top-8 right-8 w-10 h-10 border-2 border-primary-blue/30 rounded-full flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-primary-blue/20 rounded-full"></div>
                </motion.div>
                
                <motion.div
                  animate={{ rotate: -360, scale: [0.8, 1.3, 0.8], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-8 left-8 w-8 h-8 bg-warm-yellow/30 rounded-full"
                ></motion.div>
                
                <motion.div
                  animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 left-4 w-6 h-6 bg-soft-green/40 rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-soft-green rounded-full"></div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-1/4 right-4 w-5 h-5 bg-purple-500/40 rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}
