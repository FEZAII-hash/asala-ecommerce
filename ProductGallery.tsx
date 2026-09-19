import React, { useState } from "react";
import ProductImage from "@/components/ProductImage";

interface Props {
  images: string[];
  name: string;
  isNew?: boolean;
}

const ProductGallery: React.FC<Props> = ({ images, name, isNew }) => {
  const [active, setActive] = useState(0);
  const currentImage = images[active] || images[0] || "/hero-model.jpg";

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 w-full">
      {/* Vertical thumbnails on the left */}
      {images.length > 1 && (
        <div className="flex sm:flex-col gap-3 overflow-x-auto sm:w-20 shrink-0 select-none no-scrollbar">
          {images.map((image, index) => {
            const isSelected = active === index;
            return (
              <button
                key={`${image}-${index}`}
                onClick={() => setActive(index)}
                aria-label={`Afficher la photographie ${index + 1}`}
                className={`w-16 sm:w-full shrink-0 aspect-[3/4] overflow-hidden border cursor-pointer transition-all ${
                  isSelected
                    ? "border-black opacity-100"
                    : "border-black/15 opacity-55 hover:opacity-100"
                }`}
              >
                <ProductImage
                  src={image}
                  alt={`${name} miniature ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Main large image */}
      <div className="relative flex-1 aspect-[3/4] overflow-hidden bg-[#f4f2ee] select-none">
        <ProductImage
          src={currentImage}
          alt={name}
          loading="eager"
          className="w-full h-full object-cover object-center transition-all duration-300"
        />
        {isNew && (
          <span className="absolute top-4 left-4 bg-black text-white px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] font-medium select-none">
            Nouveau
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
