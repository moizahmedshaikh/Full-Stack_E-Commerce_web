"use client";

import React from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/sanity/lib/image";
import { ProductCart } from "./AddToCart";


const CheckoutNow = ({
  name,
  description,
  price,
  currency,
  image,
  product_id
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (price_id: string) => {
    checkoutSingleItem(price_id)
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: "hgfytdhg",
    product_id: product_id
  }
  return <Button variant={"secondary"} onClick={()=>{
    buyNow(product.product_id)
  }}>Buy Now</Button>;
};

export default CheckoutNow;
