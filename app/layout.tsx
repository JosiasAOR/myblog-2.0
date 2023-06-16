import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./componets/navegation/NavigationBar";
import Footer from "./componets/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meu blog Pessoal",
  description: "Sobre mim e o mundo Tech",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
