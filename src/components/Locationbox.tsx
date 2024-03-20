import { Link } from "react-router-dom"

const Locationbox = ({location} : {location: string}) => {

    let img = ""

    switch(location) {
        case "CANADA":
            img = "/assets/shared/desktop/illustration-canada.svg"
            break
        case "AUSTRALIA":
            img = "/assets/shared/desktop/illustration-australia.svg"
            break
        case "UNITED KINGDOM":
            img = "/assets/shared/desktop/illustration-united-kingdom.svg"
            break
    }
  return (
    <article className="w-full flex flex-col justify-center items-center">
        <figure className="h-40 bgone">
            <img src={img} alt="Location Image" />
        </figure>
        <h1 className="font-jost font-medium text-[20px] tracking-5 pt-10 pb-4">{location}</h1>
        <Link to="/locations">
            <button className="bg-primary-100 hover:bg-secondary-100  px-4 py-3 rounded-md text-white font-jost">
                SEE LOCATION
            </button>
        </Link>

    </article>
  )
}

export default Locationbox