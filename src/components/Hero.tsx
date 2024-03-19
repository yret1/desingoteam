const Hero = () => {
  return (
   <section className="w-full md:p-6 bg-white overflow-x-hidden">

     <section className={`h-full bg-[url('/assets/home/desktop/bg-pattern-hero-home.svg')] md:rounded-lg bg-primary-100 bg-no-repeat bg-left w-full flex flex-col lg:flex-row lg:h-[700px] lg:bg-right-top`}>

      <section className="pt-20 px-4 text-center flex-center flex-col gap-5 lg:flex-1 lg:p-20">
      <h1 className="font-jost font-medium text-white text-3xl">Award-Winning custom designs and digital branding solutions</h1>
      <p className="font jost text-white font-normal leading-relaxed">With over 10 years in the industry, we are experienced in creating fully
          responsive websites, app design, and engaging brand experiences. Find out more about our services.
      </p>

      <button className="bg-white px-4 py-3 font-medium rounded-md">LEARN MORE</button>
      </section>

      <section className="flex justify-start lg:flex-1 items-start overflow-hidden pt-6 bg-no-repeat flex-col bg-[url('/assets/home/desktop/image-hero-phone.png')] h-[450px] lg:h-full bg-auto bg-heromobile lg:bg-herodesktop"
      >
      </section>

      </section>
   </section>
  )
}

export default Hero