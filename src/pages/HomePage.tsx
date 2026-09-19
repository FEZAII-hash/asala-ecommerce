import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ServiceBar from "@/components/ServiceBar";
import ProductGrid from "@/components/ProductGrid";
import ProductImage from "@/components/ProductImage";
import { products } from "@/data/products";

const HomePage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Products filters
  const newPieces = products.filter((p) => p.new).slice(0, 4);
  const caftans = products.filter((p) => p.category === "Caftan").slice(0, 4);
  const jebbas = products.filter((p) => p.category === "Jebba").slice(0, 4);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. HERO & SERVICE BAR */}
      <Hero />
      <ServiceBar />

      {/* 2. NOUVEAUTÉS — SECTION ÉDITORIALE (ITEM 10) */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-black/10">
        <div className="asala-container">
          {/* Editorial Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12 pb-5 sm:pb-6 border-b border-black/15">
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-stone font-medium">
                Édition Saisonnière
              </p>
              <h2
                className="text-[26px] xs:text-[32px] sm:text-[42px] lg:text-[48px] font-normal leading-[1.05] tracking-tight text-black mt-2"
                style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
              >
                LES NOUVELLES PIÈCES
              </h2>
            </div>
            <Link
              to="/nouveautes"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-medium text-black hover:text-stone transition-colors group"
            >
              <span>Voir toutes les nouveautés</span>
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* 4-column Product Grid */}
          <ProductGrid products={newPieces} columns={4} />
        </div>
      </section>

      {/* 3. SECTION COLLECTIONS — COMPOSITION ASYMÉTRIQUE (ITEM 36) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#faf9f6] border-b border-black/10">
        <div className="asala-container">
          <div className="max-w-[520px] mb-10 sm:mb-12 lg:mb-16">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-stone font-medium">
              Panorama des Savoir-Faire
            </p>
            <h2
              className="text-[26px] xs:text-[34px] sm:text-[44px] lg:text-[52px] font-normal leading-[1.05] tracking-tight text-black mt-2"
              style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
            >
              NOS LIGNES DE CRÉATION
            </h2>
            <p className="mt-3 sm:mt-4 text-[12px] sm:text-[14px] leading-relaxed text-stone">
              Une garde-robe tunisienne contemporaine où la rigueur des broderies d'or rencontre la fluidité des lignes modernes.
            </p>
          </div>

          {/* Asymmetric composition grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
            {/* Large Tile: CAFTANS (col-span-7) */}
            <Link
              to="/caftans"
              className="group relative block overflow-hidden bg-[#f4f2ee] aspect-[4/5] md:col-span-1 lg:col-span-5 lg:row-start-1 lg:row-span-2 lg:aspect-[4/5]"
            >
              <ProductImage
                src="/hero-model.jpg"
                alt="Collection Caftans ASALA"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">
                  La Signature ASALA
                </p>
                <h3
                  className="text-[28px] sm:text-[38px] font-normal leading-tight mt-1"
                  style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                >
                  CAFTANS
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 border-b border-white pb-0.5 text-[10px] uppercase tracking-[0.16em] font-medium">
                  Découvrir <ArrowRight size={13} strokeWidth={1.5} />
                </span>
              </div>
            </Link>

            {/* Medium Tile: TAKCHITAS (col-span-5) */}
            <Link
              to="/takchitas"
              className="group relative block overflow-hidden bg-[#f4f2ee] aspect-[16/10] md:col-span-1 lg:col-start-6 lg:col-span-7 lg:row-start-1 lg:aspect-[16/9]"
            >
              <ProductImage
                src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1000&q=85"
                alt="Collection Takchitas ASALA"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">
                  Prestige & Apparat
                </p>
                <h3
                  className="text-[28px] sm:text-[34px] font-normal leading-tight mt-1"
                  style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                >
                  TAKCHITAS
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 border-b border-white pb-0.5 text-[10px] uppercase tracking-[0.16em] font-medium">
                  Découvrir <ArrowRight size={13} strokeWidth={1.5} />
                </span>
              </div>
            </Link>

            {/* 3 Balanced Lower Tiles: JEBBAS (col-span-4), ROBES (col-span-4), CÉRÉMONIE (col-span-4) */}
            <Link
              to="/jebbas"
              className="group relative block overflow-hidden bg-[#f4f2ee] aspect-[4/5] md:col-span-1 lg:col-start-6 lg:col-span-3 lg:row-start-2 lg:aspect-[4/5]"
            >
              <ProductImage
                src="https://images.unsplash.com/photo-1587524285872-d2c1dfc5c21e?auto=format&fit=crop&w=800&q=85"
                alt="Collection Jebbas ASALA"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/80 font-medium">
                  Lins d'Exception
                </p>
                <h3
                  className="text-[24px] sm:text-[28px] font-normal leading-tight mt-1"
                  style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                >
                  JEBBAS
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 border-b border-white pb-0.5 text-[10px] uppercase tracking-[0.16em] font-medium">
                  Explorer <ArrowRight size={12} strokeWidth={1.5} />
                </span>
              </div>
            </Link>

            <Link
              to="/robes"
              className="group relative block overflow-hidden bg-[#f4f2ee] aspect-[4/5] md:col-span-1 lg:col-start-9 lg:col-span-3 lg:row-start-2 lg:aspect-[4/5]"
            >
              <ProductImage
                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85"
                alt="Collection Robes ASALA"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/80 font-medium">
                  Lignes Fluides
                </p>
                <h3
                  className="text-[24px] sm:text-[28px] font-normal leading-tight mt-1"
                  style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                >
                  ROBES
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 border-b border-white pb-0.5 text-[10px] uppercase tracking-[0.16em] font-medium">
                  Explorer <ArrowRight size={12} strokeWidth={1.5} />
                </span>
              </div>
            </Link>

            <Link
              to="/ceremonie"
              className="group relative block overflow-hidden bg-[#f4f2ee] aspect-[16/10] md:col-span-2 lg:col-start-7 lg:col-span-6 lg:row-start-3 lg:aspect-[16/8]"
            >
              <ProductImage
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=85"
                alt="Collection Cérémonie ASALA"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/80 font-medium">
                  Jours d'Émotion
                </p>
                <h3
                  className="text-[24px] sm:text-[28px] font-normal leading-tight mt-1"
                  style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                >
                  CÉRÉMONIE
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 border-b border-white pb-0.5 text-[10px] uppercase tracking-[0.16em] font-medium">
                  Explorer <ArrowRight size={12} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CAFTANS — FOCUS ÉDITORIAL */}
      <section className="py-14 sm:py-20 lg:py-24 border-b border-black/10">
        <div className="asala-container">
          {/* Editorial Split Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
            <div className="lg:col-span-6 aspect-[4/5] bg-[#f4f2ee] overflow-hidden">
              <ProductImage
                src="/hero-model.jpg"
                alt="Caftan Haute Couture Tunisienne"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 max-w-lg">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-stone font-medium">
                Collection Emblématique
              </p>
              <h2
                className="text-[28px] xs:text-[36px] sm:text-[48px] lg:text-[56px] font-normal leading-[1.02] text-black mt-2 sm:mt-3"
                style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
              >
                L'ART DU CAFTAN
              </h2>
              <div className="w-12 h-px bg-black my-4 sm:my-6" />
              <p
                className="text-[17px] sm:text-[22px] italic text-black font-normal leading-snug mb-4 sm:mb-5"
                style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
              >
                L'élégance tunisienne intemporelle, réinterprétée pour la femme d'aujourd'hui.
              </p>
              <p className="text-[12px] sm:text-[14px] leading-relaxed text-stone mb-6 sm:mb-8">
                Chaque caftan est pensé comme une œuvre de transmission : soies d'art, galons sfifa tissés à la main et broderies minutieuses exécutées dans nos ateliers de Tunis.
              </p>
              <Link
                to="/caftans"
                className="asala-btn w-full sm:w-auto justify-center text-center"
              >
                <span>Découvrir tous les caftans</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Caftans Product Row */}
          <ProductGrid products={caftans} columns={4} />
        </div>
      </section>

      {/* 5. JEBBAS — TRADITION & PURETÉ CONTEMPORAINE */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#faf9f6] border-b border-black/10">
        <div className="asala-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12 pb-5 sm:pb-6 border-b border-black/15">
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-stone font-medium">
                Noblesse des Matières
              </p>
              <h2
                className="text-[26px] xs:text-[32px] sm:text-[42px] lg:text-[48px] font-normal leading-[1.05] tracking-tight text-black mt-2"
                style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
              >
                JEBBAS CONTEMPORAINES
              </h2>
            </div>
            <Link
              to="/jebbas"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-medium text-black hover:text-stone transition-colors group"
            >
              <span>Voir toute la sélection Jebbas</span>
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <ProductGrid products={jebbas} columns={4} />
        </div>
      </section>

      {/* 6. CÉRÉMONIE — GRAND APPARAT */}
      <section className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-black text-white">
        <ProductImage
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=85"
          alt="Collection Cérémonie Haute Couture ASALA"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-2xl px-5 sm:px-6 text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/80 font-medium">
            Occasions d'Exception
          </p>
          <h2
            className="text-[26px] xs:text-[36px] sm:text-[54px] lg:text-[68px] font-normal leading-[1] text-white mt-3 sm:mt-4"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            L'ART DE LA CÉRÉMONIE
          </h2>
          <div className="w-12 h-px bg-white/60 mx-auto my-4 sm:my-6" />
          <p className="text-[13px] sm:text-[15px] leading-relaxed text-white/90 font-light max-w-xl mx-auto mb-6 sm:mb-8">
            Mariages, fiançailles et célébrations prestigieuses : des créations d'exception confectionnées avec patience pour sublimer vos moments inoubliables.
          </p>
          <Link
            to="/ceremonie"
            className="inline-flex items-center justify-center gap-3 border border-white bg-transparent text-white px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-white hover:text-black transition-colors w-full sm:w-auto text-center"
          >
            <span>Explorer la collection cérémonie</span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* 7. NEWSLETTER — LA LETTRE ASALA */}
      <section className="py-14 sm:py-20 bg-[#f8f7f5] border-b border-black/10">
        <div className="asala-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-stone font-medium">
                La Lettre ASALA
              </p>
              <h2
                className="text-[24px] xs:text-[28px] sm:text-[38px] font-normal leading-tight text-black mt-2"
                style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
              >
                ENTREZ DANS LA MAISON
              </h2>
              <p className="text-[12px] sm:text-[13px] text-stone mt-2">
                Nouvelles pièces, récits d'ateliers et invitations exclusives directement dans votre boîte de réception.
              </p>
            </div>

            <div className="lg:col-span-7">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 border border-black bg-white text-black text-[13px]">
                  <Check size={16} strokeWidth={2} />
                  <span>Votre inscription a bien été enregistrée. Bienvenue chez ASALA.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Entrez votre adresse email"
                    required
                    className="flex-1 bg-white border border-black px-4 py-3.5 text-[13px] text-black placeholder:text-stone focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="asala-btn-solid w-full sm:w-auto justify-center shrink-0 cursor-pointer"
                  >
                    <span>S'inscrire</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
