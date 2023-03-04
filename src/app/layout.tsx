import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Mareedu Saibabu",
  description: "Mareedu Saibabu - Linktree",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen">
        {children}
      </body>
    </html>
  );
}
