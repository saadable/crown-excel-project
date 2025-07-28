import Image from 'next/image'
import React from 'react'
import Background from '../../../../../Components/Images/ProductsBrandBackground.png'
import Semitop from '../../../../../Components/Images/semicirlcetop.png' 
import Semibottom from '../../../../../Components/Images/semicirlcebottom.png' 

const ManagedITWeareBest = () => {
    return (
        <div className='flex flex-col items-center mt-10'>
            <div className="heading-text relative my-10 mx-5 md:mx-0">
                <Image alt='' src={Semitop} width={122} height={61} className='absolute -top-15.25 -right-10 lg:-top-15.25 lg:-right-10'/>
                <h1 className='bg-[#119472] rounded text-white text-[20px] md:text-[44px] lg:text-[44px] font-[700] font-montserrat px-10 py-2 md:px-[50px] md:py-[15px] lg:px-[50px] lg:py-[15px] h-[50px] md:h-[74px] lg:h-[74px] flex items-center justify-center'>How We Are Best</h1>
                <Image alt='' src={Semibottom} width={122} height={61} className='absolute -bottom-15.25 -left-10  lg:-bottom-15.25 lg:-left-10'/>
            </div>
            <div
                className="w-full min-h-[320px] md:min-h-[279px] relative mt-10 flex items-center justify-center overflow-hidden"
                style={{
                    background: 'linear-gradient(90deg, #54595f 0%, #232426 70%, #18191b 100%)',
                }}
            >
                {/* Overlay background image with blend for dots/stars */}
                <div className="absolute z-0 right-0 top-50 lg:top-0 w-full  pointer-events-none select-none h-full" style={{ mixBlendMode: 'screen', opacity: 0.7 }}>
                    <Image alt='' src={Background} width={8000} height={8000}  className='h-full'/>
                </div>
                <div className="relative z-10 flex flex-col md:flex-col items-center  w-full max-w-[1400px] px-4 md:px-20 py-8 md:py-0 ">


                    <div className="text-area-firwall  p-[20px] md:p-[50px]  text-center  ">
                        At Crown Excel, we understand that every business is unique, which is why we provide customized IT solutions that align with your goals. Our team of certified professionals combines technical expertise with a customer-first approach, ensuring your IT environment is secure, reliable, and future-ready. Whether it’s proactive issue resolution or advanced analytics, we deliver excellence in every aspect of Managed IT Services.
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ManagedITWeareBest
