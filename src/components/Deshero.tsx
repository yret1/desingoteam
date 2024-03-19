const Deshero = ({page, desc} : {page:string, desc:string}) => {
    return (
     <section className="w-full sm:p-0 md:p-6 bg-white overflow-x-hidden">

       <section className={` bg-[url('/assets/shared/desktop/bg-pattern-call-to-action.svg')] h-80 md:rounded-lg bg-primary-100 bg-no-repeat bg-contain bg-right w-full flex flex-col items-center justify-center px-12 text-center gap-4  lg:bg-right-top md:bg-cover`}>
        <h1 className="font-jost text-2xl md:text-3xl font-bold text-white">{page}</h1>
        <p className="font-jost text-lg md:text-xl font-medium text-white">{desc}</p>


        </section>

     </section>
    )
  }

  export default Deshero