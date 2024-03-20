import Locationbox from "../components/Locationbox"

const Contact = () => {
  const locations : string[ ] = ["CANADA", "AUSTRALIA", "UNITED KINGDOM"]
  return (
    <section>


<section className='w-full flex flex-col gap-8 py-10 lg:flex-row'>
        {locations.map((location, index) => {
          return (<Locationbox key={index} location={location} />)
        })}

      </section>
    </section>
  )
}

export default Contact