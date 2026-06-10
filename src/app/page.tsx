"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Preloader    from "@/components/Preloader";
import Navbar       from "@/components/Navbar";
import Hero         from "@/components/sections/Hero";
import Statement    from "@/components/sections/Statement";
import Services     from "@/components/sections/Services";
import Portfolio    from "@/components/sections/Portfolio";
import Process      from "@/components/sections/Process";
import Results      from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import Contact      from "@/components/sections/Contact";
import Footer       from "@/components/Footer";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

const CustomCursor      = dynamic(() => import("@/components/effects/CustomCursor"),      { ssr: false });
const SmoothScrollProvider = dynamic(() => import("@/components/providers/SmoothScrollProvider"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom cursor — desktop only */}
      {mounted && <CustomCursor />}

      {!loading && (
        <LanguageProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main>
              <Hero />
              <Statement />
              <Services />
              <Portfolio />
              <Process />
              <Results />
              <Testimonials />
              <Contact />
              <Footer />
            </main>
          </SmoothScrollProvider>
        </LanguageProvider>
      )}
    </>
  );
}
