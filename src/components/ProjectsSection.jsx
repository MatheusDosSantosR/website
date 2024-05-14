import { projects } from "../constants/index"

const ProjectsSection = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="div text-center">
                <span id="project" className="bg-neutral-900 from-indigo-300 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Projetos
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Projetos
                    <span className="bg-gradient-to-r from-indigo-300 to-indigo-400 text-transparent bg-clip-text"> {" "}Criados</span>
                </h2>
            </div>
            <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
                {projects.map((project, index) => (
                    <div key={index} className="w-full sm:1/2 lg:w-1/4 mr-5 mt-3 flex justify-center mb-5">
                        <div className="max-w-sm bg-indigo-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center">
                            <a href="#">
                                <img className="rounded-t-lg" src={project.image} alt="card" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {project.text}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {project.description.length > 200 ?
                                        `${project.description.substring(0, 200)}...` : project.description
                                    }
                                </p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Saiba mais
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ProjectsSection
