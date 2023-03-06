import "@/styles/globals.css";
import { Source_Sans_Pro } from "next/font/google";
import localFont from "next/font/local";

const source = Source_Sans_Pro({
  subsets: ["latin"],
  variable: "--font-source",
  weight: ["200", "300", "400", "600", "700", "900"],
});
const utopia = localFont({
  src: [
    {
      path: "./font/utopia.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/utopiaBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${source.variable} ${utopia.className}`}
      // className={utopia.className}
    >
      <Component {...pageProps} />
    </main>
  );
}
