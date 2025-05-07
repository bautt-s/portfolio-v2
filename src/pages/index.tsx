import MainInfo from '@/components/main-info'
import Sidebar from '@/components/sidebar'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export default function Home() {
    const divRefs = ['about', 'contact', 'experience', 'projects'].map(() => useRef<HTMLDivElement | null>(null));
    const liRefs = ['liAbout', 'liContact', 'liExperience', 'liProjects'].map(() => useRef<HTMLLIElement | null>(null));

    const [lastActiveLi, setLastActiveLi] = useState<number | null>(null);

    const handleIntersection = (index: number, isIntersecting: boolean) => {
        if (isIntersecting) {
            setLastActiveLi(index);
        }
    };

    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px 0px -20% 0px',
            threshold: 0.5,
        };

        const observers: IntersectionObserver[] = divRefs.map((divRef, index) => {
            return new IntersectionObserver((entries) => {
                const entry = entries[0];
                handleIntersection(index, entry.isIntersecting);
            }, options);
        });

        divRefs.forEach((divRef, index) => {
            divRef.current && observers[index].observe(divRef.current);
        });

        return () => {
            observers.forEach((observer) => {
                observer.disconnect();
            });
        };
    }, []);

    useEffect(() => {
        liRefs.forEach((liRef, index) => {
            if (lastActiveLi === index) {
                liRef?.current?.classList.add('activeStyle');
            } else {
                liRef?.current?.classList.remove('activeStyle');
            }
        });
    }, [lastActiveLi]);

    return (
        <main className={`flex flex-col lg:flex-row lg:justify-center ${inter.variable}`}>
            <svg className='absolute'>
                <filter id='f'>
                    <feTurbulence type='fractalNoise' baseFrequency='7.5' />
                </filter>
            </svg>
            
            <Sidebar liRefs={liRefs} />
            <MainInfo divRefs={divRefs} />
        </main>
    )
}