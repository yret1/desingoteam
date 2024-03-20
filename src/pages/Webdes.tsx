import Deshero from '../components/Deshero'
import Productcard from '../components/Productcard'
import ContactLink from '../components/ContactLink'
import Pagelinkv2 from '../components/Pagelinkv2'



const Webdes = () => {

    const sections : string[] = [ "App Design", "Graphic Design"]
    
    const webprojects = [
        {
            title: "EXPRESS",
            desc: "A multi-carrier shipping website for ecommerce businesses",
            img: "/assets/web-design/desktop/image-express.jpg"
        },
        {
            title: "TRANSFER",
            desc: "Site for low-cost money transfers and sending money within seconds",
            img: "/assets/web-design/desktop/image-transfer.jpg"
        },
        {
            title: "PHOTON",
            desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
            img: "/assets/web-design/desktop/image-photon.jpg"
        },
        {
            title: "BUILDER",
            desc: "Connects users with local contractors based on their location",
            img: "/assets/web-design/desktop/image-builder.jpg"
        },
        {
            title: "BLOGR",
            desc: "Blogr is a platform for creating an online blog or publication",
            img: "/assets/web-design/desktop/image-blogr.jpg"
        },
        {
            title: "CAMP",
            desc: "Get expert training in coding, data, design, and digital marketing",
            img: "/assets/web-design/desktop/image-camp.jpg"
        }
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

export default Webdes