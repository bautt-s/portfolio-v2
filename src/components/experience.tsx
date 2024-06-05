import { FiArrowUpRight } from 'react-icons/fi'
import { BiLink } from 'react-icons/bi'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'

const experiences = [{
    title: 'Web Developer · Freelancer',
    subtitle: 'Full-stack Web Developer',
    date: 'MAY 2023 — PRESENT',
    description: 'In my free time, I like to keep myself busy taking on freelance contracts. I have lent my abilities to multiple clients, across a wide diversity of projects.',
    tags: ['React', 'GraphQL', 'TypeScript', 'MongoDB', 'Next.js', 'CSS', 'UI/UX'],
    links: [],
    mainLink: 'https://github.com/bautt-s?tab=repositories'
},
{
    title: 'Web Developer · Ensolvers',
    subtitle: 'QA Automation Engineer',
    date: 'AUG 2023 — MAR 2024',
    description: 'Deliver high-quality and robust solutions for a diverse array of projects for clients. Assure quality and reliability of these applications through manual and automated testing, planning and developing testing specs that help out identify problems in the process.',
    tags: ['JavaScript', 'TypeScript', 'Cypress', 'Java', 'Jira', 'Spring Boot'],
    links: [{ text: 'Jayaram', url: 'https://jayaramlaw.com/' }, { text: 'Ticketón', url: 'https://ticketon.com/' }],
    mainLink: 'https://www.ensolvers.com/',
}, 
{
    title: 'Computer Science Major',
    date: 'MAR 2022 — PRESENT',
    description: 'Currently pursuing a degree in Computer Science at a local university, UNS. Currently in my third year, I have already learned programming fundamentals, computer theory, application development, advanced calculus, and much more.',
    tags: ['Java', 'Data Structures', 'JavaScript', 'C++', 'Applied Maths'],
    links: [],
    mainLink: 'https://cs.uns.edu.ar/~devcs/downloads/PlanLCC2012.pdf',
}]

const Experience: React.FC<any> = (props) => {
    const { experienceRef } = props

    const handleResume = () => {
        const pdfUrl = '/resume.pdf'
        window.open(pdfUrl, '_blank')
    }

    return (
        <section className='mt-[100px]' id='experience' ref={experienceRef}>
            <h5 className="text-sm uppercase font-bold text-slate-200 tracking-widest mb-6 lg:hidden ml-6">
                Experience
            </h5>

            <div className='flex flex-col experience gap-y-[40px]'>
                {experiences.map((e, index) =>
                    <Link href={e.mainLink} key={index} rel="noopener noreferrer" passHref legacyBehavior>
                        <div className='flex flex-col md:flex-row link xl:gap-x-[15px] cursor-pointer transition-all px-6 py-4
                        lg:hover:bg-slate-500/10 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group duration-150
                        lg:hover:drop-shadow-lg rounded-lg lg:hover:backdrop-blur-[1px] md:gap-x-[60px] lg:gap-x-0'>
                            <div className='font-bold text-xs tracking-wide text-slate-400 md:min-w-[140px] lg:min-w-[100px] xl:min-w-[140px] mb-2 lg:mb-0' key={index}>
                                {e.date}
                            </div>

                            <div className='flex flex-col'>
                                <h4 className='text-slate-200 text-lg flex flex-row items-center gap-x-[7px]'>
                                    <span className='group-hover:text-[#64ffda] font-semibold'>{e.title}</span>
                                    <FiArrowUpRight className='mt-[6px] group-hover:text-[#64ffda] duration-150
                                    group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-all' />
                                </h4>

                                {e.subtitle && <span className='text-slate-400 font-medium'>{e.subtitle}</span>}

                                <p className='text-slate-300/80 text-sm leading-normal mt-2'>
                                    {e.description}
                                </p>

                                <div className='flex flex-row gap-x-[15px] mt-4'>
                                    {e?.links?.map((link, indexLink) =>
                                        <Link href={link.url} key={indexLink}
                                            className='flex flex-row items-center text-slate-200 gap-x-[5px] text-sm 
                                        hover:text-teal-400 transition-all duration-150'>
                                            <BiLink />
                                            <span className='font-medium'>{link.text}</span>
                                        </Link>
                                    )}
                                </div>

                                <div className='flex flex-row flex-wrap gap-[10px] mt-4'>
                                    {e.tags.map((tag, indexTag) =>
                                        <span key={indexTag} className='flex items-center text-teal-300 
                                    bg-teal-400/10 px-3 text-xs font-medium rounded-full py-1 leading-5'>
                                            {tag}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>

            <button className='text-slate-200 font-medium' onClick={handleResume}>
                <div className='flex flex-row items-center ml-6 group cursor-pointer mt-8'>
                    <span className='group-hover:underline decoration-teal-200 underline-offset-4'>View Full Résumé</span>
                    <BsArrowRightShort className='text-2xl ml-1 group-hover:ml-3 duration-150 transition-all' />
                </div>
            </button>
        </section>
    )
}

export default Experience