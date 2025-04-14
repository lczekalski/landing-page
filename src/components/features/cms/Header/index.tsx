import Link from "next/link"
import { HeaderFields, Widget } from "src/types/cms"
import LogoImage from "src/ui/logo"
import LanguageSwitcher from "./language_switcher"

export default function Header({ widget }: { widget: Widget }) {
  const fields = widget.fields as HeaderFields
  return (
    <header className="flex w-full items-center justify-between px-6 py-3">
      {fields.logo && (
        <div className="flex items-center">
          <LogoImage logo={fields.logo} />
        </div>
      )}

      <div className="flex items-center space-x-4">
        {fields.languageSwitcher && <LanguageSwitcher options={fields.languageSwitcher} />}
        {fields.cta.ctaLink && (
          <Link className="text-sm font-semibold text-white hover:underline" href={fields.cta.ctaLink}>
            {fields.cta.ctaText}
          </Link>
        )}
      </div>
    </header>
  )
}
