import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Nav from "./nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"; 

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Nav />
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </div>
      <Footer />
    </>
  );
}
