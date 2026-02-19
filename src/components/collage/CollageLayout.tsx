"use client";

import { collageImages } from "./collageData";
import CollageImage from "./CollageImage";
import CollageCenterText from "./CollageCenterText";

export default function CollageLayout() {
  // TODO: mobile breakpoint handling
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundColor: '#FFFCF6' }}
    >
      {collageImages.map((image) => (
        <CollageImage key={image.id} data={image} />
      ))}
      <CollageCenterText />
    </div>
  );
}
