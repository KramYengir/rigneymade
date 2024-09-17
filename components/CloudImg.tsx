"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

interface PropsInterface {
  src: string;
  alt: string;
  className: string;
}

const CloudImg = ({ src, alt, className }: PropsInterface) => {
  return (
    <CldImage
      src={src}
      width="960"
      height="540"
      alt={alt}
      className={className}
    />
  );
};

export default CloudImg;
