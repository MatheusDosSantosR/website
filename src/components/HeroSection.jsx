import Typewriter from "../components/useTypewriter"
import img1 from "../assets/heroImg.jpg"

const HeroSection = () => {
    const initialText = "Sou um QA com 3 anos de experiência em testes usando Cypress, Postman, k6 e Appium. Também exploro programação com React e TypeScript, combinando minhas habilidades para garantir e aprimorar a qualidade de aplicações.";
    const linkWhatsApp = "https://api.whatsapp.com/send?phone=5562981678333&text=Ola,%20Gostaria%20de%20falar%20com%20matheus!";
    
    return (
        <div className="flex flex-row justify-center border-b border-neutral-800 min-h-[800px]">
            <div className="w-1/2 flex flex-col justify-around items-center mt-6 lg:mt-20 ml-1">
                <h1 className="text-4xl sm:text-6xl:text-7xl text-center tracking-wide">
                    Matheus Dos Santos
                    <span className="flex flex-col bg-gradient-to-r from-indigo-300 to-indigo-400 text-transparent bg-clip-text">
                        {" "}Quality Assured
                    </span>

                </h1>
                <p className="block justify-center mt-2 first-line:text-lg text-justify text-neutral-500 max-w-2xl max-h-2x1">
                    <Typewriter
                        text={initialText}
                        speed="50">
                    </Typewriter>
                </p>
                <div className="flex justify-center my-10">
                    <button onClick={() => window.open(linkWhatsApp, "_blank")} className="bg-gradient-to-r from-indigo-300 to-indigo-400 py-3 px-4 mx-3 rounded-md bg-sky-500 hover:bg-sky-700">
                        Entre em Contato
                    </button>
                </div>
            </div>

            <div className="mt-6 lg:mt-20 h-2/4 w-2/4 min-h-[200px]">
                <div className="rounded-lg border bg-indigo-300 shadow-sm mx-2 my-4 min-h-full min-w-full">
                    <img src={img1} alt="Dev Image" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
