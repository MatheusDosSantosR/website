import { abilitys } from "../constants"

const AbilitySection = () => {
  return (
    <div className="relative border-b border-neutral-800 min-h-[100px]">
      <div className="flex justify-center">
        <span id="skills" className="flex justify-center bg-neutral-900 from-indigo-300 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase ">
          {/* Habilidades */}
        </span>
      </div>
      <div className="flex justify-center">
        <h2 className="mb-20 text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          <span className="bg-gradient-to-r from-indigo-300 to-indigo-400 text-transparent bg-clip-text">
          Habilidades
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center">
        {abilitys.map((skill, index) => (
          <a key={index} className="mb-20 mt-5 mx-2 block max-w-32 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={skill.img} className="mb-2 tracking-tight text-gray-900 dark:text-white"></img>
          </a>
        ))}
      </div>
    </div>
  )
}

export default AbilitySection
