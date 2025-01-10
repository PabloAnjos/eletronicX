import appleWatch from '../assets/images/watch-se.png'



export function SmartWatch({ src, productName, content, price }) {
    return (
        <>
            <div className='w-[300px] h-[500px] flex flex-col justify-center items-center text-center'>
                    <img src={src} alt="" className='w-[300px] h-[230px]'/>
                    <h1 className='text-white text-2xl mt-14'>{productName}</h1>
                    <p className='text-base text-light-blue mt-5'>{content}</p>

                    <div className='flex w-full justify-around items-center mt-10'>
                        <p className='text-sm font-normal text-white leading-6 max-w-20'>{price}</p>
                        <button className='bg-gradient-to-l from-fuchsia-500 to-indigo-600 w-32 h-10 rounded-2xl text-lg text-white'>Comprar</button>
                    </div>
            </div>
        </>
    )
}