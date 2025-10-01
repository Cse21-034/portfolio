import { useLanguage } from "@/components/language-context";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "tn" : "en")}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{language === "en" ? "Setswana" : "English"}</span>
    </button>
  );
}
