import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductImage from "@/components/ProductImage";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Hero Banner */}
      <section className="relative w-full h-[52vh] min-h-[380px] flex items-center justify-center bg-[#f4f2ee] overflow-hidden border-b border-black/10">
        <ProductImage
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85"
          alt="Maison ASALA Savoir-faire"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-2xl">
          <span
            className="text-[44px] sm:text-[54px] text-white block mb-2 font-normal"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            أصالة
          </span>
          <h1
            className="text-[32px] sm:text-[44px] font-normal uppercase tracking-tight text-white mb-3"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            LA MAISON ASALA
          </h1>
          <div className="w-12 h-px bg-white/70 mx-auto mb-4" />
          <p className="text-[13px] sm:text-[14px] text-white/90 font-light leading-relaxed">
            L'héritage de la haute couture tunisienne sublimé dans une modernité intemporelle.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <div className="asala-container max-w-[1000px] py-16 lg:py-24 space-y-16">
        <div className="space-y-6 text-[14px] text-stone font-normal leading-relaxed">
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone font-medium">
            Origines & Philosophie
          </p>
          <h2
            className="text-[30px] sm:text-[38px] font-normal uppercase text-black tracking-tight leading-snug"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            NOTRE HISTOIRE & NOTRE VISION
          </h2>
          <p>
            Fondée à Tunis, la Maison ASALA (أصالة — signifiant <em>authenticité</em> et <em>noblesse d'origine</em> en arabe) est née d'une passion inconditionnelle pour le patrimoine vestimentaire tunisien et méditerranéen.
          </p>
          <p>
            Face à l'uniformisation de la mode mondiale, ASALA propose une vision singulière : des créations de grand apparat et des silhouettes quotidiennes qui célèbrent la richesse des broderies tunisiennes, la pureté des lins naturels et la splendeur des soies les plus précieuses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-b border-black/10 py-14">
          <div className="aspect-[4/5] overflow-hidden bg-[#f4f2ee]">
            <ProductImage
              src="/hero-model.jpg"
              alt="Atelier ASALA"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 text-[13px] sm:text-[14px] text-stone font-normal leading-relaxed">
            <p className="text-[11px] uppercase tracking-[0.16em] text-stone font-medium">
              Transmission Artisanale
            </p>
            <h3
              className="text-[24px] sm:text-[28px] font-normal uppercase text-black"
              style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
            >
              L'ATELIER DE TUNIS
            </h3>
            <p>
              Chaque caftan, chaque jebba et chaque takchita est façonné au cœur de nos ateliers par des maîtresses artisanes détentrices d'un savoir-faire séculaire.
            </p>
            <p>
              Le travail minutieux du fil d'or, la pose des boutons driba réalisés un à un à la main, et la précision des coupes architecturales confèrent à chaque création ASALA une noblesse incomparable.
            </p>
            <div className="pt-3">
              <Link
                to="/collection"
                className="asala-btn inline-flex"
              >
                <span>Découvrir la collection</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
