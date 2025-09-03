import type { ReactNode } from "react"
import Footer from "./common/Footer"
import Header from "./common/Header"

interface LayoutProps{
    children:ReactNode
}

function Layout({children}:LayoutProps) {
  return (
    <>
    <Header/>
    <section className="min-h-screen w-full" >
      {children}
    </section>
    <Footer/>
    </>
  )
}

export default Layout