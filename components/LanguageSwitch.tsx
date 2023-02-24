import { useTranslation } from "next-i18next";
import router from "next/router";

const onToggleLanguageClick = (newLocale: string) => {
  const { pathname, asPath, query } = router;
  router.push({ pathname, query }, asPath, { locale: newLocale });
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    onToggleLanguageClick(e.target.value)
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <label htmlFor="language-switcher" className="mr-2 font-medium">
        Select language:
      </label>
      <select
        id="language-switcher"
        onChange={handleLanguageChange}
        className="px-2 py-1 border border-gray-300 bg-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Francais</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
