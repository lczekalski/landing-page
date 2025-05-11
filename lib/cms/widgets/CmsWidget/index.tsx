import { Widget } from "lib/types/cms"
import WidgetVisibilityChecker from "src/lib/widget_visibility_checker"
import CmsCenteredText from "../CmsCenteredText"
import CmsFooter from "../Footer"
import { Header, HeaderFields } from "../Header"

export default function CmsWidget({ widget }: { widget: Widget }) {
  const renderWidget = (widget: Widget) => {
    if (!new WidgetVisibilityChecker(widget).isWidgetVisible()) {
      return <></>
    }
    switch (widget.widgetType) {
      case "Header":
        return <Header fields={widget.fields as HeaderFields} />
      case "CenteredText":
        return <CmsCenteredText widget={widget} />
      case "FooterLP":
        return <CmsFooter widget={widget} />
      default:
    }
  }
  return (
    <>
      <div className="w-full items-center">{renderWidget(widget)}</div>
    </>
  )
}
