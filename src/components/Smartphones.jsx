



export function Smartphones({ srcImage, phoneName, description, price }) {
    return (
        <>
            <div className='flex flex-col items-center'>
                    <img src={srcImage} alt="Imagem smartphone Iphone" className='w-[230px] h-[300px]' />
                    <h1 className='text-white text-4xl mt-14'>{phoneName}</h1>
                    <p className='text-base text-light-blue mt-5'>{description}</p>
                    <p className='text-lg text-white font-semibold text-center mt-5'>{price}</p>

                    <div className='flex justify-around w-full mt-10'>
                            <button className='bg-gradient-to-l from-fuchsia-500 to-indigo-600 w-32 h-10 rounded-2xl text-lg text-white'>Saiba mais</button>
                            <button className='text-white hover:text-indigo-600 transition'>Comprar {'>'} </button>
                    </div>
            </div>
        </>
    )
}