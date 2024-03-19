
const ContactLink = () => {
  return (
    <section className="relative w-full min-h-96 flex flex-col">

        <section className="bg-white min-h-60 w-full"></section>
        <section className="bg-primary-200 min-h-40 w-full"></section>


        <section className={`absolute bg-primary-100 text-center gap-6 w-10/12 absolute-center bg-cover bg-center px-2 py-12 rounded-md flex flex-col justify-center items-center bg-[url('/assets/shared/desktop/bg-pattern-call-to-action.svg')]`}>
            <h1 className="font-jost text-2xl font-semibold text-white">Let's talk about your project</h1>
            <p className="font-jost text-sm text-white font-normal">Ready to take it to the next level? Contact us today and find out
                how our expertise can help your business grow.</p>

            <button className="bg-white px-4 py-3 font-medium rounded-md">GET IN TOUCH</button>
        </section>

    </section>
  )
}

export default ContactLink