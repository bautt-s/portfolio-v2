import About from "./about"
import Contact from "./contact"
import Experience from "./experience"
import Footer from "./footer"
import Projects from "./projects"

const MainInfo: React.FC<any> = (props) => {
    const { divRefs } = props

    return (
        <div className="w-full lg:w-[55%] lg:ml-[40px] md:pl-[20px] lg:pl-0 xl:ml-0 md:pr-[50px] 
        lg:pr-[100px] xl:pr-[110px] 2xl:pr-[200px] lg:py-[80px] flex flex-col max-w-4xl">
            <About aboutRef={divRefs[0]} />
            <Experience experienceRef={divRefs[1]} />
            <Projects projectsRef={divRefs[2]} />
            <Contact contactRef={divRefs[3]} />
            <Footer />
        </div>
    )
}

export default MainInfo