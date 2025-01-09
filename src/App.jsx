import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
          <Navbar />

          {/* SECTION HOME */}
          <section className="w-screen h-[768px] bg-[url('./assets/images/background-home.png')] bg-no-repeat bg-center flex items-center ml-10">
                    <div className="w-[600px] h-[400px] ml-48">
                            <h1 className="text-2xl text-gray-400 font-light">Smartphone Series</h1>
                            <h2 className="text-6xl text-gray-200 font-light mt-10 max-w-[400px] leading-tight">Design com Beleza e Funcionalidade</h2>
                            <button className="bg-gradient-to-l from-fuchsia-500 to-indigo-600 w-44 h-10 rounded-2xl mt-10">Compre agora</button>
                    </div>
          </section>
    </>
  )
}

export default App
