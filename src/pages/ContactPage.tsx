import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Header */}
      <section className="border-b border-black/10 bg-[#faf9f6] py-12 lg:py-16 text-center select-none">
        <div className="asala-container">
          <span className="text-[11px] uppercase tracking-[0.2em] text-stone font-medium block mb-2">
            Service Clientèle & Conciergerie
          </span>
          <h1
            className="text-[32px] lg:text-[42px] font-normal uppercase tracking-tight text-black mb-2"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            CONTACTER LA MAISON ASALA
          </h1>
          <p className="text-[13px] text-stone font-normal max-w-lg mx-auto leading-relaxed">
            Notre équipe vous accompagne pour vos commandes, conseils de taille et demandes de confection sur-mesure.
          </p>
        </div>
      </section>

      <div className="asala-container py-12 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8 border-b lg:border-b-0 lg:border-r border-black/10 pb-8 lg:pb-0 lg:pr-12">
            <div className="space-y-7 text-[13px] text-stone font-normal leading-relaxed">
              <div>
                <h2 className="text-[11px] uppercase font-semibold text-black tracking-[0.16em] mb-2 flex items-center gap-2">
                  <MapPin size={15} strokeWidth={1.5} /> ATELIER & BOUTIQUE
                </h2>
                <p className="text-black font-medium">Maison ASALA</p>
                <p>Rue du Lac d'Annecy, Les Berges du Lac</p>
                <p>1053 Tunis, Tunisie</p>
              </div>

              <div>
                <h2 className="text-[11px] uppercase font-semibold text-black tracking-[0.16em] mb-2 flex items-center gap-2">
                  <Phone size={15} strokeWidth={1.5} /> TÉLÉPHONE & CONCIERGERIE
                </h2>
                <p>Service Clients : <span className="text-black font-medium">+216 71 000 000</span></p>
                <p>Conseils Sur-Mesure : <span className="text-black font-medium">+216 98 123 456</span></p>
                <p className="text-[11px] text-stone mt-1">Du lundi au samedi, de 10h à 19h</p>
              </div>

              <div>
                <h2 className="text-[11px] uppercase font-semibold text-black tracking-[0.16em] mb-2 flex items-center gap-2">
                  <Mail size={15} strokeWidth={1.5} /> CORRESPONDANCE
                </h2>
                <p>contact@asala.tn</p>
                <p>commandes@asala.tn</p>
              </div>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-black p-8 text-center bg-[#faf9f6] space-y-3">
                <CheckCircle2 size={36} strokeWidth={1.5} className="mx-auto text-black" />
                <h3
                  className="text-[24px] font-normal uppercase text-black"
                  style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
                >
                  Message Transmis avec Succès
                </h3>
                <p className="text-[13px] text-stone">
                  Notre service clientèle prendra contact avec vous dans un délai de 24 heures ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-[12px] uppercase tracking-[0.16em] font-semibold text-black pb-2 border-b border-black/10">
                  Transmettre un Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="+216 XX XXX XXX"
                      className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                      Objet
                    </label>
                    <select className="w-full border border-black px-4 py-3 text-[13px] outline-none bg-white cursor-pointer">
                      <option>Renseignement sur une création</option>
                      <option>Commande & Livraison en Tunisie</option>
                      <option>Demande Sur-Mesure / Cérémonie</option>
                      <option>Rendez-vous privé à l'Atelier</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                    Votre message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full border border-black px-4 py-3 text-[13px] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="asala-btn-solid py-4 px-8"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
