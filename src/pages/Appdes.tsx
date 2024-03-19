import Deshero from "../components/Deshero"
import Productcard from "../components/Productcard"
import Pagelinkv2 from "../components/Pagelinkv2"
import ContactLink from "../components/ContactLink"
const Appdes = () => {
  const sections : string[] = [ "Web Design", "Graphic Design"]
  const webprojects = [
      {
        title: "AIRFILTER",
        desc: "Solving the problem of poor indoor air quality by filtering the air",
        img: "/assets/app-design/desktop/image-airfilter.jpg"
      },
      {
        title: "EYECAM",
        desc: "Product that lets you edit your favorite photos and videos at any time",
        img: "/assets/app-design/desktop/image-eyecam.jpg"
      },
      {
        title: "FACEIT",
        desc: "Get to meet your favorite internet superstar with the faceit app",
        img: "/assets/app-design/desktop/image-faceit.jpg"
      },
      {
        title: "TODO",
        desc: "A todo app that features cloud sync with light and dark mode",
        img: "/assets/app-design/desktop/image-todo.jpg"
      },
      {
        title: "LOOPSTUDIOS",
        desc: "A VR experience app made for Loopstudios",
        img: "/assets/app-design/desktop/image-loopstudios.jpg"
      },

  ]
  return (
    <section className='w-full'>
        <Deshero page='Web Design' desc='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'/>


        <section className='w-full grid grid-cols-1 gap-10 px-10 py-6 lg:grid-cols-3 lg:grid-rows-2'>

            {webprojects.map((project, index) => {
                return <Productcard title={project.title} desc={project.desc} img={project.img} key={index}/>
            })}

        </section>

        <section className=" place-items-center content-center w-full gap-4 grid grid-cols-1 grid-rows-2 p-6 md:grid md:grid-cols-2 md:grid-rows-1">

            {sections.map((section, index) => {
                return <Pagelinkv2 title={section} index={index} key={index}/>
            })}

        </section>

        <ContactLink/>
    </section>
  )
}

export default Appdes