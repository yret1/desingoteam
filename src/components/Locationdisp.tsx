
const Locationdisp = ({location, index}:{location: string, index: number}) => {

    let img: string = "";
    let locationTextSpan: string = "";
    let locationText: string = "";
    let locationText2: string = "";
    let phonetext: string = "";
    let emailtext: string = "";

    switch(location) {
        case "CANADA":
            img = "/assets/locations/desktop/image-map-canada.png";
            locationTextSpan = "Designo Central Office";
            locationText = "3886 Wellington Street";
            locationText2 = "Toronto, Ontario M9C 3J5"
            phonetext = "P : +1 253-863-8967";
            emailtext = "M : contact@designo.co"
            break;
        case "AUSTRALIA":
            img = "/assets/locations/desktop/image-map-australia.png";
            locationTextSpan = "Designo AU Office";
            locationText = "19 Balonne Street";
            locationText2 = "New South Wales 2443"
            phonetext = "P : (02) 6720 9092";
            emailtext = "M : contact@designo.au"
            break;
        case "UNITED KINGDOM":
            img = "/assets/locations/desktop/image-map-united-kingdom.png";
            locationTextSpan = "Designo UK Office";
            locationText = "13 Colorado Way";
            locationText2 = "Rhyd-y-fro SA8 9GA"
            phonetext = "P : 078 3115 1400";
            emailtext = "M : contact@designo.uk"
            break;
    }




  return (
    <section className={`w-full flex flex-col justify-center items-center md:grid md:grid-rows-2 md:place-items-center md:grid-cols-1 md:gap-4 md:px-10 lg:grid-cols-3 lg:grid-rows-1 `}>

        <section className="h-80 md:rounded-md md:shadow-sm w-full bg-center bg-cover"
        style={{backgroundImage: `url(${img})`}}>

        </section>

        <section className={`h-80  md:rounded-md md:shadow-sm w-full flex flex-col gap-4 justify-center items-center bgtwo bg-left-top lg:col-span-2 bg-secondary-100 bg-opacity-20 ${index == 1 ? "lg:order-first" : ""}`}>
            <h1 className="text-primary-100 font-jost font-medium text-[32px] pb-5">{location}</h1>

            <section className="w-full text-center">
                <h2 className="font-jost font-bold text-[15px]">{locationTextSpan}</h2>
                <p className="font-jost">{locationText}</p>
                <p className="font-jost">{locationText2}</p>
            </section>
            <section className="w-full text-center">
                <h2 className="font-jost font-bold text-[15px]">Contact</h2>
                <p className="font-jost">{phonetext}</p>
                <p className="font-jost">{emailtext}</p>
            </section>
        </section>

    </section>
  )
}

export default Locationdisp