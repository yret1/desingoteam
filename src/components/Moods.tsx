import { homeFriendlyImg, homePassionImg, homeResourcefulImg } from "../utils";

const Moods = ({mood, index} : {mood: string, index: number}) => {



    let bg: string = "";

    switch(index) {
        case 0:
            bg = "/assets/shared/desktop/bg-pattern-small-circle.svg";
            break;
        case 1:
            bg = "/assets/shared/desktop/bg-pattern-two-circles.svg";
            break;
        case 2:
            bg = "/assets/shared/desktop/bg-pattern-three-circles.svg";
            break;
    }

    let img: string = "";
    let text: string = "";

    switch(mood) {
        case "PASSIONATE":
            img = homePassionImg;
            text = "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
            break;
        case "FRIENDLY":
            img = homeFriendlyImg;
            text = "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
            break;
        case "RESOURCEFUL":
            img = homeResourcefulImg;
            text = "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
            break;


    }
  return (
    <section className="flex flex-col items-center justify-center w-full md:flex-row md:px-10">

        <section className={`h-full w-full md:w-3/12 bg-center bg-contain flex-center bgone bg-no-repeat `}
        style={{backgroundImage: bg}}>
            <img src={img} alt="Mood image" className="h-full" />
        </section>
        <section className="p-7 text-center lg:text-start md:w-7/12">
        <h1 className="font-jost font-medium text-xl text-primary-200 pb-6">{mood}</h1>
        <p className="font-jost font-normal text-lg text-primary-200">{text}</p>
        </section>

    </section>
  )
}

export default Moods