import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Lista de Países",
  description: "Lista de Países",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container gap-2 flex items-center">
              <Image
                src='/logo.svg'
                alt="Logo do Website"
                width={48}
                height={48}
              />
              <h1 className="font-bold text-2xl">Lista de Paises</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
