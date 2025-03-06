"use client"
import { usePathname } from "next/navigation"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"

interface PageLayoutType {
  hasSideBar: boolean
  setHasSideBar: Dispatch<SetStateAction<boolean>>
}

const PageLayoutContext = createContext<PageLayoutType | undefined>(undefined)

const usePageLayoutContext = () => {
  const context = useContext(PageLayoutContext)
  if (!context) {
    throw new Error("usePageLayoutContext must be used within a PageLayoutProvider")
  }
  return context
}

const PageLayoutProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const initialHasSideBar = pathname.includes("/dashboard/card") || pathname.includes("/item/")
  const [hasSideBar, setHasSideBar] = useState<boolean>(initialHasSideBar)

  useEffect(() => {
    setHasSideBar(pathname.includes("/dashboard/card") || pathname.includes("/item/"))
  }, [pathname])

  return <PageLayoutContext.Provider value={{ hasSideBar, setHasSideBar }}>{children}</PageLayoutContext.Provider>
}

export { PageLayoutProvider, usePageLayoutContext }
