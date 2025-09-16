import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


export const metadata: Metadata = {
  title: "Sigma | Web3 & Finance Growth Partner",
  description: "Web3 & Finance Growth Partner",
};

const helveticaNeue = localFont({
  src: [
    { path: "../../public/fonts/HelveticaNeueThin.otf", weight: "100", style: "normal" },
    { path: "../../public/fonts/HelveticaNeueThinItalic.otf", weight: "100", style: "italic" },

    { path: "../../public/fonts/HelveticaNeueUltraLight.otf", weight: "200", style: "normal" },
    { path: "../../public/fonts/HelveticaNeueUltraLightItalic.otf", weight: "200", style: "italic" },

    { path: "../../public/fonts/HelveticaNeueLight.otf", weight: "300", style: "normal" },

    // no Regular (400) file uploaded → alias Light as 400 so CSS still works
    { path: "../../public/fonts/HelveticaNeueLight.otf", weight: "400", style: "normal" },

    { path: "../../public/fonts/HelveticaNeueMedium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/HelveticaNeueMediumItalic.otf", weight: "500", style: "italic" },

    { path: "../../public/fonts/HelveticaNeueBold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/HelveticaNeueBoldItalic.otf", weight: "700", style: "italic" },

    { path: "../../public/fonts/HelveticaNeueHeavy.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={helveticaNeue.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
