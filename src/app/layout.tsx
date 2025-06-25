import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | United Panel-System (M) Sdn. Bhd.",
    default: "United Panel-System (M) Sdn. Bhd.",
  },
  description:
    "UNITED PANEL-SYSTEM has been specialising in the production of PU & PS panels for walk-in cold rooms. Being the largest multi-purpose manufacturing plant in Malaysia, we offer a complete range of products for commercial & industrial refrigeration systems.",
  openGraph: {
    title: {
      template: "%s | United Panel-System (M) Sdn. Bhd.",
      default: "United Panel-System (M) Sdn. Bhd.",
    },
    description:
      "UNITED PANEL-SYSTEM has been specialising in the production of PU & PS panels for walk-in cold rooms...",
    url: BASE_URL,
    siteName: "United Panel-System",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/logo.png`,
        width: 600,
        height: 315,
        alt: "United Panel-System Logo",
      },
    ],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

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
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()).replace(/</g, '\\u003c'),
          }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XQTL49RNLM"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XQTL49RNLM');
        `}
        </Script>

        {/* Botpress Chatbot */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2025/04/19/04/20250419045059-BJL35QGB.js"
          strategy="afterInteractive"
        />
        <Providers>
          <Header productCategories={categories.data} />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsAppBtn />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { getProductCategory } from "@/api/api";
import Script from "next/script";
import WhatsAppBtn from "@/components/CTA/WhatsappBtn";
import { getOrganizationSchema } from "@/lib/seo/schema";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/seo/config";

