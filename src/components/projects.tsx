import Link from "next/link"
import { BsArrowRightShort } from "react-icons/bs"
import { FiArrowUpRight } from 'react-icons/fi'

const allProjects = [{
    title: 'NexoSmart',
    description: "Complete redesign and rework for NexoSmart website, the company I work at, providing tech services. Completely responsive web mixed with the aesthetics we were aiming for, with a perfect SEO score.",
    tags: ['SEO', 'TypeScript', 'Next.js', 'Tailwind'],
    image: 'nexosmart.png',
    mainLink: 'https://www.nexosmart.com.ar/'
}, {
    title: 'AspinRock',
    description: 'Application for a financial services startup, mostly frontend work, with mail notifications support and internal CMS, allowing web owner to post updates & blogs.',
    tags: ['MongoDB', 'TypeScript', 'Next.js', 'Tailwind'],
    image: 'aspin.png',
    mainLink: 'https://www.aspinrock.com/individual'
}, {
    title: 'Paint & Spill',
    description: 'A fun little project: a browser game made with JS and React, for desktop and mobile, where the player needs to fill the screen with only one color in the least amount of moves.',
    tags: ['React', 'TypeScript', 'Tailwind', 'CSS'],
    image: 'spillgame.png',
    mainLink: 'https://paint-n-spill.vercel.app/'
}, {
    title: 'CoTravel — Landing',
    description: 'Frontend project for a freelance client (travel agency): featuring a lot of animations and fancy styling, using Tailwind mixed with traditional CSS. Includes full responsive adaptation and dark mode colors.',
    tags: ['React', 'TypeScript', 'Tailwind', 'CSS'],
    image: 'cotravel.png',
    mainLink: 'https://cotravel.vercel.app/'
}]

const Projects: React.FC<any> = (props) => {
    const { projectsRef } = props

    return (
        <section className="mt-[140px]" id='projects' ref={projectsRef}>
            <h5 className="text-sm uppercase font-bold text-slate-200 tracking-widest mb-6 lg:hidden ml-6">
                Projects
            </h5>

            <div className="flex flex-col gap-y-[40px] experience">
                {allProjects.map((p, index) =>
                    <Link href={p.mainLink} key={index} passHref legacyBehavior>
                        <div className="flex flex-col-reverse md:flex-row items-start group cursor-pointer gap-x-[20px] 
                        lg:hover:bg-slate-500/10 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group px-6 py-4
                        lg:hover:drop-shadow-lg rounded-lg link transition-all duration-150 lg:hover:backdrop-blur-[1px]">
                            <img alt={p.title} src={p.image} width={180} height={32} loading="lazy" style={{ 'color': 'transparent' }}
                            className="rounded border-2 border-slate-200/10 transition 
                            group-hover:border-slate-200/30 mt-6 lg:mt-0 lg:w-[100px] lg:h-auto xl:w-[180px]" />

                            <div className="flex flex-col">
                                <h4 className='text-slate-200 text-lg flex flex-row items-center gap-x-[7px]'>
                                    <span className='lg:group-hover:text-[#64ffda] font-semibold'>{p.title}</span>
                                    <FiArrowUpRight className='mt-[6px] group-hover:text-[#64ffda] duration-150
                                    group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-all' />
                                </h4>

                                <p className='text-slate-300/80 text-sm leading-normal mt-2'>
                                    {p.description}
                                </p>

                                <div className='flex flex-row flex-wrap gap-[10px] mt-4'>
                                    {p.tags.map((tag, indexTag) =>
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

            <Link className='text-slate-200 font-medium' href="/archive">
                <div className='flex flex-row items-center ml-6 mt-8 group cursor-pointer'>
                    <span className='group-hover:underline decoration-teal-200 underline-offset-4'>View Full Project Archive</span>
                    <BsArrowRightShort className='text-2xl ml-1 group-hover:ml-3 duration-150 transition-all' />
                </div>
            </Link>
        </section>
    )
}

export default Projects