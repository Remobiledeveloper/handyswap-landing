/*
 * Design: Midnight Tech — Dark Luxury Editorial
 * FloatingCTA: Persistent floating button — i18n enabled
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function FloatingCTA() {
  const { t } = useLocale();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const heroForm = document.getElementById("email-capture");
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-hs-blue hover:bg-hs-blue/90 text-white font-display font-bold px-5 py-3 rounded-full shadow-lg shadow-hs-blue/25 flex items-center gap-2 text-sm cta-pulse transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
          {t.floatingCta}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
