import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaVuejs, FaLaravel, FaBootstrap, FaPhp, FaCode, FaServer, FaWordpress } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiMysql, SiVuetify, SiSupabase, SiPinia } from "react-icons/si"

const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "PHP", icon: FaPhp },
    { name: "Laravel", icon: FaLaravel },
    { name: "JavaScript", icon: FaJs },
    { name: "Vue", icon: FaVuejs },
    { name: "Vuetify", icon: SiVuetify },
    { name: "Pinia", icon: SiPinia },
    { name: "React", icon: FaReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "MySQL", icon: SiMysql },
    { name: "Supabase", icon: SiSupabase },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Figma", icon: FaFigma },
    { name: "WordPress", icon: FaWordpress },
    { name: "MVC Pattern", icon: FaCode },
    { name: "RESTful API", icon: FaServer },
]

const About = () => {
    return (
        <section id="about" className="min-h-1/2 mx-auto  w-full justify-between py-20 items-center">
            <div className="grid gap-16 md:grid-cols-2">

                {/* Left */}
                <div className="space-y-6">
                    <h2 className="text-xl">A bit about me</h2>

                    <div className="space-y-4 text-slate-300 leading-relaxed">
                       <p>
                        I hold a Bachelor's degree in Information Technology and see myself as someone who is always learning. 
                        {/* I believe that learning never really stops, especially in technology where things are constantly evolving. */}
                        Technology is constantly evolving, and I believe the learning process never truly stops.
                       </p>

                       <p>
                        I am someone who enjoys learning and always eager to expand what I know. 
                        I believe that working smart is just as important as working hard, and that thoughtful problem solving leads to better results. 
                        For me, being a developer also means staying curious and embracing the mindset of a lifelong learner.
                       </p>
                    </div>
                    <div className="mt-10">

                        <h3 className=" mb-4 text-xl">
                            Academic Achievements
                        </h3>

                        <ul className="space-y-3 text-slate-300 ">

                            <li className="flex items-start gap-3">
                                <span className="text-yellow-400">🏆</span>
                                <a href="https://www.facebook.com/photo.php?fbid=122143038146225287&set=a.122138044436225287&type=3" target="_blank" rel="noreferrer" className="hover:text-green-500 transition">
                                    <span>
                                        <strong>1st Place</strong> – Programming Competition (3rd Year)
                                    </span>
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-gray-300">🥈</span>
                                <a href="https://www.facebook.com/photo.php?fbid=173082538896856&set=a.115608564644254&type=3" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                                    <span>
                                        <strong>2nd Place</strong> – Programming Competition (2nd Year)
                                    </span>
                                </a>
                            </li>

                        </ul>

                    </div>
                </div>

                {/* Right */}
                <div className="space-y-6">
                    <h2 className="text-xl">Some of the tools I use</h2>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {skills.map((skill) => {
                            const Icon = skill.icon

                            return (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center gap-2 text-slate-300 hover:text-green-500 transition"
                                >
                                    <Icon className="text-4xl" />
                                    <span className="text-sm text-center">{skill.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About