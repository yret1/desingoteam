import Deshero from "../components/Deshero"
import Productcard from "../components/Productcard"
import Pagelinkv2 from "../components/Pagelinkv2"
import ContactLink from "../components/ContactLink"
const Graphdes = () => {
  const sections : string[] = [ "Web Design", "App Design"]
  const webprojects = [
      {
        title: "TIM BROWN",
        desc: "A book cover designed for Tim Brown’s new release, ‘Change’",
        img: "/assets/graphic-design/desktop/image-change.jpg"
      },
      {
        title: "BOXED WATER",
        desc: "A simple packaging concept made for Boxed Water",
        img: "/assets/graphic-design/desktop/image-boxed-water.jpg"
      },
      {
        title: "SCIENCE!",
        desc: "A poster made in collaboration with the Federal Art Project",
        img: "/assets/graphic-design/desktop/image-science.jpg"
      }
  ]
  return (
    <section className='w-full'>
        <Deshero page='Web Design' desc='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'/>


        <section className='w-full grid grid-cols-1 gap-10 px-10 py-6 lg:grid-cols-3 lg:grid-rows-1'>

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

export default Graphdes