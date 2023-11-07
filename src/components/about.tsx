const About: React.FC<any> = (props) => {
    const { aboutRef } = props

    return (
        <div className="text-slate-400 tracking-wide px-6 lg:pl-6 lg:pr-0 mt-[40px] lg:mt-0" id='about' ref={aboutRef}>
            <h5 className="text-sm uppercase font-bold text-slate-200 tracking-widest mb-6 lg:hidden">
                About
            </h5>

            <p>
                My tech journey started at a young age, fueled by a fascination with computers,
                programming, and all things tech. I&apos;d play around with coding even as a kid, creating
                simple websites and experimenting with Minecraft plugins and mods. Today, I&apos;m lucky to
                say that my work as a <strong className="cursor-pointer font-medium text-slate-200 
                    hover:text-teal-300 focus-visible:text-teal-300">QA Automation Engineer</strong> and <strong className="cursor-pointer font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                    Fullstack Web Developer</strong> is driven by my passion.
            </p>

            <br />

            <p>
                These days, my main focus is collaborating with the <a
                    href='https://www.ensolvers.com/' className="font-medium text-slate-200 
                hover:text-teal-300">Ensolvers</a> team to
                create high-quality projects that leave clients delighted with the attention
                to detail. In my free time, I also enjoy taking on <strong className="
                cursor-pointer font-medium text-slate-200 hover:text-teal-300 ">freelance
                    projects</strong> across various domains,
                aiming to deliver top-notch products that make clients happy.
            </p>

            <br />

            <span>
            When I&apos;m not coding, you&apos;ll often find me editing photos, having fun with
                video games (maybe attempting to reach Diamond again on <strong
                    className="cursor-pointer font-medium text-slate-200 s
                    hover:text-teal-300 focus-visible:text-teal-300">the rift!</strong>),
                or exploring the idea of starting my own clothing brand. And when I can
                step away from the screen, you might catch me watching <strong className="
                    font-medium text-slate-200 hover:text-teal-300 group relative cursor-pointer">
                    football
                    <div className='invisible group-hover:visible flex absolute bg-slate-800 w-16 h-12 
                    border-slate-400/10 duration-300 opacity-0 group-hover:opacity-100 top-[30px] border-2
                    items-center justify-center rounded-sm left-[50%] translate-x-[-50%] river-animate transition-all'>
                        <img src='river-plate.png' height={32} width={32} 
                        className="flex" alt='River Plate' />
                    </div>
                </strong>,
                hanging out with friends,
                or hitting the gym.
            </span>
        </div>
    )
}

export default About