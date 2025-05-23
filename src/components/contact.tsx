const Contact: React.FC<any> = (props) => {
    const { contactRef } = props

    return (
        <section id='contact' className="px-6 mt-[140px]  max-w-2xl" ref={contactRef}>
            <h5 className="text-sm uppercase font-bold text-slate-200 tracking-widest mb-6 lg:hidden">
                Contact
            </h5>

            <h2 className="text-slate-200 text-lg font-medium">Get in Touch!</h2>

            <p className="mt-2 text-slate-300/80 text-sm tracking-wide leading-normal">
                Want to get in contact with me? I am always open to discuss job opportunities or projects. 
                <br className="hidden md:inline lg:hidden" /> And if you only want to say "hi", I will get back at you, through my LinkedIn, or mail below.
            </p>

            <a href="mailto:2f.sanchezbautista@gmail.com"
            className="flex flex-row items-center gap-x-[5px] mt-6 group cursor-pointer">
                <span className="text-slate-200 font-medium text-lg group-hover:underline underline-offset-4 decoration-teal-300">
                — Say hello
                </span>

                <span className="text-xl animate-waving-hand">👋🏻</span>
            </a>
        </section>
    )
}

export default Contact