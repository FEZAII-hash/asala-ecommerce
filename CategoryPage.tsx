import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductGrid from "@/components/ProductGrid";
import ProductImage from "@/components/ProductImage";
import { products } from "@/data/products";
import { Category } from "@/types";

interface Props {
  category?: Category;
}

const descriptions: Record<string, string> = {
  Caftan:
    "Des caftans d’apparat, brodés avec patience dans des étoffes choisies pour leur tombé noble et leur lumière.",
  Takchita:
    "Des ensembles majestueux où le savoir-faire ancestral rencontre une allure résolument contemporaine.",
  Jebba:
    "Lins naturels, soies sauvages et coupes épurées : la jebba tunisienne pensée pour une élégance quotidienne.",
  Robe:
    "Des silhouettes fluides et précises, imaginées pour les réceptions, cocktails et instants précieux.",
  CÉRÉMONIE:
    "Des créations haute couture destinées aux mariages, fiançailles et célébrations d’exception.",
  Accessoire:
    "Ceintures mdamma, étoles en soie sauvage et bijoux chichkhan pour sublimer chaque tenue.",
};

const categoryMap: Record<string, Category> = {
  caftans: "Caftan",
  takchitas: "Takchita",
  jebbas: "Jebba",
  robes: "Robe",
  ceremonie: "CÉRÉMONIE",
  accessoires: "Accessoire",
};

const CategoryPage: React.FC<Props> = ({ category: propCategory }) => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "").toLowerCase();
  const activeCategory =
    propCategory || categoryMap[slug] || ("Caftan" as Category);

  const [size, setSize] = useState("");
  const [sort, setSort] = useState("newest");

  const categoryProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  const availableSizes = useMemo(() => {
    return Array.from(
      new Set(categoryProducts.flatMap((product) => product.sizes))
    );
  }, [categoryProducts]);

  const visibleProducts = useMemo(() => {
    const result = categoryProducts.filter(
      (product) => !size || product.sizes.includes(size)
    );
    if (sort === "price-asc") return [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...result].sort((a, b) => b.price - a.price);
    return [...result].sort((a, b) => Number(Boolean(b.new)) - Number(Boolean(a.new)));
  }, [categoryProducts, size, sort]);

  const heroImage =
    activeCategory.toLowerCase() === "caftan"
      ? "/hero-model.jpg"
      : categoryProducts[0]?.images[0] || "/hero-model.jpg";

  const displayName =
    activeCategory === "CÉRÉMONIE" ? "CÉRÉMONIE" : activeCategory.toUpperCase() + "S";

  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Category Banner */}
      <section className="relative min-h-[360px] lg:min-h-[460px] flex items-end overflow-hidden bg-[#f4f2ee]">
        <ProductImage
          src={heroImage}
          alt={activeCategory}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        
        <div className="relative z-10 asala-container pb-12 lg:pb-16 text-white">
          <nav className="text-[10px] uppercase tracking-[0.16em] text-white/80 mb-4 flex items-center gap-2">
            <Link to="/" className="text-white hover:text-white/70 transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link to="/collection" className="text-white hover:text-white/70 transition-colors">
              Collection
            </Link>
            <span>/</span>
            <span className="text-white/90">{activeCategory}</span>
          </nav>
          
          <h1
            className="text-[44px] sm:text-[60px] lg:text-[76px] font-normal leading-none tracking-tight text-white mt-4"
            style={{ fontFamily: '"Bodoni Moda", Georgia, serif' }}
          >
            {displayName}
          </h1>
          
          <p className="max-w-xl mt-4 text-[13px] sm:text-[14px] leading-relaxed text-white/90 font-light">
            {descriptions[activeCategory] || descriptions.Caftan}
          </p>
        </div>
      </section>

      {/* Filter and Products Section */}
      <section className="asala-container py-8 lg:py-14">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-5 border-b border-black/15">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-3 text-[11px] uppercase tracking-[0.16em] text-stone font-medium">
              <span className="text-black font-semibold">{visibleProducts.length}</span> pièces
            </span>
            {availableSizes.map((item) => (
              <button
                key={item}
                onClick={() => setSize(size === item ? "" : item)}
                className={`min-w-9 h-8 border px-2.5 text-[11px] font-medium transition-colors cursor-pointer ${
                  size === item
                    ? "bg-black border-black text-white"
                    : "border-black/20 text-black hover:border-black bg-transparent"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em]">
            <span className="text-stone">Trier par</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border-b border-black pb-1 bg-transparent outline-none cursor-pointer"
            >
              <option value="newest">Nouveautés</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="pt-10">
          {visibleProducts.length > 0 ? (
            <ProductGrid products={visibleProducts} columns={4} />
          ) : (
            <div className="py-20 text-center border border-black/10 p-8">
              <p className="text-[14px] text-stone">
                Aucune création ne correspond à la taille sélectionnée.
              </p>
              <button
                onClick={() => setSize("")}
                className="asala-btn mt-6"
              >
                Afficher toutes les tailles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
