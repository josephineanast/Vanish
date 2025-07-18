"use client";

import { motion } from "framer-motion";
import {
  PlayIcon,
  VideoCameraIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useLanguage } from "../contexts/LanguageContext";

export default function VideoIntro() {
  const { ts } = useLanguage();

  return (
    <section id="video" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{ts("videoIntro.title")}</span>
              <br />
              <span className="text-light">{ts("videoIntro.subtitle")}</span>
            </h2>

            <p className="text-xl text-light/70 mb-8">
              {ts("videoIntro.description")}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="glass-effect p-3 rounded-lg">
                  <VideoCameraIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {ts("videoIntro.features.easyRecording.title")}
                  </h3>
                  <p className="text-light/60">
                    {ts("videoIntro.features.easyRecording.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="glass-effect p-3 rounded-lg">
                  <ClockIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {ts("videoIntro.features.timeEfficient.title")}
                  </h3>
                  <p className="text-light/60">
                    {ts("videoIntro.features.timeEfficient.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="glass-effect p-3 rounded-lg">
                  <PlayIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {ts("videoIntro.features.instantChemistry.title")}
                  </h3>
                  <p className="text-light/60">
                    {ts("videoIntro.features.instantChemistry.description")}
                  </p>
                </div>
              </div>
            </div>

            <button className="button-primary">{ts("videoIntro.cta")}</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
              <div className="aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 glass-effect rounded-full flex items-center justify-center mb-4 mx-auto">
                    <PlayIcon className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg font-semibold mb-2">
                    {ts("videoIntro.preview.title")}
                  </p>
                  <p className="text-sm text-light/60">
                    {ts("videoIntro.preview.subtitle")}
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
