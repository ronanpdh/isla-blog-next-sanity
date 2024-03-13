import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";
import { isla } from '../public/assets/isla-image.png';

export default function Meta() {
  const description = `ISLA: I started Life as. We delve into the origins and evolutions of creators, makers, designers and entrepreneurs exploring their journeys from inception to their current state`; 
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={description}
      />
      <meta property="og:image" content="https://www.isla.supply/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8f78yh18%2Fproduction%2Fb1f623dc715f9cdc06e56737c18ee49600eeea08-2946x2206.webp%3Frect%3D0%2C367%2C2946%2C1473%26w%3D2000%26h%3D1000%26fit%3Dmax%26auto%3Dformat&w=3840&q=75" key="ogImage" />
      <meta property="twitter:image" content="https://www.isla.supply/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8f78yh18%2Fproduction%2Fb1f623dc715f9cdc06e56737c18ee49600eeea08-2946x2206.webp%3Frect%3D0%2C367%2C2946%2C1473%26w%3D2000%26h%3D1000%26fit%3Dmax%26auto%3Dformat&w=3840&q=75" />
      <meta property="twitter:card" content="https://www.isla.supply/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8f78yh18%2Fproduction%2Fb1f623dc715f9cdc06e56737c18ee49600eeea08-2946x2206.webp%3Frect%3D0%2C367%2C2946%2C1473%26w%3D2000%26h%3D1000%26fit%3Dmax%26auto%3Dformat&w=3840&q=75" />
      <meta property="twitter:title" content="Isla"/>
      <meta property="twitter:description" content={description} />
      <meta property="og:title" content="ISLA" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.isla.supply" />
      <meta property="og:title" content="Isla" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.isla.supply" />
      
    </Head>
  );
}
