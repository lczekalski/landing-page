import { FooterFields, Widget } from "src/types/cms"
import LogoImage from "src/ui/logo"

export default function CmsFooter({ widget }: { widget: Widget }) {
  const fields = widget.fields as FooterFields

  return (
    <>
      <footer className="bg-Surfaces-surface-container-lowest inline-flex w-[1500px] flex-col items-center justify-start gap-7 overflow-hidden py-16">
        <div className="flex w-[1080px] flex-col items-center justify-start gap-2.5">
          <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
            {fields.partners?.map((partner, index) => (
              <div
                key={`partner-${index}`}
                className="bg-Surfaces-surface-container inline-flex h-14 w-32 flex-col items-center justify-center gap-2.5 rounded-[5px] px-1.5"
              >
                <LogoImage key={index} logo={partner.logo} alt={partner.alt} />
              </div>
            ))}
          </div>

          <div className="border-Surfaces-outline-variant inline-flex w-[1080px] flex-col items-center justify-start border-t border-b py-7">
            <div className="inline-flex items-center justify-start gap-12">
              {fields.responsibleGambling?.map((element, index) => (
                <LogoImage key={index} logo={element.logo} alt={element.alt} />
              ))}
            </div>
          </div>
          <div className="text-Surfaces-on-surface-variant w-[1080px] justify-start text-center font-['Manrope'] text-xs leading-none font-medium opacity-70">
            {fields.regulation}
          </div>
        </div>
      </footer>
    </>
  )
}
