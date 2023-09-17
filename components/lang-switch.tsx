"use client";

import React from "react";

import Link from "next-intl/link";
import {useLocale} from "next-intl";

export default function LangSwitch() {
  const locale = useLocale();

  return (
    <button
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {locale === "en" ? <Link href={"/"} locale={"hu"}>HU</Link> : <Link href={"/"} locale={"en"}>EN</Link>}
    </button>
  );
}