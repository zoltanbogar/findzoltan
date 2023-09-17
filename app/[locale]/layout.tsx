import Header from "@/components/header";
import "./globals.css";
import {Inter} from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import {Toaster} from "react-hot-toast";

import {useLocale} from 'next-intl';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({subsets: ["latin"]});

import LangSwitch from "@/components/lang-switch";

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Zoltan | Personal Portfolio",
  description: "Zoltan is a full-stack developer with 8+ years of experience.",
};

type TParams = {
  locale: "hu|en"
}

export default async function RootLayout({
                                     children,
                                     params
                                   }: {
  children: React.ReactNode;
  params: TParams;
}) {
  const locale = useLocale();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="!scroll-smooth">
    <body
      className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
    >
    <div
      className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
    <div
      className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header/>
          {children}
          <Analytics />
        </NextIntlClientProvider>
        <Footer/>

        <Toaster position="top-right"/>
        <ThemeSwitch/>
        <LangSwitch/>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
    </body>
    </html>
  );
}