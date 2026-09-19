import React from "react";

interface Props {
  categories: string[];
  sizes: string[];
  colors: string[];
  category: string;
  size: string;
  color: string;
  maxPrice: number;
  onCategory: (value: string) => void;
  onSize: (value: string) => void;
  onColor: (value: string) => void;
  onPrice: (value: number) => void;
  onReset: () => void;
  activeCount: number;
  className?: string;
}

const categoryLabels: Record<string, string> = {
  Caftan: "Caftans",
  Takchita: "Takchitas",
  Jebba: "Jebbas",
  Robe: "Robes",
  CÉRÉMONIE: "Cérémonie",
  Accessoire: "Accessoires",
};

const FilterSidebar: React.FC<Props> = ({
  categories,
  sizes,
  colors,
  category,
  size,
  color,
  maxPrice,
  onCategory,
  onSize,
  onColor,
  onPrice,
  onReset,
  activeCount,
  className = "",
}) => {
  return (
    <aside className={`w-full lg:w-[260px] shrink-0 space-y-8 select-none ${className}`}>
      {/* Title & Reset */}
      <div className="flex items-center justify-between pb-4 border-b border-black">
        <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-black">
          Filtres {activeCount > 0 && `(${activeCount})`}
        </span>
        {activeCount > 0 && (
          <button
            onClick={onReset}
            className="text-[10px] uppercase tracking-[0.12em] text-stone hover:text-black underline underline-offset-2 transition-colors cursor-pointer"
          >
            Réinitialiser
          </button>
        )}
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.16em] font-medium text-black mb-4">
          Catégorie
        </h3>
        <div className="space-y-2.5 text-[13px]">
          <button
            onClick={() => onCategory("")}
            className={`block text-left transition-colors cursor-pointer ${
              !category ? "text-black font-medium underline underline-offset-4" : "text-stone hover:text-black font-normal"
            }`}
          >
            Toutes les pièces
          </button>
          {categories.map((cat) => {
            const isSelected = category.toLowerCase() === cat.toLowerCase();
            const label = categoryLabels[cat] || cat;
            return (
              <button
                key={cat}
                onClick={() => onCategory(isSelected ? "" : cat)}
                className={`block text-left transition-colors cursor-pointer ${
                  isSelected ? "text-black font-medium underline underline-offset-4" : "text-stone hover:text-black font-normal"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sizes */}
      <div className="pt-6 border-t border-black/10">
        <h3 className="text-[11px] uppercase tracking-[0.16em] font-medium text-black mb-4">
          Taille
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => {
            const isSelected = size === s;
            return (
              <button
                key={s}
                onClick={() => onSize(isSelected ? "" : s)}
                className={`min-w-10 h-10 border px-2.5 text-[11px] font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-black text-white border-black"
                    : "border-black/20 text-black hover:border-black bg-transparent"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Colors */}
      <div className="pt-6 border-t border-black/10">
        <h3 className="text-[11px] uppercase tracking-[0.16em] font-medium text-black mb-4">
          Couleur
        </h3>
        <div className="space-y-2.5">
          {colors.map((c) => {
            const isSelected = color === c;
            return (
              <label
                key={c}
                className="flex items-center gap-3 text-[12px] text-stone hover:text-black cursor-pointer select-none transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onColor(isSelected ? "" : c)}
                  className="w-4 h-4 accent-black border border-black/30"
                />
                <span className={isSelected ? "text-black font-medium" : ""}>
                  {c}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price slider */}
      <div className="pt-6 border-t border-black/10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[11px] uppercase tracking-[0.16em] font-medium text-black">
            Prix Maximum
          </h3>
          <span className="text-[12px] font-medium text-black">{maxPrice} TND</span>
        </div>
        <input
          type="range"
          min="100"
          max="1000"
          step="50"
          value={maxPrice}
          onChange={(e) => onPrice(Number(e.target.value))}
          className="w-full accent-black cursor-pointer"
        />
        <div className="mt-1 flex justify-between text-[10px] text-stone">
          <span>100 TND</span>
          <span>1 000 TND</span>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
