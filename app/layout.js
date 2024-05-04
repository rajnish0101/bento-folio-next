import Header from "@/components/common/Header";
import "./globals.css";
import {Bricolage_Grotesque} from 'next/font/google'
import Footer from "@/components/common/Footer";
import BackgroundShape from "@/components/common/BackgroundShape";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <Header/>
        <main className="max-w-7xl mx-auto mt-6">
        {children}
        <BackgroundShape/>
        </main>
        <Footer/>
      </body>
    </html>
  );
}