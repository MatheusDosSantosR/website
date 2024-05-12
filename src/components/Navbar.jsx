import { Menu, X } from "lucide-react"
import { useState } from "react"
import { navItems } from "../constants"
import logo from "../assets/logo.png"
import DrawOutlineButton from "../components/DrawOutlineButton"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className="sticky top-0 z-50 py-3 bg-slate-900 border-b border-neutral-800/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <div href="#" className="cursor-pointer flex items-center flex-shrink-0">
                        <img className="h-5 w-60 mr-2" src={logo} alt="Logo" />
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <DrawOutlineButton text={item.label} />
                            </li>
                        ))}
                    </ul>
                    {/*<div className="hidden lg:flex justify-center space-x-12 items-center">
                         <a href="#" className="py-2 px-3 hover:text-indigo-300 border-indigo-300">
                            Contato
                        </a> 
                    </div>*/}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            {/*                             <a href="#" className="py-2 px-3 border rounded-md">
                                Contato
                            </a> */}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
