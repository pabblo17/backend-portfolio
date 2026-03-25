import { useLanguage } from "./LanguageContext";
import * as enData from "@/locales/en/data";
import * as esData from "@/locales/es/data";
import { ui as enUI } from "@/locales/en/ui";
import { ui as esUI } from "@/locales/es/ui";
import { components as enComponents } from "@/locales/en/components";
import { components as esComponents } from "@/locales/es/components";

export function useTranslation() {
  const { language } = useLanguage();

  const data = language === "en" ? enData : esData;
  const t = language === "en" ? enUI : esUI;
  const c = language === "en" ? enComponents : esComponents;

  return { data, t, c, language };
}
