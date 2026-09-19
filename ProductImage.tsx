import React, { useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const ProductImage: React.FC<Props> = ({ fallbackSrc = "/hero-model.jpg", src, alt = "Création ASALA", onError, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt}
      onError={(event) => {
        if (imageSrc !== fallbackSrc) setImageSrc(fallbackSrc);
        onError?.(event);
      }}
    />
  );
};

export default ProductImage;
