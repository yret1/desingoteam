import CompHero from '../components/CompHero'
import CompMore from '../components/CompMore'
import CompMore2 from '../components/CompMore2'
import ContactLink from '../components/ContactLink'
import Locationbox from '../components/Locationbox'

const Company = () => {

  const locations: string[] = ["CANADA", "AUSTRALIA", "UNITED KINGDOM"]


  return (
    <section>
      <CompHero/>
      <CompMore/>

      <section className='w-full flex flex-col gap-8 py-10 lg:flex-row'>
        {locations.map((location, index) => {
          return (<Locationbox key={index} location={location} />)
        })}

      </section>

      <CompMore2/>

      <ContactLink/>
    </section>
  )
}

export default Company