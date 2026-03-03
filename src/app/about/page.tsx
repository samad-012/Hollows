"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="px-6">

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          HOLLOWS – A Vision for Truth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          At HOLLOWS, we are at the beginning of our journey — but our
          commitment to truth, confidentiality, and professional integrity
          is unwavering. We aim to provide reliable investigative services
          to those who seek clarity.
        </motion.p>
      </section>

      {/* VISION & APPROACH SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 py-20">

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border bg-card shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-6">
            🌟 Our Vision
          </h2>

          <ul className="space-y-3 text-muted-foreground">
            <li>✔ Transparency in every investigation</li>
            <li>✔ Strict confidentiality</li>
            <li>✔ Professional conduct</li>
            <li>✔ Continuous improvement</li>
            <li>✔ Client-focused service</li>
          </ul>
        </motion.div>

        {/* Approach Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border bg-card shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-6">
            🚀 Our Approach
          </h2>

          <ul className="space-y-3 text-muted-foreground">
            <li>✔ Taking every case seriously</li>
            <li>✔ Maintaining strict confidentiality</li>
            <li>✔ Using ethical & legal methods</li>
            <li>✔ Clear client communication</li>
            <li>✔ Honest findings without exaggeration</li>
          </ul>
        </motion.div>
      </section>

      {/* PROMISE SECTION */}
      <section className="py-24 bg-muted/40 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            🤝 Our Promise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We may be at the beginning of our journey, but our dedication is strong.
            Every case we handle is treated with seriousness, respect, and integrity.
            Our goal is simple — to grow into a name people can trust by consistently
            delivering clarity backed by facts.
          </motion.p>
        </div>
      </section>

    </main>
  );
}