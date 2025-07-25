"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../contexts/LanguageContext";

export default function CTA() {
  const { ts } = useLanguage();

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="gradient-bg rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {ts("cta.title")}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {ts("cta.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-dark px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>{ts("cta.button")}</span>
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>

              <p className="text-white/80">
                <span className="font-semibold">{ts("cta.waitlistCount")}</span>{" "}
                {ts("cta.waitlistText")}
              </p>
            </div>
          </div>

          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-light/60 mb-4">{ts("cta.availableSoon")}</p>
          <div className="flex justify-center space-x-8">
            <div className="glass-effect px-6 py-3 rounded-xl">
              <span className="text-light/80">{ts("cta.platforms.ios")}</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-xl">
              <span className="text-light/80">
                {ts("cta.platforms.android")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
