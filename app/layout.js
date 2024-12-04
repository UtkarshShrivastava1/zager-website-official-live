import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zager",
  description: "Zager Digital Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content="Start your journey with Zager Digital Services since 2017" />
        <link rel="icon" href="/Zlogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Zlogo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Zlogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Zlogo.png" />
        <meta
          name="keywords"
          content="Start your journey with Zager Digital Services since 2017."
        />
      </head>
      <body className={`${inter.className} bg-brand text-white`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
