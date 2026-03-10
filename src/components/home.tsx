import { FaChevronDown } from "react-icons/fa"
import SocialButtons from "./socialButtons"

const Home = () => {

    return (
        <section id="home" className="flex text-center justify-between py-20 items-center">

            <div>
                <h1 className="text-3xl font-bold">
                    Joren Sumagang
                </h1>
                <p className="mt-2 text-sm tracking-widest text-green-500 uppercase">
                    Aspiring Software Developer
                </p>
                <div className="pt-5 sm:px-50 text-slate-300">
                    Hi! I'm Joren, I enjoy solving problems
                    and turning ideas into real world applications,
                    driven by a passion for creating meaningful solutions.
                </div>
                <div className="flex justify-center gap-4 py-5">

                    <a
                        href="#home"
                        className="rounded-lg px-6 py-3 text-sm  cursor-pointer border-green-500 border hover:bg-green-400 hover:text-black"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#projects"
                        className="rounded-lg border border-white/20 px-6 py-3 cursor-pointer text-sm  hover:border-green-500 hover:bg-green-400/10"
                    >
                        View Projects
                    </a>


                </div>

                <SocialButtons />

                <div className="flex justify-center mt-10">
                    <a
                        href="#projects"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full  hover:border-green-500 hover:bg-green-400/10 animate-bounce"
                    >
                        <FaChevronDown />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home