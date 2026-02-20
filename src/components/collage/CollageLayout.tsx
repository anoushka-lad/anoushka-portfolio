"use client";

import { collageImages } from "./collageData";
import CollageImage from "./CollageImage";
import CollageCenterText from "./CollageCenterText";

export default function CollageLayout() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundColor: '#FFFCF6',
        backgroundImage: "url('/images/paper-texture-bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'luminosity',
      }}
    >
      {collageImages.map((image) => (
        <CollageImage key={image.id} data={image} />
      ))}
      <CollageCenterText />
    </div>
  );
}
