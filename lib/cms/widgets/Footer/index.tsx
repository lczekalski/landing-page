import Image from "next/image"
import { FooterFields, Widget } from "lib/types/cms"
import LogoImage from "src/ui/logo"

export default function Footer({ widget }: { widget: Widget }) {
  const fields = widget.fields as FooterFields

  return (
    <>
      <footer className="bg-Surfaces-surface-container-lowest inline-flex w-full flex-col items-center justify-start gap-7 overflow-hidden py-16">
        <div className="flex flex-col items-center justify-start gap-2.5">
          <Partners fields={fields} />
          <div className="inline-flex flex-col items-center justify-start gap-2.5 self-stretch">
            <div className="inline-flex flex-wrap content-center items-center justify-center gap-2.5 self-stretch">
              {fields.responsibleGambling?.map((element, index) => (
                <img key={index} src={element.logo} alt={element.alt} />
              ))}
            </div>
          </div>
          <div className="text-Surfaces-on-surface-variant justify-start text-center font-['Manrope'] text-xs leading-none font-medium opacity-70">
            {fields.regulation}
          </div>
        </div>
      </footer>
    </>
  )
}
function Partners({ fields }: { fields: FooterFields }) {
  return (
    <div className="inline-flex flex-wrap content-center items-center justify-center gap-2.5 self-stretch">
      {fields.partners?.map((partner, index) => (
        <div
          key={`partner-${index}`}
          className="bg-Surfaces-surface-container inline-flex h-14 w-32 flex-col items-center justify-center gap-2.5 rounded-[5px] px-1.5"
        >
          <LogoImage key={index} logo={partner.logo} alt={partner.alt} />
        </div>
      ))}
    </div>
  )
}
