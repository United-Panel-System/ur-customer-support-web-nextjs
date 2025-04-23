import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getProductCategory();
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head>
        <script
          defer
          src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"
        ></script>
        <script
          defer
          src="https://files.bpcontent.cloud/2025/04/19/04/20250419045059-BJL35QGB.js"
        ></script>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header productCategories={categories.data} />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { getProductCategory } from "@/api/api";
