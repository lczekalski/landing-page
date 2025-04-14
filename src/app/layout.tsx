import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-Surfaces-surface-container text-Surfaces-on-surface inline-flex h-full w-[1500px] flex-col items-center justify-start overflow-hidden">
        {children}
      </body>
    </html>
  )
}
