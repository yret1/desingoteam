
const Productcard = ({title, desc, img} : {title: string, desc: string, img: string} ) => {
  return (
    <section className="rounded-md group cursor-pointer overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
       <article className="h-full w-full flex flex-col md:flex-row lg:flex-col ">
        <figure className="w-full min-h-80 lg:h-[600px] bg-top bg-cover md:w-7/12 lg:w-full"
        style={{backgroundImage: `url(${img})`}}>
        </figure>

        <section className="bg-primary-100 bg-opacity-20 py-6 px-4 flex hover:text-white group-hover:bg-primary-100 group-hover:bg-opacity-100 cursor-pointer flex-col  justify-center gap-6 items-center text-center lg:w-full lg:h-[40%] md:w-5/12 ">
          <h1 className="font-jost text-2xl group-hover:text-white text-primary-100">{title}</h1>
          <p className="group-hover:text-white">{desc}</p>
        </section>

       </article>
    </section>
  )
}

export default Productcard
