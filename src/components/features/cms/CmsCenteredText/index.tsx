import { TextFields, Widget } from "src/types/cms"

export default function CmsCenteredText({ widget }: { widget: Widget }) {
  const fields = widget.fields as TextFields
  return <p className="text-center">{fields.text?.value}</p>
}
