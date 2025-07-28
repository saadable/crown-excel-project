import React from 'react'
import Popular1 from '../../../../../Components/Images/accessallinone1.png'
import Popular2 from '../../../../../Components/Images/accessallinone2.png'
import Popular3 from '../../../../../Components/Images/accessallinone3.png'
import Popular4 from '../../../../../Components/Images/accessallinone4.png'
import Popular5 from '../../../../../Components/Images/accessallinone5.png'
import Popular6 from '../../../../../Components/Images/accessallinone6.png'
import Image from 'next/image'

const Business = [
    { Image: Popular1, Title: 'HP Laptop bag K0B38AA' },
    { Image: Popular2, Title: 'Logitech H390 USB Headset' },
    { Image: Popular3, Title: 'Crucial RAM 32GB DDR4' },
]
const Individuals = [
    { Image: Popular4, Title: 'Kingston 16GB DDR5' },
    { Image: Popular5, Title: 'Meetion HP010 Scalable' },
    { Image: Popular6, Title: 'ASUSROG STRIX Z690-E' },
]

const AccessoriesAllinOne = () => {
    return (
        <div className='mt-5 lg:mt-10'>
            <h1 className='bg-[#ffd900] font-[700] flex items-center justify-center w-full h-[90px] text-center text-black text-[20px] md:text-[40px] lg:text-[50px] font-montserrat uppercase'>ALL-IN-ONE ACCESSORY SOLUTIONS</h1>
            <div className="for- mt-5 lg:mt-10">
                <div className="text-button flex md:flex-row lg:flex-row flex-col items-center justify-between px-20 py-7">
                    <h1 className='text-[#147d61] text-[27px] lg:text-[50px] font-[600]'>For Businesses:</h1>
                    <button className='p-[5px] lg:p-[10px] mt-5 lg:mt-0 bg-[#147d61] text-white flex items-center justify-center text-[18px] lg:text-[20px] font-[500] w-[166px] h-[40px] rounded-[10px]'>Visit Our Store</button>
                </div>
                <div className="products flex flex-col md:flex-row lg:flex-row items-center justify-between gap-10 lg:gap-0 lg:px-20 py-7" style={{
                    background: 'linear-gradient(to left, #000000 0%, #1a1a1a 50%, #2b2b2b 100%)'
                }}
                >
                    {Business.map((item, i) => (
                        <div className="product-item flex flex-col items-center  md:w-[250px] lg:w-[285px] h-auto" key={i}>
                            {item.Image  && <Image className='w-full h-[285px]' src={item.Image} alt={item.Title} width={285} height={285} />}
                            {item.Title && <h1 className='text-[20px] lg:text-[26px] font-[700] mt-5 w-[285px] text-center '>{item.Title}</h1>}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="for- mt-10">
                <div className="text-button flex md:flex-row lg:flex-row flex-col items-center  justify-between px-20 py-7">
                    <h1 className='text-[#147d61] text-[27px] lg:text-[50px] font-[600]'>For Individuals:</h1>
                    <button className='p-[5px] lg:p-[10px] mt-5 lg:mt-0 bg-[#147d61] text-white flex items-center justify-center text-[18px] lg:text-[20px] font-[500] w-[166px] h-[40px] rounded-[10px]'>Visit Our Store</button>
                </div>
                <div className="products flex flex-col md:flex-row lg:flex-row items-center gap-10 lg:gap-0 justify-between lg:px-20 py-7" style={{
                    background: 'linear-gradient(to left, #000000 0%, #1a1a1a 50%, #2b2b2b 100%)'
                }}
                >
                    {Individuals.map((item, i) => (
                        <div className="product-item flex  flex-col items-center   md:w-[250px] lg:w-[285px] h-auto" key={i}>
                            {item.Image  && <Image className='w-full h-[285px]' src={item.Image} alt={item.Title} width={285} height={285} />}
                            {item.Title && <h1 className='text-[20px] lg:text-[26px] font-[700] mt-5 w-[285px] text-center '>{item.Title}</h1>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AccessoriesAllinOne
