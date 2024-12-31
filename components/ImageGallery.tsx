"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

interface imgAppProps {
  images: string[];
}

const ImageGallery = ({ images }: imgAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: string) => {
    setBigImage(image);
  };

  return (
    <div className="grid lg:grid-cols-5 gap-4">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((img: string, idx: number) => (
          <div key={idx} className="overflow-hidden rounded-lg  bg-gray-100">
            <Image
              onClick={() => {
                handleSmallImageClick(img);
              }}
              src={urlFor(img).url()}
              alt="detailed picture"
              width={1000}
              height={1000}
              className="object-cover object-center hover:opacity-75 cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="detailed picture"
          height={1000}
          width={1000}
          className="object-cover object-center w-full h-full"
        />
        <span className="absolute top-0 left-0 bg-red-500 uppercase px-3 py-1.5 tracking-wider text-white rounded-br-lg">
          Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;
