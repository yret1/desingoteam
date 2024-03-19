import { hamImg, logoImg } from "../utils"

const Nav = () => {
  return (
    <header className="w-screen flex justify-between items-center py-10 px-6 h-20 md:h-36 ">

        <div className="flex-center w-8/12 lg:w-4/12">
            <img src={logoImg} alt="Logo" />
        </div>
        <nav className="hidden lg:flex lg:w-6/12">
            <ul className="flex space-x-8">
                <li className="text-black hover:text-primary-200 cursor-pointer">Our Company</li>
                <li className="text-black hover:text-primary-200 cursor-pointer">Locations</li>
                <li className="text-black hover:text-primary-200 cursor-pointer">Contact</li>
            </ul>
        </nav>
        <div className="flex-center w-10 h-full lg:hidden">
        <img src={hamImg} alt="Hamburgerlogo" />
        </div>

    </header>
  )
}

export default Nav