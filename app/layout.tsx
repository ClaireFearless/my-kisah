import { Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";


// Font untuk Nama (Cursive)
const fontNama = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
});

// Font untuk Teks Umum (Sans-serif)
const fontUmum = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={`${fontUmum.variable} ${fontNama.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        
        {children}
      </body>
    </html>
  );
}