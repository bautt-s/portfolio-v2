import Link from 'next/link';
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Sidebar: React.FC<any> = (props) => {
    const { liRefs } = props

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="lg:sticky lg:top-0 flex flex-col text-white font-inter lg:flex lg:justify-between max-w-4xl
        lg:gap-4 lg:h-screen pl-6 py-12 lg:py-[80px] md:pl-[50px] lg:pl-[100px] xl:pl-[110px] 2xl:pl-[200px] lg:w-[50%]">
            <header className="lg:flex lg:flex-col lg:max-h-screen">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
                    <Link href="/">Bautista Sánchez</Link>
                </h1>

                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Full-stack Developer @ 
                
                    <a href='https://www.nexosmart.com.ar/' target='_blank' className='ml-2 relative 
                    top-[1px] underline underline-offset-4 decoration-2 decoration-teal-300 text-teal-300'>
                        NexoSmart
                    </a>
                </h2>

                <p className="mt-4 max-w-sm leading-normal text-slate-300/80">
                    I craft engaging web experiences and engineer robust, future-ready digital infrastructures.
                </p>
            </header>

            <ul className='hidden lg:flex flex-col gap-y-[25px]'>
                <li className="before:border-t before:border-solid before:border-slate-400 before:content-'' before:transition-all before:duration-300
                    before:inline-block before:w-8 before:mb-1 font-bold uppercase tracking-widest text-slate-400 before:mr-4 hover:before:border-slate-300
                    before:border-[1px] text-xs hover:before:w-16 hover:text-slate-200 transition-all duration-300 cursor-pointer w-fit"
                    ref={liRefs[0]} onClick={() => scrollToSection('about')}>
                    About
                </li>

                <li className="before:border-t before:border-solid before:border-slate-400 before:content-'' before:transition-all before:duration-300
                    before:inline-block before:w-8 before:mb-1 font-bold uppercase tracking-widest text-slate-400 before:mr-4 hover:before:border-slate-300
                    before:border-[1px] text-xs hover:before:w-16 hover:text-slate-200 transition-all duration-300 cursor-pointer w-fit"
                    ref={liRefs[1]} onClick={() => scrollToSection('experience')}>
                    Experience
                </li>

                <li className="before:border-t before:border-solid before:border-slate-400 before:content-'' before:transition-all before:duration-300
                    before:inline-block before:w-8 before:mb-1 font-bold uppercase tracking-widest text-slate-400 before:mr-4 hover:before:border-slate-300
                    before:border-[1px] text-xs hover:before:w-16 hover:text-slate-200 transition-all duration-300 cursor-pointer w-fit"
                    ref={liRefs[2]} onClick={() => scrollToSection('projects')}>
                    Projects
                </li>

                <li className="before:border-t before:border-solid before:border-slate-400 before:content-'' before:transition-all before:duration-300
                    before:inline-block before:w-8 before:mb-1 font-bold uppercase tracking-widest text-slate-400 before:mr-4 hover:before:border-slate-300
                    before:border-[1px] text-xs hover:before:w-16 hover:text-slate-200 transition-all duration-300 cursor-pointer w-fit"
                    ref={liRefs[3]} onClick={() => scrollToSection('contact')}>
                    Contact
                </li>
            </ul>

            <div className='flex flex-row gap-x-[25px] mt-6 lg:mt-0 text-slate-300/80'>
                <a target='_blank' href='https://github.com/bautt-s/'>
                    <BsGithub className='hover:text-slate-200 text-2xl cursor-pointer' />
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/baut-s/'>
                    <BsLinkedin className='hover:text-slate-200 text-2xl cursor-pointer' />
                </a>
            </div>
        </div>
    )
}

export default Sidebar