import ContactLink from "../components/ContactLink"
import Locationdisp from "../components/Locationdisp"
const Locations = () => {

  const locations : string[ ] = ["CANADA", "AUSTRALIA", "UNITED KINGDOM"]
  return (
    <section className="w-full">
      <section className='w-full flex flex-col gap-8 py-12 justify-center items-center'>
      {locations.map((location, index) => (
        <Locationdisp key={index} index={index} location={location} />
      ))}
    </section>

    <ContactLink  />
    </section>
  )
}

export default Locations