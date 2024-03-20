

const Contactform = () => {



  return (
    <section className="w-full md:p-12">

        <form className="w-full flex flex-col items-center justify-center md:rounded-md lg:flex-row gap-2 p-4 pb-12 bgtwo bg-top bg-primary-100">

            <section className="flex flex-col lg:flex-1 justify-center items-center text-center md:text-start">
                <h1 className="pt-14 md:px-12 w-full font-jost font-medium text-white text-[32px] pb-4">Contact Us</h1>
                <p className="font-jost w-full font-normal md:px-12 text-white text-[15px] ">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </section>

            <section className="flex flex-col w-full lg:flex-1 justify-center items-center py-4">

            <fieldset className="w-full flex justify-center items-center bg-transparent">
                <input className="font-jost font-medium text-[15px] placeholder:font-jost placeholder:text-white placeholder:text-opacity-50 bg-transparent text-white w-10/12 focus:outline-none p-4 border-b-[1px] border-white" type="text" id="name" placeholder="Name" name="name" required />
            </fieldset>
            <fieldset className="w-full flex justify-center items-center bg-transparent">
                <input className="font-jost font-medium text-[15px] placeholder:font-jost placeholder:text-white placeholder:text-opacity-50 bg-transparent text-white w-10/12 focus:outline-none p-4 border-b-[1px] border-white" type="email" id="email" placeholder="Email Address" name="email" required />
            </fieldset>
            <fieldset className="w-full flex justify-center items-center bg-transparent">
                <input className="font-jost font-medium text-[15px] placeholder:font-jost placeholder:text-white placeholder:text-opacity-50 bg-transparent text-white w-10/12 focus:outline-none p-4 border-b-[1px] border-white" type="tel" id="phone" placeholder="Phone" name="phone" required />
            </fieldset>
            <fieldset className="w-full flex justify-center items-center bg-transparent">
                <textarea className="font-jost font-medium text-[15px] placeholder:font-jost placeholder:text-white placeholder:text-opacity-50 bg-transparent text-white w-10/12 focus:outline-none p-4 border-b-[1px] border-white" id="message" rows={4} placeholder="Your Message" name="message" required />
            </fieldset>

            <section className="w-full flex justify-center items-center">
            <button className="w-10/12 mt-8 bg-white text-primary-100 hover:bg-secondary-100 hover:text-white  font-jost font-semibold text-[15px] p-4 rounded-md" type="submit">Submit</button>
            </section>
            </section>
        </form>
    </section>
  )
}

export default Contactform