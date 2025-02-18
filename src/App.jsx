import { Navbar } from "./components/Navbar"
import { Smartphones } from "./components/smartphones"
import imgIphone13 from './assets/images/iphone13.png'
import imgIphone14 from './assets/images/iphone14.png'
import imgIphone15 from './assets/images/iphone15.png'
import imgIphone16 from './assets/images/iphone16.png'
import { SmartWatch } from "./components/SmartWatch"
import appleWatchSe from './assets/images/watch-se.png'
import appleWatchSeries10 from './assets/images/watch-series-10.png'
import appleWatchUltra2 from './assets/images/watch-ultra-2.png'
import imgSuporte from './assets/images/suporte.png'
import { Footer } from "./components/Footer"




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
                      <div className="w-full h-[648px] flex items-center justify-center gap-10">
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

          <hr />

          {/* SECTION SMARTPHONES */}
          <section className="w-screen h-screen flex justify-center items-center">
                      <div className="w-screen h-screen flex items-center justify-center gap-24">
                              <SmartWatch 
                              src={appleWatchSe}
                              productName={"Apple Watch SE"}
                              content={"Tudo que é essencial ao alcance do seu pulso."}
                              price={"A partir de R$ 5.499"}
                              />

                              <SmartWatch 
                              src={appleWatchSeries10}
                              productName={"Apple Watch Series 10"}
                              content={"O mais fino. Com a maior tela e recursos avançados de saúde."}
                              price={"A partir de R$ 5.499"}
                              />

                              <SmartWatch 
                              src={appleWatchUltra2}
                              productName={"Apple Watch Ultra 2"}
                              content={"O relógio definitivo para esportes e aventura."}
                              price={"A partir de R$ 874,92"}
                              />
                      </div>
          </section>

          {/* SECTION SUPPORT */}
          <section className="w-screen h-[662px] flex items-center justify-around">
                    <div className="w-[510px] h-[371px] border-2 rounded-xl p-12 gap-5 flex flex-col">
                          <h1 className="text-gray-300 text-3xl font-bold">24/7 no suporte ao cliente</h1>
                          <p className="text-gray-300 text-lg">Nosso suporte está 7/7 24horas por dia para te ajudar com qualquer problema em nossos aparelhos</p>
                          <button className="bg-gradient-to-l from-fuchsia-500 to-indigo-600 w-44 h-10 rounded-xl text-lg text-white mt-5">Nosso suporte</button>
                    </div>

                    <img src={imgSuporte} alt="Imagem dos atendentes do suporte" />
          </section>

          <Footer />
    </>
  )
}

export default App
