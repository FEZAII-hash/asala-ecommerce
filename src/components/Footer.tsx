import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Instagram, Facebook, Check, ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-black text-white pt-16 pb-12 select-none">
      <div className="asala-container">
        {/* Main 5 columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/15">
          
          {/* Col 1: ASALA Brandmark & Vision */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo size="md" inverted />
            </div>
            <p className="text-[12px] text-white/70 font-light leading-relaxed mb-4">
              Maison de haute couture et mode traditionnelle tunisienne féminine. L'alliance intemporelle de notre patrimoine et d'une esthétique contemporaine épurée.
            </p>
            <div className="text-[11px] text-white/60 space-y-1 font-normal">
              <p>• Livraison offerte dès 400 TND</p>
              <p>• Retours & échanges sous 14 jours</p>
              <p>• Ateliers de confection à Tunis</p>
            </div>
          </div>

          {/* Col 2: À PROPOS */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] font-medium text-white mb-5">
              À PROPOS
            </h4>
            <ul className="space-y-3 text-[12px] text-white/70 font-light">
              <li>
                <Link to="/a-propos" className="hover:text-white transition-colors">
                  La Maison ASALA
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-white transition-colors">
                  Savoir-Faire Artisanal
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-white transition-colors">
                  Catalogue Complet
                </Link>
              </li>
              <li>
                <Link to="/nouveautes" className="hover:text-white transition-colors">
                  Nouvelle Saison
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Ateliers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: SERVICE CLIENT */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] font-medium text-white mb-5">
              SERVICE CLIENT
            </h4>
            <ul className="space-y-3 text-[12px] text-white/70 font-light">
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Livraison en Tunisie
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Retours & Échanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Paiement à la Livraison
                </Link>
              </li>
              <li>
                <Link to="/compte" className="hover:text-white transition-colors">
                  Suivi de Commande
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Questions Fréquentes (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: SUIVEZ-NOUS */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] font-medium text-white mb-5">
              SUIVEZ-NOUS
            </h4>
            <ul className="space-y-3 text-[12px] text-white/70 font-light">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram size={14} strokeWidth={1.5} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Facebook size={14} strokeWidth={1.5} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-[13px] font-serif font-bold leading-none">P</span>
                  <span>Pinterest</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-white/60 leading-relaxed">
              <p>Service Conciergerie :</p>
              <p className="text-white font-medium mt-0.5">+216 71 000 000</p>
              <p className="text-white/80">contact@asala.tn</p>
            </div>
          </div>

          {/* Col 5: NEWSLETTER */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] font-medium text-white mb-5">
              NEWSLETTER
            </h4>
            <p className="text-[12px] text-white/70 font-light leading-relaxed mb-4">
              Recevez en avant-première nos nouvelles collections, défilés et invitations privées.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-white/10 border border-white/20 text-[11px] text-white">
                <Check size={14} />
                <span>Merci de votre inscription à la Maison ASALA.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex border-b border-white pb-2">
                  <input
                    type="email"
                    required
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-[12px] text-white outline-none placeholder:text-white/50 border-none p-0"
                  />
                  <button
                    type="submit"
                    className="text-[11px] uppercase font-medium tracking-wider text-white hover:text-white/70 pl-3 transition-colors shrink-0 cursor-pointer"
                  >
                    OK
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/50 font-light">
          <p>© {new Date().getFullYear()} ASALA • Maison de Couture Traditionnelle Tunisienne. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/faq" className="hover:text-white transition-colors">
              Mentions Légales
            </Link>
            <Link to="/faq" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </Link>
            <Link to="/faq" className="hover:text-white transition-colors">
              Conditions Générales de Vente
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
