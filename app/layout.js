import {Federo, Poppins, Rubik} from "next/font/google";
import "./globals.css";
import Navbar from "./container/navbar/Navbar";
import Footer from "./container/footer/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

const federo = Federo({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-federo",
});

export const metadata = {
  title: "Erex Studio | Transforming Ideas into Digital Triumphs",
  description:
    "Erex Studio pioneers digital transformation, delivering cutting-edge software, captivating designs, and strategic digital marketing. Elevate your brand with our innovative solutions and expert guidance.",
};

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${federo.variable} ${rubik.variable}`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/faviconIcon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/faviconIcon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/faviconIcon/favicon-16x16.png"
        />
        <link rel="manifest" href="/faviconIcon/site.webmanifest" />
        <link rel="mask-icon" href="/faviconIcon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
