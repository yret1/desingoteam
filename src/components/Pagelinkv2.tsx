import { useEffect, useState } from "react";
import { rightarrowImg } from "../utils";
import { Link } from "react-router-dom";

const Pagelinkv2 = ({title, index} : {title: string, index: number}) => {


    const [small, setSmall] = useState(true);



    const handleResize = () => {
        if(window.innerWidth < 768) {
            setSmall(true);
        } else {
            setSmall(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [small]);









    let imgSmall: string = "";
    let imgLarge:string = "";

    switch(title) {
        case "Web Design":
            imgSmall = "/assets/home/mobile/image-web-design.jpg";
            imgLarge = "/assets/home/desktop/image-web-design-small.jpg";
            break;
        case "App Design":
            imgSmall = "/assets/home/mobile/image-app-design.jpg";
            imgLarge = "/assets/home/desktop/image-app-design.jpg";
            break;
        case "Graphic Design":
            imgSmall = "/assets/home/mobile/image-graphic-design.jpg";
            imgLarge = "/assets/home/desktop/image-graphic-design.jpg";
            break;
    }



  return (
    <Link to={title == "Web Design" ? "/webdesign" : title == "App Design" ? "/appdesign" : "/graphicdesign"} className={`w-full bg-cover bg-no-repeat bg-center overflow-hidden flex-center rounded-lg ${index == 0 ? ' h-60' : 'h-60'}`} style={ small ?{backgroundImage: `url(${imgSmall})` } : {backgroundImage: `url(${imgLarge})` }}>

        <section className={`w-full h-full bg-blend-multiply flex-center flex-col ${index == 0 ? 'bg-primary-200 bg-opacity-45' : 'bg-primary-200 bg-opacity-45'}`}>

            <h2 className="text-white font-bold text-3xl">{title}</h2>
            <button className="text-white text-2xl flex  items-center gap-4 font-jost font-medium rounded-full py-2 px-4 mt-4">
                <p>View Projects</p>
                <img src={rightarrowImg} alt="Arrow" />
            </button>

        </section>

    </Link>
  )
}

export default Pagelinkv2