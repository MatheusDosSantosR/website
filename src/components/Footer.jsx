const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-5">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Matheus Dos Santos</a>. Todos os direitos reservados.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Politicas de privacidade</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contatos</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
