import React from "react";
import {useTranslations} from "next-intl";

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 BZR Szoftverfejlesztő Kft. {t('rights')}
      </small>
      <p className="text-xs">
        {t.rich("about", {
          semi: (chunks) => <span className="font-semibold">{chunks}</span>
        })}
      </p>
    </footer>
  );
}