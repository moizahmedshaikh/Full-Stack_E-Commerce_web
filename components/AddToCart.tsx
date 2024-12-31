"use client";

import React from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: SanityImageSource;
  product_id: string
}

const AddToCart = ({
  name,
  description,
  price,
  currency,
  image,
  product_id
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    sku:product_id,
    product_id: product_id
  }
  return <Button onClick={()=>{
    addItem(product); handleCartClick();
  }}>Add To Cart</Button>;
};

export default AddToCart;

