import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Truck,
  CreditCard,
  Banknote,
  ArrowRight,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Order, ShippingAddress } from "@/types";
import ProductImage from "@/components/ProductImage";

const TUNISIAN_GOVERNORATES = [
  "Tunis",
  "Ariana",
  "Ben Arous",
  "Manouba",
  "Nabeul",
  "Zaghouan",
  "Bizerte",
  "Béja",
  "Jendouba",
  "Le Kef",
  "Siliana",
  "Sousse",
  "Monastir",
  "Mahdia",
  "Sfax",
  "Kairouan",
  "Kasserine",
  "Sidi Bouzid",
  "Gabès",
  "Médenine",
  "Tataouine",
  "Gafsa",
  "Tozeur",
  "Kébili",
];

const CheckoutPage: React.FC = () => {
  const { cart, promoCode, promoDiscount, addOrder, freeShippingThreshold } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(1);
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);

  // Form State
  const [formData, setFormData] = useState<ShippingAddress>({
    firstName: "Sarra",
    lastName: "Ben Salem",
    email: "sarra.bensalem@gmail.com",
    phone: "+216 98 123 456",
    address: "15 Avenue Habib Bourguiba",
    apartment: "Appartement 4B",
    city: "Tunis",
    governorate: "Tunis",
    postalCode: "1001",
  });

  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("cod");

  // Card details mock
  const [cardData, setCardData] = useState({
    number: "•••• •••• •••• 4242",
    name: "SARRA BEN SALEM",
    expiry: "12/28",
    cvv: "•••",
  });

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * promoDiscount);
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const baseShipping = isFreeShipping ? 0 : 15;
  const shippingFee = shippingMethod === "express" ? baseShipping + 10 : baseShipping;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFinalizeOrder = () => {
    const newOrder: Order = {
      id: `ASALA-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      status: "En préparation",
      items: [...cart],
      shippingAddress: { ...formData },
      shippingMethod,
      shippingFee,
      paymentMethod,
      subtotal,
      discount: discountAmount,
      total,
    };

    addOrder(newOrder);
    setCreatedOrder(newOrder);
    setStep(5);
  };

  if (cart.length === 0 && step !== 5) {
    return (
      <div className="asala-container py-24 text-center">
        <h1
          className="text-2xl font-normal uppercase text-black mb-4"
          style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
        >
          Votre panier est vide
        </h1>
        <p className="text-stone text-[13px] mb-6 font-normal">
          Ajoutez des pièces à votre sélection pour procéder à la commande.
        </p>
        <Link to="/collection" className="asala-btn inline-flex">
          Découvrir la collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Stepper Header */}
      <section className="border-b border-black/10 bg-[#faf9f6] py-8 lg:py-10 text-center select-none">
        <div className="asala-container">
          <span className="text-[10px] uppercase tracking-[0.24em] text-stone font-medium block mb-1">
            Commande Sécurisée
          </span>
          <h1
            className="text-[28px] lg:text-[34px] font-normal uppercase tracking-tight text-black"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            FINALISER MA COMMANDE
          </h1>

          {/* Stepper Steps */}
          {step < 5 && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 mt-4 sm:mt-6 text-[10px] sm:text-[11px] uppercase tracking-[0.08em] sm:tracking-[0.14em]">
              <span className={step >= 1 ? "text-black font-semibold border-b border-black pb-0.5" : "text-stone/60 font-normal"}>
                1. Coordonnées
              </span>
              <span className="text-stone/40">→</span>
              <span className={step >= 2 ? "text-black font-semibold border-b border-black pb-0.5" : "text-stone/60 font-normal"}>
                2. Adresse
              </span>
              <span className="text-stone/40">→</span>
              <span className={step >= 3 ? "text-black font-semibold border-b border-black pb-0.5" : "text-stone/60 font-normal"}>
                3. Livraison
              </span>
              <span className="text-stone/40">→</span>
              <span className={step >= 4 ? "text-black font-semibold border-b border-black pb-0.5" : "text-stone/60 font-normal"}>
                4. Paiement
              </span>
            </div>
          )}
        </div>
      </section>

      <div className="asala-container py-10 lg:py-14">
        {step === 5 && createdOrder ? (
          /* Step 5: Confirmation Success */
          <div className="max-w-2xl mx-auto border border-black p-8 sm:p-12 text-center bg-white">
            <CheckCircle size={48} strokeWidth={1.2} className="mx-auto text-black mb-4" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-stone block mb-1 font-medium">
              Commande Enregistrée
            </span>
            <h2
              className="text-[30px] font-normal uppercase tracking-tight text-black mb-2"
              style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
            >
              MERCI POUR VOTRE CONFIANCE
            </h2>
            <p className="text-[13px] text-stone font-normal mb-8">
              Référence de commande :{" "}
              <strong className="text-black font-semibold">{createdOrder.id}</strong>
            </p>

            <div className="bg-[#faf9f6] p-6 border border-black/10 text-left text-[12px] space-y-3 mb-8">
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span className="text-stone">Destinataire :</span>
                <span className="font-medium text-black">
                  {createdOrder.shippingAddress.firstName} {createdOrder.shippingAddress.lastName}
                </span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span className="text-stone">Adresse de livraison :</span>
                <span className="font-medium text-black text-right">
                  {createdOrder.shippingAddress.address}, {createdOrder.shippingAddress.city} ({createdOrder.shippingAddress.governorate})
                </span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span className="text-stone">Mode de règlement :</span>
                <span className="font-medium text-black">
                  {createdOrder.paymentMethod === "cod"
                    ? "Paiement en espèces à la livraison"
                    : "Carte bancaire (Sécurisé)"}
                </span>
              </div>
              <div className="flex justify-between pt-1 text-[14px]">
                <span className="font-semibold text-black">Total de la commande :</span>
                <span className="font-semibold text-black">{createdOrder.total} TND</span>
              </div>
            </div>

            <p className="text-[13px] text-stone font-normal mb-8 max-w-md mx-auto leading-relaxed">
              Un SMS de confirmation a été transmis au{" "}
              <span className="text-black font-medium">{createdOrder.shippingAddress.phone}</span>. Notre atelier prépare votre commande avec le plus grand soin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/compte" className="asala-btn-solid">
                Suivre mes commandes
              </Link>
              <Link to="/" className="asala-btn">
                Retour à la boutique
              </Link>
            </div>
          </div>
        ) : (
          /* Steps 1 to 4 with Side Summary */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Coordonnées */}
              {step === 1 && (
                <div className="border border-black p-4 sm:p-6 lg:p-8 space-y-6 bg-white">
                  <h2 className="text-[12px] uppercase tracking-[0.16em] font-semibold text-black pb-3 border-b border-black/15">
                    1. Vos Coordonnées
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                      Numéro de téléphone tunisien *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+216 XX XXX XXX"
                      className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                      required
                    />
                    <p className="text-[11px] text-stone mt-1.5">
                      Indispensable pour la prise de contact par le coursier lors de la livraison.
                    </p>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full asala-btn-solid py-4 justify-center mt-6"
                  >
                    <span>Continuer vers l'adresse de livraison</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              )}

              {/* Step 2: Adresse de livraison */}
              {step === 2 && (
                <div className="border border-black p-6 sm:p-8 space-y-6 bg-white">
                  <div className="flex justify-between items-center pb-3 border-b border-black/15">
                    <h2 className="text-[12px] uppercase tracking-[0.16em] font-semibold text-black">
                      2. Adresse de Livraison
                    </h2>
                    <button
                      onClick={() => setStep(1)}
                      className="text-[11px] text-stone hover:text-black uppercase underline cursor-pointer"
                    >
                      Modifier coordonnées
                    </button>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                      Adresse (Rue, numéro, quartier) *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                      Complément d'adresse (Bâtiment, étage, etc.)
                    </label>
                    <input
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleInputChange}
                      className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                        Ville *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                        Gouvernorat *
                      </label>
                      <select
                        name="governorate"
                        value={formData.governorate}
                        onChange={handleInputChange}
                        className="w-full border border-black px-4 py-3 text-[13px] outline-none bg-white cursor-pointer"
                        required
                      >
                        {TUNISIAN_GOVERNORATES.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1.5 block">
                        Code Postal
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full border border-black px-4 py-3 text-[13px] outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="asala-btn py-3.5"
                    >
                      Retour
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 asala-btn-solid py-3.5 justify-center"
                    >
                      <span>Continuer vers le mode d'expédition</span>
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Mode de livraison */}
              {step === 3 && (
                <div className="border border-black p-6 sm:p-8 space-y-6 bg-white">
                  <div className="flex justify-between items-center pb-3 border-b border-black/15">
                    <h2 className="text-[12px] uppercase tracking-[0.16em] font-semibold text-black">
                      3. Mode de Livraison
                    </h2>
                    <button
                      onClick={() => setStep(2)}
                      className="text-[11px] text-stone hover:text-black uppercase underline cursor-pointer"
                    >
                      Modifier adresse
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Standard */}
                    <label
                      onClick={() => setShippingMethod("standard")}
                      className={`flex items-start gap-4 p-5 border cursor-pointer transition-all ${
                        shippingMethod === "standard"
                          ? "border-black bg-[#faf9f6]"
                          : "border-black/20 hover:border-black/50"
                      }`}
                    >
                      <input
                        type="radio"
                        checked={shippingMethod === "standard"}
                        onChange={() => setShippingMethod("standard")}
                        className="w-4 h-4 accent-black mt-0.5"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-[12px] font-semibold uppercase text-black">
                            Livraison Standard (Aramex Tunisie)
                          </span>
                          <span className="text-[12px] font-semibold text-black">
                            {isFreeShipping ? "Offerte" : "15 TND"}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone mt-1">
                          Acheminement sous 24h à 48h sur Grand Tunis, 48h à 72h sur toute la Tunisie.
                        </p>
                      </div>
                    </label>

                    {/* Express */}
                    <label
                      onClick={() => setShippingMethod("express")}
                      className={`flex items-start gap-4 p-5 border cursor-pointer transition-all ${
                        shippingMethod === "express"
                          ? "border-black bg-[#faf9f6]"
                          : "border-black/20 hover:border-black/50"
                      }`}
                    >
                      <input
                        type="radio"
                        checked={shippingMethod === "express"}
                        onChange={() => setShippingMethod("express")}
                        className="w-4 h-4 accent-black mt-0.5"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-[12px] font-semibold uppercase text-black">
                            Livraison Express Prestige (Sous 24h)
                          </span>
                          <span className="text-[12px] font-semibold text-black">
                            25 TND
                          </span>
                        </div>
                        <p className="text-[11px] text-stone mt-1">
                          Traitement prioritaire en atelier et remise en main propre sécurisée.
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="asala-btn py-3.5"
                    >
                      Retour
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="flex-1 asala-btn-solid py-3.5 justify-center"
                    >
                      <span>Continuer vers le paiement</span>
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Paiement */}
              {step === 4 && (
                <div className="border border-black p-6 sm:p-8 space-y-6 bg-white">
                  <div className="flex justify-between items-center pb-3 border-b border-black/15">
                    <h2 className="text-[12px] uppercase tracking-[0.16em] font-semibold text-black">
                      4. Mode de Paiement
                    </h2>
                    <button
                      onClick={() => setStep(3)}
                      className="text-[11px] text-stone hover:text-black uppercase underline cursor-pointer"
                    >
                      Modifier livraison
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* COD Option */}
                    <label
                      onClick={() => setPaymentMethod("cod")}
                      className={`flex items-start gap-4 p-5 border cursor-pointer transition-all ${
                        paymentMethod === "cod"
                          ? "border-black bg-[#faf9f6]"
                          : "border-black/20 hover:border-black/50"
                      }`}
                    >
                      <input
                        type="radio"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="w-4 h-4 accent-black mt-0.5"
                      />
                      <Banknote size={20} strokeWidth={1.5} className="text-black shrink-0" />
                      <div className="flex-1">
                        <span className="text-[12px] font-semibold uppercase text-black block">
                          Paiement en espèces à la livraison (COD)
                        </span>
                        <p className="text-[11px] text-stone mt-1">
                          Réglez votre commande en espèces directement auprès du coursier lors de la remise de votre colis.
                        </p>
                      </div>
                    </label>

                    {/* Card Option */}
                    <label
                      onClick={() => setPaymentMethod("card")}
                      className={`flex items-start gap-4 p-5 border cursor-pointer transition-all ${
                        paymentMethod === "card"
                          ? "border-black bg-[#faf9f6]"
                          : "border-black/20 hover:border-black/50"
                      }`}
                    >
                      <input
                        type="radio"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="w-4 h-4 accent-black mt-0.5"
                      />
                      <CreditCard size={20} strokeWidth={1.5} className="text-black shrink-0" />
                      <div className="flex-1">
                        <span className="text-[12px] font-semibold uppercase text-black block">
                          Carte bancaire (Visa / Mastercard / CIB Tunisie)
                        </span>
                        <p className="text-[11px] text-stone mt-1">
                          Paiement en ligne sécurisé avec chiffrement bancaire SSL 256 bits.
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Card fields */}
                  {paymentMethod === "card" && (
                    <div className="border border-black/20 p-5 bg-[#faf9f6] space-y-4">
                      <div>
                        <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1 block">
                          Numéro de carte
                        </label>
                        <input
                          type="text"
                          value={cardData.number}
                          onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                          className="w-full border border-black px-3.5 py-2.5 text-[13px] bg-white outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1 block">
                            Expiration
                          </label>
                          <input
                            type="text"
                            value={cardData.expiry}
                            onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                            className="w-full border border-black px-3.5 py-2.5 text-[13px] bg-white outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] uppercase tracking-[0.14em] text-stone font-medium mb-1 block">
                            Cryptogramme (CVV)
                          </label>
                          <input
                            type="text"
                            value={cardData.cvv}
                            onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                            className="w-full border border-black px-3.5 py-2.5 text-[13px] bg-white outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setStep(3)}
                      className="asala-btn py-4"
                    >
                      Retour
                    </button>
                    <button
                      onClick={handleFinalizeOrder}
                      className="flex-1 asala-btn-solid py-4 justify-center"
                    >
                      <span>Confirmer la commande ({total} TND)</span>
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Side Order Summary (5 cols) */}
            <div className="lg:col-span-5">
              <div className="border border-black p-6 sm:p-8 bg-[#faf9f6]">
                <h3 className="text-[12px] uppercase tracking-[0.18em] font-semibold text-black mb-6 pb-3 border-b border-black/10">
                  Votre Panier ({cart.reduce((total, i) => total + i.quantity, 0)})
                </h3>

                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 mb-6">
                  {cart.map((item) => (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="flex gap-3.5 items-center pb-4 border-b border-black/10"
                    >
                      <div className="w-14 h-[72px] bg-[#f4f2ee] shrink-0 overflow-hidden">
                        <ProductImage
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] uppercase font-medium text-black truncate">
                          {item.product.name}
                        </p>
                        <p className="text-[10px] text-stone uppercase mt-0.5">
                          Taille: {item.size || "Standard"} • Qté: {item.quantity}
                        </p>
                        <p className="text-[12px] font-semibold text-black mt-1">
                          {item.product.price * item.quantity} TND
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5 text-[12px] pb-5 border-b border-black/10 font-normal">
                  <div className="flex justify-between text-stone">
                    <span>Sous-total articles</span>
                    <span className="text-black font-medium">{subtotal} TND</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-black">
                      <span>Remise ({promoCode})</span>
                      <span>-{discountAmount} TND</span>
                    </div>
                  )}
                  <div className="flex justify-between text-stone">
                    <span>Livraison ({shippingMethod === "express" ? "Express" : "Standard"})</span>
                    <span className="text-black font-medium">
                      {shippingFee === 0 ? "Offerte" : `${shippingFee} TND`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline pt-4">
                  <span className="text-[13px] uppercase tracking-[0.16em] font-semibold text-black">
                    Total
                  </span>
                  <div className="text-right">
                    <span className="text-[22px] font-semibold text-black">
                      {total} TND
                    </span>
                    <p className="text-[10px] text-stone mt-0.5">TVA comprise</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-stone mt-6 pt-4 border-t border-black/10">
                  <Lock size={13} strokeWidth={1.5} className="text-black shrink-0" />
                  <span>Chiffrement SSL 256 bits de bout en bout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
