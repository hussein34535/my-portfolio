import { Cairo, Bebas_Neue } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata = {
  title: "7esen — Apps Portfolio",
  description: "مجموعة تطبيقات مبنية بأحدث التقنيات، تجمع بين الأداء العالي وتجربة مستخدم سلسة وأنيقة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
