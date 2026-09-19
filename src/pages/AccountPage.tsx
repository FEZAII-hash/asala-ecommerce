import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Package, MapPin, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/ProductImage";

const AccountPage: React.FC = () => {
  const { orders, favorites } = useCart();
  const [activeTab, setActiveTab] = useState<"orders" | "profile" | "addresses" | "favorites">("orders");

  const [profile, setProfile] = useState({
    firstName: "Sarra",
    lastName: "Ben Salem",
    email: "sarra.bensalem@gmail.com",
    phone: "+216 98 123 456",
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const displayOrders =
    orders.length > 0
      ? orders
      : [
          {
            id: "ASALA-892145",
            date: "14 Septembre 2026",
            status: "Livré",
            items: [],
            shippingAddress: {
              firstName: "Sarra",
              lastName: "Ben Salem",
              email: "sarra.bensalem@gmail.com",
              phone: "+216 98 123 456",
              address: "15 Avenue Habib Bourguiba, Apt 4B",
              city: "Tunis",
              governorate: "Tunis",
              postalCode: "1001",
            },
            shippingMethod: "standard",
            shippingFee: 0,
            paymentMethod: "card",
            subtotal: 490,
            discount: 0,
            total: 490,
          },
        ];

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Header */}
      <section className="border-b border-black/10 bg-[#faf9f6] py-10 lg:py-14 text-center">
        <div className="asala-container">
          <span className="text-[11px] uppercase tracking-[0.2em] text-stone font-medium block mb-1">
            Espace Privilège
          </span>
          <h1
            className="text-[34px] sm:text-[42px] font-normal uppercase tracking-tight text-black"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            MON COMPTE
          </h1>
          <p className="text-[12px] text-stone mt-1">
            Bienvenue, {profile.firstName} {profile.lastName}
          </p>
        </div>
      </section>

      <div className="asala-container py-10 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Navigation Tabs (4 cols) */}
          <aside className="md:col-span-4 border border-black p-4 space-y-1 bg-white">
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full text-left px-4 py-3.5 text-[11px] uppercase tracking-[0.14em] font-medium flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === "orders" ? "bg-black text-white" : "hover:bg-black/5 text-black"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Package size={15} strokeWidth={1.5} /> Mes Commandes ({displayOrders.length})
              </span>
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full text-left px-4 py-3.5 text-[11px] uppercase tracking-[0.14em] font-medium flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === "profile" ? "bg-black text-white" : "hover:bg-black/5 text-black"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <User size={15} strokeWidth={1.5} /> Mon Profil
              </span>
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>

            <button
              onClick={() => setActiveTab("addresses")}
              className={`w-full text-left px-4 py-3.5 text-[11px] uppercase tracking-[0.14em] font-medium flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === "addresses" ? "bg-black text-white" : "hover:bg-black/5 text-black"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <MapPin size={15} strokeWidth={1.5} /> Carnet d'Adresses
              </span>
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>

            <button
              onClick={() => setActiveTab("favorites")}
              className={`w-full text-left px-4 py-3.5 text-[11px] uppercase tracking-[0.14em] font-medium flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === "favorites" ? "bg-black text-white" : "hover:bg-black/5 text-black"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Heart size={15} strokeWidth={1.5} /> Coups de Cœur ({favorites.length})
              </span>
              <ArrowRight size={13} strokeWidth={1.5} />
            </button>
          </aside>

          {/* Right Content Area (8 cols) */}
          <div className="md:col-span-8">
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <h2 className="text-[12px] uppercase tracking-[0.16em] font-semibold text-black pb-3 border-b border-black/10">
                  Historique de vos commandes
                </h2>

                <div className="space-y-6">
                  {displayOrders.map((order) => (
                    <div key={order.id} className="border border-black p-6 bg-white space-y-4">
                      <div className="flex flex-wrap justify-between items-center gap-2 pb-4 border-b border-black/10 text-[12px]">
                        <div>
                          <span className="text-stone">Réf : </span>
                          <strong className="text-black font-semibold">{order.id}</strong>
                          <span className="text-stone ml-3">• {order.date}</span>
                        </div>
                        <span className="bg-black text-white px-3 py-1 text-[10px] uppercase tracking-widest font-medium">
                          {order.status}
                        </span>
                      </div>

                      <div className="text-[12px] text-stone space-y-1">
                        <p>
                          <strong className="text-black font-medium">Destinataire :</strong>{" "}
                          {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                        </p>
                        <p>
                          <strong className="text-black font-medium">Adresse :</strong>{" "}
                          {order.shippingAddress.address}, {order.shippingAddress.city} (
                          {order.shippingAddress.governorate})
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-black/10">
                        <span className="text-[11px] uppercase tracking-wider text-stone font-medium">
                          Total réglé
                        </span>
                        <span className="text-[16px] font-semibold text-black">
                          {order.total} TND
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="border border-black p-6 sm:p-8 bg-white">
                <h2 className="text-[12px] uppercase tracking-[0.16em] font-semibold text-black pb-3 border-b border-black/10 mb-6">
                  Modifier mes informations
                </h2>

                {savedSuccess && (
                  <div className="flex items-center gap-2 p-3 mb-6 bg-[#faf9f6] border border-black text-[12px] text-black">
                    <CheckCircle2 size={16} />
                    <span>Vos informations ont été mises à jour avec succès.</span>
                  </div>
                )}

                <form onSubmit={handleProfileSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                        Prénom
                      </label>
                      <input
                        type="text"
                        value={profile.firstName}
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                        className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                        Nom
                      </label>
                      <input
                        type="text"
                        value={profile.lastName}
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                        className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                      Numéro de Téléphone
                    </label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="asala-btn-solid mt-4 py-3.5"
                  >
                    Enregistrer les modifications
                  </button>
                </form>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <div className="border border-black p-6 sm:p-8 bg-white space-y-6">
                <h2 className="text-[12px] uppercase tracking-[0.16em] font-semibold text-black pb-3 border-b border-black/10">
                  Adresse Principale de Livraison
                </h2>

                <div className="bg-[#faf9f6] p-5 border border-black/15 text-[13px] space-y-1 text-stone">
                  <p className="font-semibold text-black uppercase tracking-wider text-[11px] mb-2">
                    Résidence Principale
                  </p>
                  <p className="text-black font-medium">
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p>15 Avenue Habib Bourguiba, Apt 4B</p>
                  <p>1001 Tunis — Tunisie</p>
                  <p className="pt-2">{profile.phone}</p>
                </div>
              </div>
            )}

            {/* Favorites Tab */}
            {activeTab === "favorites" && (
              <div className="space-y-6">
                <h2 className="text-[12px] uppercase tracking-[0.16em] font-semibold text-black pb-3 border-b border-black/10">
                  Vos pièces favorites ({favorites.length})
                </h2>

                {favorites.length === 0 ? (
                  <p className="text-[13px] text-stone py-8 text-center">
                    Aucune pièce enregistrée pour le moment.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                    {favorites.map((p) => (
                      <Link
                        key={p.id}
                        to={`/product/${p.id}`}
                        className="group flex flex-col"
                      >
                        <div className="aspect-[3/4] bg-[#f4f2ee] overflow-hidden mb-2">
                          <ProductImage
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <span className="text-[12px] uppercase font-medium text-black truncate">
                          {p.name}
                        </span>
                        <span className="text-[12px] text-stone mt-0.5">
                          {p.price} TND
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
