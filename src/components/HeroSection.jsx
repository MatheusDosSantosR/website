import Typewriter from "../components/useTypewriter"
import img1 from "../assets/heroImg.jpg"

const HeroSection = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-1/2 flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl:text-7xl text-center tracking-wide">
                    Matheus Dos Santos
                    <span className="flex flex-col bg-gradient-to-r from-indigo-300 to-indigo-400 text-transparent bg-clip-text">
                        {" "}Quality Assured
                    </span>

                </h1>
                <p className=" mt-2 first-line:text-lg text-center text-neutral-500 max-w-2xl">
                    <Typewriter
                        text="Profissional comprometido e meticuloso em garantir a excelência dos produtos através de sua expertise em Garantia de Qualidade."
                        speed="100">
                    </Typewriter>
                </p>
                <div className="flex justify-center my-10">
                    <a href="#" className="bg-gradient-to-r from-indigo-300 to-indigo-400 py-3 px-4 mx-3 rounded-md">
                        Entre em Contato
                    </a>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items items-end mt-6 lg:mt-20">
                <div className="rounded-lg border bg-indigo-300 shadow-sm mx-2 my-4">
                    <img src={img1} alt="Dev Image" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
