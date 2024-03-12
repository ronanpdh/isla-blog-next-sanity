import markdownStyles from "./markdown-styles.module.css";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../lib/sanity";
import getImageDimensions from '@sanity/image-url';
import Image from "next/image";


const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value)
  
  return (
    <Image
      width={800}
      height={800}
      src={urlForImage()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
      
    />
  )
}

// Set portable text components for image 
const components = {
  types: {
    image: ImageComponent,
  },
}


export default function PostBody({ content }) {
  return (
    <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
      <PortableText value={content} components={components} />
    </div>
  );
}
