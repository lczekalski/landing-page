import { Metadata } from "next"
import { cache } from "react"
import CmsWidget from "lib/cms/widgets/CmsWidget"
import { Meta, Page } from "lib/types/cms"
import apiService from "src/lib/api_service"

export const getCmsPage = cache(async (): Promise<Page> => {
  const raw: object = await apiService.get("/cms/pages/type=LANDING_PAGE/content?lang=en")

  console.log("********************** getting cms page **********************")
  const result = {
    meta: raw.meta as Meta,
    widgets: raw.widgets.map((widget) => {
      return {
        ...widget,
        fields: unwrapProps(widget.fields, "en"),
      }
    }),
  }
  return result as Page
})

export async function generateMetadata(): Promise<Metadata> {
  const raw = await apiService.get("/cms/pages/type=LANDING_PAGE/content?lang=en")
  const data = raw as Page

  return {
    title: data.meta?.title ?? "Fallback Title",
    description: data.meta?.description ?? "Default description",
  }
}

export default async function Web() {
  const json = await getCmsPage()
  const data = json as Page

  return (
    <>
      {data.widgets.map((widget) => (
        <CmsWidget key={widget.widgetUuid} widget={widget} />
      ))}
    </>
  )
}

function unwrapProps(prop: any, languageCodeForFields: string): any {
  if (Array.isArray(prop)) {
    return prop.map((item) => unwrapProps(item, languageCodeForFields))
  } else if (prop && typeof prop === "object") {
    if ("value" in prop && !("values" in prop)) {
      return unwrapProps(prop.value, languageCodeForFields)
    } else if ("values" in prop) {
      if (!(languageCodeForFields in prop.values)) {
        return prop.value || ""
      }
      return prop.values[languageCodeForFields] || ""
    } else {
      const newObj = {}
      for (const key in prop) {
        if (prop.hasOwnProperty(key)) {
          newObj[key] = unwrapProps(prop[key], languageCodeForFields)
        }
      }
      return newObj
    }
  } else {
    return prop
  }
}
