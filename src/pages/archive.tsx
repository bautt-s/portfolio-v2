import { Inter } from 'next/font/google'
import Link from 'next/link'
import { BsArrowLeftShort } from "react-icons/bs"
import { FiArrowUpRight } from 'react-icons/fi'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const archive = [{
    year: '2025',
    title: 'Colourly',
    type: 'Freelance',
    tags: ['SvelteKit', 'TypeScript', 'SQLite', 'OpenAI', 'Replicate', 'Stripe'],
    mainLink: 'https://colorly.ink/'
}, {
    year: '2024',
    title: 'TuFarmaPoint',
    type: 'NexoSmart',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'React Native', 'Redux'],
    mainLink: 'https://www.tufarmapoint.com/app/#/home'
},{
    year: '2024',
    title: 'GameMind',
    type: 'NexoSmart',
    tags: ['Expo', 'React Native', 'Tailwind', 'TypeScript', 'Redux'],
    mainLink: 'https://apps.apple.com/ar/app/gamemind/id6464437952'
},{
    year: '2024',
    title: 'NexoSmart — Website',
    type: 'NexoSmart',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'SEO', 'React'],
    mainLink: 'https://www.nexosmart.com.ar/'
},{
    year: '2023',
    title: 'FameFusion',
    type: 'Freelance',
    tags: ['Next.js', 'GraphQL', 'Tailwind', 'MongoDB', 'Stripe'],
    mainLink: 'TBA'
},{
    year: '2023',
    title: 'Ticketón',
    type: 'Ensolvers',
    tags: ['TypeScript', 'Cypress', 'Java', 'Spring'],
    mainLink: 'https://ticketon.com/'
},{
    year: '2023',
    title: 'Jayaram',
    type: 'Ensolvers',
    tags: ['TypeScript', 'Cypress', 'Java', 'Spring'],
    mainLink: 'https://jayaramlaw.com/'
}, {
    year: '2023',
    title: 'AspinRock',
    type: 'Freelance',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB'],
    mainLink: 'https://www.aspinrock.com/'
}, {
    year: '2023',
    title: 'Paint & Spill',
    type: 'Personal',
    tags: ['React', 'TypeScript', 'Tailwind', 'CSS'],
    mainLink: 'https://paint-n-spill.vercel.app/'
}, {
    year: '2023',
    title: 'CybSec — Landing',
    type: 'Freelance',
    tags: ['React', 'TypeScript', 'Tailwind', 'CSS'],
    mainLink: 'https://cyb-sec.vercel.app/'
}, {
    year: '2023',
    title: 'CoTravel — Landing',
    type: 'Freelance',
    tags: ['React', 'TypeScript', 'Tailwind', 'CSS'],
    mainLink: 'https://cotravel.vercel.app/'
}, {
    year: '2023',
    title: 'Artitude',
    type: 'Personal',
    tags: ['Next.js', 'GraphQL', 'TypeScript', 'MongoDB'],
    mainLink: 'https://artitude-app.vercel.app/'
}]

function extractMainDomain(input: string): string | null {
    const urlPattern = /^(?:https?:\/\/)?(?:www\d?\.)?([^/]+).*/;
    const match = input.match(urlPattern);
    if (match && match[1]) {
        return match[1];
    }
    return input;
}

export default function Archive() {
    return (
        <main className={`flex flex-col ${inter.variable} px-[25px] md:px-[60px] lg:px-[100px] 
        xl:px-[160px] py-[40px] md:py-[80px]`}>
            <svg className='absolute -z-20'>
                <filter id='f'>
                    <feTurbulence type='fractalNoise' baseFrequency='7.5' />
                </filter>
            </svg>

            <header className='font-inter'>
                <Link href='/' className='text-teal-300 flex flex-row items-center 
                font-medium leading-tight text-lg group gap-x-[5px] w-fit'>
                    <BsArrowLeftShort className='group-hover:translate-x-[-5px] transition-all duration-150 text-xl' />
                    <span>Bautista Sánchez</span>
                </Link>

                <h1 className='text-4xl sm:text-5xl font-bold text-slate-100 mt-2'>
                    All Projects <i>(outdated)</i>
                </h1>
            </header>

            <table className='mt-12 w-full border-collapse text-left'>
                <thead className='sticky top-0 z-10 border-b border-slate-500/10 px-6 py-5'>
                    <tr>
                        <th className='py-4 pr-8 font-semibold text-slate-200'>Year</th>
                        <th className='py-4 pr-8 font-semibold text-slate-200'>Project</th>
                        <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>Made at</th>
                        <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>Built with</th>
                        <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell'>Link</th>
                    </tr>
                </thead>

                <tbody>
                    {archive.map((p, index) =>
                        <tr key={index} className='border-b border-slate-300/10 last:border-none'>
                            <td className='py-4 pr-4 align-top text-slate-300/80'>{p.year}</td>

                            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-200 xl:min-w-[200px]'>
                                <span className='hidden sm:inline'>{p.title}</span>
                                
                                <a href={p.mainLink !== 'TBA' ? p.mainLink : '/archive'}
                                className='group sm:hidden flex flex-row items-center gap-x-[5px]'>
                                    <span className='group-hover:text-teal-300 transition-all duration-150'>{p.title}</span>

                                    {p.mainLink !== 'TBA' &&
                                        <FiArrowUpRight className='group-hover:text-[#64ffda] duration-150 text-sm
                                        group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-all' />}
                                </a>
                            </td>

                            <td className='hidden py-4 pr-4 align-top text-slate-300/80 min-w-[150px] lg:table-cell'>{p.type}</td>

                            <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                                <ul className='flex -translate-y-1.5 flex-wrap gap-[10px]'>
                                    {p.tags.map((tag, indexTag) =>
                                        <li key={indexTag} className='flex items-center text-teal-300 
                                    bg-teal-400/10 px-3 text-xs font-medium rounded-full py-1 leading-5'>
                                            {tag}
                                        </li>
                                    )}
                                </ul>
                            </td>

                            <td className="hidden py-4 align-top sm:table-cell xl:min-w-[200px]">
                                <a href={p.mainLink !== 'TBA' ? p.mainLink : '/archive'}
                                    className='flex flex-row items-center text-slate-300/80 gap-x-[5px] group'>
                                    <span className='group-hover:text-teal-300 transition-all duration-150'>
                                        {extractMainDomain(p.mainLink)}
                                    </span>

                                    {p.mainLink !== 'TBA' &&
                                        <FiArrowUpRight className='group-hover:text-[#64ffda] duration-150 text-sm
                                        group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-all' />}
                                </a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}