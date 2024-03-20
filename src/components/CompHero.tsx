const CompHero = () => {
    return (
     <section className="w-full sm:p-0 md:p-12 bg-white lg:h-[500px] overflow-x-hidden">



       <section className="w-full h-full flex flex-col overflow-hidden md:rounded-md  lg:flex-row-reverse">

        <section className="bg-[url('/assets/about/desktop/image-about-hero.jpg')] h-full lg:w-4/12 bg-no-repeat  bg-cover bg-center">

        </section>



       <section className="bg-primary-100 h-full bg-[url('assets/about/desktop/bg-pattern-hero-about-desktop.svg')] lg:w-8/12 flex flex-col justify-center items-center gap-4 bg-top bg-cover">
        <h1 className="pt-20 font-jost font-semibold text-white text-3xl text-center">About Us</h1>
        <p className="text-white font-jost font-medium text-xl text-center md:px-12 pb-10">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
       </section>
       </section>

     </section>
    )
  }

  export default CompHero