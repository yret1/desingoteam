import Hero from "../components/Hero"
import Pagelink from "../components/Pagelink"
import Moods from "../components/Moods"
import ContactLink from "../components/ContactLink"
const Home = () => {

    
    const sections : string[] = ["Web Design", "App Design", "Graphic Design"]
    const moods : string[] = ["PASSIONATE", "RESOURCEFUL" ,"FRIENDLY"]



  return (
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden gap-14">
        <Hero/>

        <section className=" place-items-center content-center w-full gap-4 grid grid-rows-3 grid-cols-1 p-6 md:grid md:grid-cols-2 md:grid-rows-2">

            {sections.map((section, index) => {
                return <Pagelink title={section} index={index} key={index}/>
            })}

        </section>


        <section className="flex flex-col justify-center items-center w-full gap-4">
            {moods.map((mood, index) => {
                return <Moods mood={mood} index={index} key={index}/>
            })}
        </section>

            <ContactLink/>

    </section>
  )
}

export default Home