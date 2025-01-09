import logoMenu from '../assets/images/Menu.png'
import logo from '../assets/images/logo.png'
import iconCart from '../assets/images/shopping-cart.png'
import iconSearch from '../assets/images/search.png'

export function Navbar() {
    return (
        <>
            <nav className='w-screen flex items-center justify-between p-[50px]'>
                <div className='flex items-center gap-8'>
                        <img src={logoMenu} alt="Logo Menu"  className='hover:cursor-pointer'/>
                        <img src={logo} alt="Logo EletronicX" />

                        <h1 className='text-white text-xl font-light'>Produtos</h1>
                        <h2 className='text-white text-xl font-light'>Contato</h2>
                </div>

                <div className='flex items-center gap-7'>
                        <img src={iconCart} alt="Icon Cart" className='hover:cursor-pointer' />
                        <img src={iconSearch} alt="Icon Search" className='hover:cursor-pointer' />
                        <button className='text-black text-base bg-white p-4 rounded-lg hover:bg-[#dbdbdb] transition'>Comprar</button>
                </div>
            </nav>

            <hr className='text-[#454545]'/>
        </>
    )
}