import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { Heart } from "../../icons/Heart";
import { Share22 } from "../../icons/Share22";
import "./style.css";

export const ProductCardScreen = () => {
  return (
    <ProductCard
      className="product-card-instance"
      imageIconWrapperIcon={<Share22 className="icon-instance-node-4" color="#2B2B2B" />}
      override={<Heart className="icon-instance-node-4" />}
    />
  );
};
