import {Federo, Poppins, Rubik, Public_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "../container/navbar/Index";
import Footer from "../container/footer/Footer";
import Head from "next/head";
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
const public_Sans = Public_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public",
});

export const metadata = {
  title: "Erex Studio | Transforming Ideas into Digital Triumphs",
  description:
    "Erex Studio pioneers digital transformation, delivering cutting-edge software, captivating designs, and strategic digital marketing. Elevate your brand with our innovative solutions and expert guidance in the field of Wordpress, React, JavaScript, Digital Marketing, UI/UX.",
};

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${federo.variable} ${rubik.variable} ${public_Sans.variable}`}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "lq6bp5joht");
          `,
          }}></script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:image" content="/android-chrome-192x192.png" />
        <meta
          property="og:title"
          content="Erex Studio | Transforming Ideas into Digital Triumphs"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://erex.in/" />
        <meta
          property="og:description"
          content="Erex Studio pioneers digital transformation, delivering cutting-edge software, captivating designs, and strategic digital marketing. Elevate your brand with our innovative solutions and expert guidance in the field of Wordpress, React, JavaScript, Digital Marketing, UI/UX."
        />
        <meta property="og:site_name" content="Erex Studio" />
      </Head>

      <body>
        {/* <NextTopLoader
          color="#4169E1"
          initialPosition={0.03}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #4169E1,0 0 5px #4169E1"
        /> */}

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
