import { useState } from "react"
import TopInfoBar from "./TopInfoBar"
import MainHeader from "./MainHeader"
import NavMenuBar from "./NavMenuBar"
import MobileDrawer from "./MobileDrawer"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full">
      <TopInfoBar />
      <MainHeader />
      <NavMenuBar />
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  )
}

export default Navbar
