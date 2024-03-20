import { Link } from "react-router-dom"
import { fbImg, instaImg, logoLightImg, pinImg, twImg, yoytubeImg } from "../utils"

const Footer = () => {
  return (
    <footer className="bg-primary-200 p-4">
        <section className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="w-full flex justify-center items-center">
                <img src={logoLightImg} className="w-8/12 max-w-96" alt="Logo" />
            </div>

            <hr className="border-none h-[0.5px] w-full bg-white bg-opacity-80 md:hidden" />

            <ul className="w-full flex flex-col text-white font-jost font-semibold  justify-center gap-5 items-center md:flex-row">
                <Link className="hover:text-primary-100" to={"/company"}>OUR COMPANY</Link>
                <Link className="hover:text-primary-100" to={"/locations"}>LOCATIONS</Link>
                <Link className="hover:text-primary-100" to={"/contact"}>CONTACT</Link>
            </ul>
        </section>


        <hr className="border-none h-[0.5px] hidden w-full bg-white bg-opacity-80 md:block md:my-16" />

    <section className="flex flex-col justify-center md:flex-row md:gap-12">
    <section className="flex flex-col w-full items-center justify-center text-center text-primary-300 text-opacity-50 py-6">
            <h1 className="font-jost font-bold">Designo Central Office</h1>
            <p className="font-jost font-normal">3886 Wellington Street <br />
            Torronto, Ontario M9C 3J5</p>
        </section>
        <section className="flex flex-col w-full items-center justify-center text-center text-primary-300 text-opacity-50 py-6">
            <h1 className="font-jost font-bold">Contact Us (Central Office)</h1>
            <p className="font-jost font-normal">P: +1 253-863-8967 <br />
            M: contact@designo.co</p>
        </section>

        <ul className="flex justify-center w-full items-center p-4 gap-4">
            <a href="/">
                <img src={fbImg} alt="" />
            </a>
            <a href="/">
                <img src={yoytubeImg} alt="" />
            </a>
            <a href="">
                <img src={twImg} alt="" />
            </a>
            <a href="">
                <img src={pinImg} alt="" />
            </a>
            <a href="">
                <img src={instaImg} alt="" />
            </a>
        </ul>
    </section>
    </footer>
  )
}

export default Footer