import { Navbar } from "./components/Navbar"
import { Smartphones } from "./components/smartphones"
import imgIphone13 from './assets/images/iphone13.png'
import imgIphone14 from './assets/images/iphone14.png'
import imgIphone15 from './assets/images/iphone15.png'
import imgIphone16 from './assets/images/iphone16.png'




function App() {
  return (
    <>
          <Navbar />

          {/* SECTION HOME */}
          <section className="w-screen h-[768px] bg-[url('./assets/images/background-home.png')] bg-no-repeat bg-center flex items-center ml-10">
                    <div className="w-[600px] h-[400px] ml-48">
                            <h1 className="text-2xl text-gray-400 font-light">Smartphone Series</h1>
                            <h2 className="text-6xl text-gray-200 font-light mt-10 max-w-[400px] leading-tight">Design com Beleza e Funcionalidade</h2>
                            <button className="bg-gradient-to-l from-fuchsia-500 to-indigo-600 w-44 h-10 rounded-2xl mt-10 text-xl text-white">Compre agora</button>
                    </div>
          </section> 

          <hr  className="mt-16"/>

          {/* SECTION SMARTPHONES */}
          <section className="w-screen h-screen flex justify-center items-center">
                      <div className="w-[1440px] h-[648px] flex items-center justify-center gap-10">
                              <Smartphones 
                              srcImage={imgIphone13}
                              phoneName={"iPhone 13"}
                              description={"Muito poder ao seu alcance."}
                              price={"A partir de R$ 358,25/mês ou R$ 4.299*"}
                              />

                              <Smartphones 
                              srcImage={imgIphone14}
                              phoneName={"iPhone 14"}
                              description={"Cheio de talentos."}
                              price={"A partir de R$ 483,25/mês ou R$ 5.799*"}
                              />

                              <Smartphones 
                              srcImage={imgIphone15}
                              phoneName={"iphone 15"}
                              description={"Impressionante como sempre."}
                              price={"A partir de R$ 541,58/mês ou R$ 6.499*"}
                              />

                              <Smartphones 
                              srcImage={imgIphone16}
                              phoneName={"iPhone 16"}
                              description={"Poderoso em tudo."}
                              price={"A partir de R$ 649,92/mês ou R$ 7.799*"}
                              />
                      </div>
          </section>
    </>
  )
}

export default App
