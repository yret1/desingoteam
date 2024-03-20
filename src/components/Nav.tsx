
import { useState } from "react"
import { hamImg, logoImg } from "../utils"
import {motion, AnimatePresence} from "framer-motion"
import { Link } from "react-router-dom"

const Nav = () => {



  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {

    setToggle(!toggle);
  }
  return (
    <header className="w-screen relative flex justify-between items-center py-6 md:mt-5 px-6 h-10 md:h-24 ">

        <Link to={"/"} className="flex-center w-6/12 md:w-4/12 ">
            <img src={logoImg} alt="Logo" />
        </Link >
        <nav className="hidden md:flex md:w-8/12">
            <ul className="flex w-full justify-end space-x-8 pr-14">
                <Link to={"/company"} className="text-black font-semibold text-xl hover:text-primary-100  transition-all cursor-pointer">Our Company</Link>
                <Link to={"/locations"} className="text-black font-semibold text-xl hover:text-primary-100 transition-all cursor-pointer">Locations</Link>
                <Link to={"/contact"} className="text-black font-semibold text-xl hover:text-primary-100  transition-all cursor-pointer">Contact</Link>
            </ul>
        </nav>
        <button onClick={toggleNav} className="flex-center w-10 h-full md:hidden">
          <img src={hamImg} alt="Hamburgerlogo" />
        </button>


      <AnimatePresence>
        {toggle && (
          <motion.section
          initial={{opacity: 0, height: 0}}
          animate={{opacity: 1, height: "auto"}}
          exit={{opacity: 0, height: 0}}
          className={`w-full h-40 bg-primary-200 flex justify-start absolute top-full left-0 items-center shadow-md`}>
          <ul className="flex flex-col gap-5 text-white p-6 text-xl">
            <Link to={"/company"} onClick={toggleNav} className="font-jost font-medium hover:text-primary-100 cursor-pointer">Our Company</Link>
            <Link to={"/locations"} onClick={toggleNav} className="font-jost font-medium hover:text-primary-100 cursor-pointer">Locations</Link>
            <Link to={"/contact"} onClick={toggleNav} className="font-jost font-medium hover:text-primary-100 cursor-pointer">Contact</Link>
          </ul>
        </motion.section>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Nav