import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
    {
        title: "Taytayan Camp Hub",
        description:
            "A full-stack multi-role web application for a camp resort in Olango Island, featuring food ordering, room booking, and event ticketing with real-time order tracking and online payments.",
        image: "/projects/taytayancamphub.svg",
        tech: ["Laravel", "Vue", "InertiaJs", "MySQL", "Quasar", "Pinia", "Paymongo API", "Google Maps API"],
        demo: "",  
        github: "https://github.com/sumagangjoren/taytayan-camp-hub",
    },
    {
        title: "Spotify Chat",
        description:
            "A real-time chat application built with Node.js and Express that integrates the Spotify Web API, enabling users to share and discover music within live chat sessions via WebSocket connections.",
        image: "/projects/spotifychat.svg",
        tech: ["Vue", "Vuetify", "Node.js", "jsonwebtoken", "socket.io", "MySQL", "Pinia"],
        demo: "https://spotify-chat-tilf.onrender.com/",
        github: "https://github.com/sumagangjoren/spotify-chat",
    },
    {
        title: "Wordvault",
        description:
            "A vocabulary learning app to save words, organize collections, take quizzes, and write notes.",
        image: "/projects/wordvault.svg",
        tech: ["React", "Tailwind", "Supabase"],
        demo: "https://wordvault-iota.vercel.app",
        github: "https://github.com/sumagangjoren/wordvault",
    },
    {
        title: "Skycast",
        description:
            "A modern, responsive weather dashboard with AI-powered insights, real-time tracking, and multi-location favorites.",
        image: "/projects/skycast.svg",
        tech: ["React", "Tailwind"],
        demo: "https://skycast-kappa-two.vercel.app",
        github: "https://github.com/sumagangjoren/skycast",
    },
]

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20">
            <div>
                <h2 className="text-xl mb-10">Some of my projects</h2>
            </div>
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="border border-white/10 bg-white/5 rounded-xl overflow-hidden transition hover:border-green-500/40 hover:bg-white/10"
                    >

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-contain p-2 bg-white/5 transition duration-500 hover:scale-105 opacity-90"
/>
                        </div>

                        <div className="p-6">

                            {/* Title */}
                            <h3 className="text-lg font-medium mb-2">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-300 text-sm mb-4">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-3 py-1 border border-white/10 rounded-full text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-white/20 transition hover:border-green-500 "
                                    >
                                        <FaExternalLinkAlt size={14} />
                                        Demo
                                    </a>
                                )}

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-white/20 transition hover:border-green-500 "
                                >
                                    <FaGithub size={14} />
                                    Code
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects