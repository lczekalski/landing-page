import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-Surfaces-surface-container text-Surfaces-on-surface">
        <div className="mx-auto w-auto md:w-[1500px]">{children}</div>
      </body>
    </html>
  )
}
