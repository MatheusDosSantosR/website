import { projects } from "../constants/index"

const ProjectsSection = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[700px]">
            <div className="div text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    <span data-cy="project-title" className="bg-gradient-to-r from-indigo-300 to-indigo-400 text-transparent bg-clip-text"> Projetos</span>
                </h2>
            </div>
            <div data-cy="section-project" className="flex flex-wrap justify-center mt-10 lg:mt-20">
                {projects.map((project, index) => (
                    <div data-cy="card" key={index} className="w-full sm:1/2 lg:w-1/4 mr-5 mt-3 flex justify-center mb-5">
                        <div className="flex flex-col max-w-sm bg-indigo-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={project.image} alt="card" />
                            </a>
                            <div className="p-5 flex flex-col h-full space-y-4">
                                <a href="#" className="flex-shrink-0">
                                    <h5 data-cy="card-text" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {project.text}
                                    </h5>
                                </a>
                                <p data-cy="card-description" className="flex-grow text-gray-700 dark:text-gray-400">
                                    {project.description.length > 200 ?
                                        `${project.description.substring(0, 200)}...` : project.description
                                    }
                                </p>
                                <a
                                    data-cy={"card-button-" + index}
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    aria-label="Saiba mais sobre o projeto"
                                >
                                    Saiba mais
                                    <svg className="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
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
