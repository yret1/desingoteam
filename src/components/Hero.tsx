const Hero = () => {
  return (
    <section className={`h-full bg-[url('/assets/home/desktop/bg-pattern-hero-home.svg')] bg-primary-100 bg-no-repeat bg-left w-full flex-col`}>

        <section className="pt-20 px-4 text-center flex-center flex-col gap-5">
        <h1 className="font-jost font-medium text-white text-3xl">Award-Winning custom designs and digital branding solutions</h1>
        <p className="font jost text-white font-normal leading-relaxed">With over 10 years in the industry, we are experienced in creating fully
            responsive websites, app design, and engaging brand experiences. Find out more about our services.
        </p>

        <button className="bg-white px-4 py-3 font-medium rounded-md">LEARN MORE</button>
        </section>

        <section className="flex justify-start items-start overflow-hidden pt-6 flex-col bg-[url('/assets/home/desktop/image-hero-phone.png')] h-[450px] bg-top bg-auto"
        style={{backgroundPosition: "center 15%" }}>
        </section>
    </section>
  )
}

export default Hero