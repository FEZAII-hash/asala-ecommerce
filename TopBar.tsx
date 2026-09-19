import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Instagram, Facebook } from "lucide-react";

const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#f8f7f5] text-black border-b border-black/10 select-none">
      <div className="asala-container flex items-center justify-between h-9 text-[10px] sm:text-[11px] tracking-[0.14em] uppercase">
        {/* Left message */}
        <div className="flex items-center gap-2 text-stone font-normal truncate">
          <MapPin size={12} strokeWidth={1.5} className="text-black shrink-0" />
          <span className="truncate">
            Livraison offerte dans toute la Tunisie à partir de 400 TND
          </span>
        </div>

        {/* Right quick links and socials */}
        <div className="hidden md:flex items-center gap-5 text-black">
          <Link
            to="/a-propos"
            className="hover:text-stone transition-colors font-medium"
          >
            À propos
          </Link>
          <span className="text-black/20">|</span>
          <Link
            to="/contact"
            className="hover:text-stone transition-colors font-medium"
          >
            Contact
          </Link>
          <span className="text-black/20">|</span>
          <Link
            to="/faq"
            className="hover:text-stone transition-colors font-medium"
          >
            FAQ
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-3.5 pl-4 border-l border-black/15">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram ASALA"
              className="text-black hover:opacity-60 transition-opacity"
            >
              <Instagram size={13} strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook ASALA"
              className="text-black hover:opacity-60 transition-opacity"
            >
              <Facebook size={13} strokeWidth={1.5} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest ASALA"
              className="text-black hover:opacity-60 transition-opacity"
            >
              <span className="text-[12px] font-serif font-bold leading-none">P</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
