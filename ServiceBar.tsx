import React from "react";
import { Truck, RotateCcw, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "LIVRAISON RAPIDE",
    subtitle: "Partout en Tunisie",
  },
  {
    icon: RotateCcw,
    title: "RETOURS FACILES",
    subtitle: "Sous 14 jours",
  },
  {
    icon: ShieldCheck,
    title: "PAIEMENT SÉCURISÉ",
    subtitle: "100% sécurisé",
  },
];

const ServiceBar: React.FC = () => {
  return (
    <section className="w-full h-auto sm:h-[90px] bg-white border-b border-black/10 select-none">
      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-3 divide-y divide-black/10 sm:divide-y-0">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`flex min-h-[68px] items-center justify-center gap-3.5 px-4 py-2 sm:min-h-0 sm:py-4 ${
                index > 0 ? "sm:border-l border-black/10" : ""
              }`}
            >
              <Icon size={24} strokeWidth={1.3} className="shrink-0 text-black sm:w-[26px] sm:h-[26px]" />
              <div className="text-left">
                <h3 className="text-[11px] uppercase tracking-[0.14em] font-medium text-black">
                  {service.title}
                </h3>
                <p className="text-[11px] text-stone mt-0.5 font-normal">
                  {service.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceBar;
