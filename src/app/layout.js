import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yeshwantrao Chavan College of Engineering",
  description: "Yeshwantrao Chavan College of Engineering",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon.png',
        href: '/icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon.png',
        href: '/icon.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="30px"
        />
        <link
          rel="apple-touch-icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="30px"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
