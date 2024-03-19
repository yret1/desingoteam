import Hero from "../components/Hero"
import Pagelink from "../components/Pagelink"
const Home = () => {

    
    const sections : string[] = ["Web Design", "App Design", "Graphic Design"]



  return (
    <section className="w-full">
        <Hero/>
        <section className="flex-center gap-4 flex-col p-6">

            {sections.map((section, index) => {
                return <Pagelink title={section} key={index}/>
            })}

        </section>
    </section>
  )
}

export default Home