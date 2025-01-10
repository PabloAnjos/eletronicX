import logo from '../assets/images/logo.png'
import iconFacebook from '../assets/images/facebook.png'
import iconInstagram from '../assets/images/instagram.png'
import iconLinkedin from '../assets/images/linkedin.png'


export function Footer() {
    return (
        <>
                <footer className='w-screen h-[150px] flex items-center justify-around mt-48'>
                            <img src={logo} alt="Logo EletronicX"  className='w-[100px]'/>

                           <div className='flex justify-between w-[500px]'>
                                    <p className='text-white text-2xl max-w-64'>Rua brás da silva, 281. Cidade São paulo, Brasil.</p>

                                    <div className='flex flex-col gap-2'>
                                            <p className='text-white text-sm'>11 4002 - 8922</p>
                                            <hr />
                                            <p className='text-white text-sm'>contato@wecht.com</p>
                                            <hr className='w-40'/>
                                    </div>
                           </div>

                            <div className='flex'>
                                    <img src={iconFacebook} alt="Icon Facebook" />
                                    <img src={iconInstagram} alt="Icon Instagram" />
                                    <img src={iconLinkedin} alt="Icon Linkedin" />
                            </div>
                </footer>
        </>
    )
}