import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Slide {
  id: string;
  tagline: string;
  arabicTitle: string;
  titleLines: string[];
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  objectPosition?: string;
}

const slides: Slide[] = [
  {
    id: "01",
    tagline: "TRADITION — ÉLÉGANCE — INTEMPORALITÉ",
    arabicTitle: "أصالة",
    titleLines: ["L'ART DU", "TRADITIONNEL"],
    description:
      "Des pièces intemporelles, pensées pour aujourd’hui.\nL’héritage de la couture tunisienne sublimé dans une esthétique contemporaine.",
    ctaText: "Découvrir la collection",
    ctaLink: "/collection",
    image: "/hero-main.jpg",
    objectPosition: "center center",
  },
  {
    id: "02",
    tagline: "ÉDITION CÉRÉMONIE — HAUTE COUTURE",
    arabicTitle: "أصالة",
    titleLines: ["SPLENDEUR", "& MAJESTÉ"],
    description:
      "L’art de la takchita et du caftan d’apparat.\nBroderies au fil d'or et soies d'art pour vos célébrations les plus précieuses.",
    ctaText: "Explorer la cérémonie",
    ctaLink: "/ceremonie",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=85",
    objectPosition: "center center",
  },
  {
    id: "03",
    tagline: "L'ESSENCE DU LIN — CRÉATION ARTISANALE",
    arabicTitle: "أصالة",
    titleLines: ["LA JEBBA", "RÉINVENTÉE"],
    description:
      "Lignes fluides, pureté des matières et finitions cousues main.\nLa noblesse de la jebba tunisienne dans son expression moderne.",
    ctaText: "Voir les nouveautés",
    ctaLink: "/nouveautes",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85",
    objectPosition: "center center",
  },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="asala-container">
      <div className="relative w-full overflow-hidden border-b border-black/10 bg-[#f4f2ee] aspect-[4/5] min-h-[420px] sm:aspect-[4/3] sm:min-h-0 lg:min-h-0 lg:aspect-[2/1]">
        {/* One shared image frame for every slide. */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <img
            key={slide.image}
            src={slide.image}
            alt="Collection ASALA Mode Traditionnelle"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
            style={{ objectPosition: slide.objectPosition || "center center" }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/hero-main.jpg";
            }}
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-white/95 via-white/80 to-white/35 sm:from-white/90 sm:via-white/70 lg:bg-gradient-to-r lg:from-[#fbfaf8]/40 lg:via-transparent lg:to-transparent pointer-events-none" />

        {/* Editorial content remains in its current left position, over the image. */}
        <div className="absolute inset-0 z-10 flex h-full w-full items-center px-4 py-8 sm:px-8 sm:py-10 lg:pl-28 lg:pr-8 lg:py-10 xl:pl-36">
          <div className="w-full max-w-[460px]">
            {/* Tagline */}
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-stone font-medium mb-3 sm:mb-4">
              {slide.tagline}
            </p>

            {/* Arabic Brandmark */}
            <div
              className="font-didone text-[44px] sm:text-[54px] lg:text-[56px] xl:text-[64px] leading-[0.9] text-black mb-2 select-none"
              style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
            >
              {slide.arabicTitle}
            </div>

            {/* French Editorial Title */}
            <h1
              className="text-[28px] xs:text-[34px] sm:text-[42px] font-normal leading-[1.02] tracking-tight text-black mb-3 sm:mb-4 lg:text-[clamp(36px,3.3vw,54px)]"
              style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
            >
              {slide.titleLines[0]}
              <br />
              {slide.titleLines[1]}
            </h1>

            {/* Editorial hairline divider */}
            <div className="w-10 h-px bg-black mb-3 sm:mb-4" />

            {/* Editorial description */}
            <p className="text-[12px] sm:text-[13px] leading-[1.5] text-stone whitespace-pre-line mb-6 sm:mb-8 font-normal">
              {slide.description}
            </p>

            {/* CTA Button */}
            <div>
              <Link
                to={slide.ctaLink}
                className="asala-btn group w-full sm:w-auto justify-center text-center"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Pagination Controls: 01 —— 02 03 */}
            <div className="flex items-center gap-4 mt-8 sm:mt-10 text-[10px] font-mono tracking-widest text-stone select-none">
              {slides.map((s, idx) => {
                const isActive = idx === current;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(idx)}
                    className="flex items-center gap-2 group cursor-pointer"
                    aria-label={`Aller au slide ${s.id}`}
                  >
                    <span
                      className={`transition-colors ${
                        isActive
                          ? "text-black font-semibold"
                          : "text-stone/60 group-hover:text-black"
                      }`}
                    >
                      {s.id}
                    </span>
                    {isActive && (
                      <span className="w-10 h-px bg-black transition-all" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
