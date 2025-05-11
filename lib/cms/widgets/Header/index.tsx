import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import { HeaderFields, LanguageValue } from "../../../../lib/types/cms.d"

import { ensureMap } from "../../../utils/map"

interface HeaderProps {
	fields: HeaderFields
}
export const Header = memo<HeaderProps>(({ fields }) => {
	return (
		<header className="flex w-full items-center justify-between py-3">
			{fields.logo && (
				<div className="flex items-center">
					<LogoImage logo={fields.logo} />
				</div>
			)}
			<div className="flex items-center space-x-4">
				{fields.languageSwitcher && (
					<LanguageSwitcher options={fields.languageSwitcher} />
				)}
				{fields.cta && fields.cta.ctaLink && (
					<Link
						className="text-sm font-semibold text-white hover:underline"
						href={fields.cta.ctaLink}
					>
						{fields.cta.ctaText}
					</Link>
				)}
			</div>
		</header>
	)
})

function LogoImage({ logo, alt }: { logo: string; alt?: string }) {
	return <Image src={logo} alt={alt ?? ""} width={80} height={30} />
}

function LanguageSwitcher({ options }: { options: Map }) {
	const languageSwitcher = ensureMap<LanguageValue>(options)

	const entries = [...languageSwitcher.entries()]

	return (
		<>
			<div className="flex cursor-pointer items-center rounded-md border border-[#2E2658] pl-2 pr-[2px] text-white">
				<select className="text-focus:outline-none language-select cursor-pointer appearance-none border-none bg-transparent text-m text-white focus:ring-0">
					{entries.map(([val, lang]) => (
						<option
							key={val}
							value={val}
							className="w-full border-none p-2 text-textNormal"
						>
							{lang.countryFlag} {lang.country}
						</option>
					))}
				</select>
			</div>
		</>
	)
}
