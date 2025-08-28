import type { Metadata } from "next";
import { Kanit} from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "DTI-SAU Calculator Varity",
  description: "เว็บรวบรวมเครื่องมือต่างๆ....",
  keywords: ["เครื่องคำนวณ", "Calculator", "Varity", "เครื่องมือ", "คำนวณ"],
  icons: {
    icon: "/next.svg",
  },
  authors: [{ 
    
    name: "DTI-SAU Team",
    url: "https://sautechnology.com",
  }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
