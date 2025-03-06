import { PageLayoutProvider } from "@/context/PageLayoutContext"
import "./globals.scss"
import PageLayout from "@/components/layout/PageLayout"

export const metadata = {
  title: "Simplify",
  description: "Simplify Assessment",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap to a client component to keep rootlayout as server component */}
        <PageLayoutProvider>
          <PageLayout>{children}</PageLayout>
        </PageLayoutProvider>
      </body>
    </html>
  )
}
