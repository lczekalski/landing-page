import { LanguageSwitcherOptions, LanguageValue } from "src/types/cms"
import { ensureMap } from "src/utils/map"

export default function LanguageSwitcher({ options }: { options: LanguageSwitcherOptions }) {
  const languageSwitcher = ensureMap<LanguageValue>(options)

  const entries = [...languageSwitcher.entries()]

  console.log(entries)
  return (
    <>
      <div className="flex cursor-pointer items-center rounded-md border border-[#2E2658] pr-[2px] pl-2 text-white">
        <select className="text-focus:outline-none language-select text-m cursor-pointer appearance-none border-none bg-transparent text-white focus:ring-0">
          {entries.map(([val, lang]) => (
            <option key={val} value={val} className="text-textNormal w-full border-none p-2">
              {lang.countryFlag} {lang.country}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
