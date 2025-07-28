import React from 'react'
import ComputingImage from '../../../../../Components/Images/switchesheavycomputing.png'
import Image from 'next/image'
const SwitchingHeavyComputing = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto px-1 mt-20'>
            <h1 className='text-[#147d61] text-[20px] md:text-[45px] lg:text-[45px] font-[700] font-monterrat text-center'>THE ULTIMATE SOLUTION FOR <br /> <span className='text-black bg-[#ffd900]' style={{ padding: '5px 15px 5px 15px' }}>HEAVY COMPUTING</span></h1>
            <div className="heavycomputing-bottom flex flex-col items-center justify-center w-full h-auto mt-10 md:mt-20 lg:mt-10">
                <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-30 lg:gap-50">
                    <div className="left-part text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                        <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Exceptional Processing Power</h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Built with high-performance capabilities, network switches handle complex networking tasks like data routing, traffic management, and load balancing with ease, ensuring seamless connectivity for all devices.</p>
                    </div>
                    <div className="right-part -mt-20 text-black bg-[#e9e9e9]  rounded-[20px] p-[20px] lg:p-[32px]" >
                        <h1 className=' text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Advance Graphics Capabilities</h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Equipped with cutting-edge technology, these switches support advanced features like VLANs, QoS, and link aggregation, providing robust solutions for data-intensive and high-traffic network environments.</p>
                    </div>
                </div>
                <div className="heavycomputing-bottom-divs my-20 md:my-5">
                    <Image alt='' src={ComputingImage} width={602} height={204} className='lg:w-[602px] lg:h-[204px] md:w-[406px] md:h-[137px]'/>
                </div>
                <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-30 lg:gap-50 mt-0 md:mt-10 lg:mt-0">
                    <div className="right-part text-black bg-[#e9e9e9]  rounded-[20px] p-[20px] lg:p-[32px]" >
                        <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Ample Bandwidth and Reliability</h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Equipped with high-capacity ports, network switches ensure reliable connectivity and ample bandwidth to handle heavy data traffic, making them ideal for both small and large-scale networks.</p>
                    </div>
                    <div className="left-part -mt-20 text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                        <h1 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Customizable and Scalable
                        </h1>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Designed for flexibility, these switches are customizable and scalable, supporting future network expansion and advanced configurations to meet evolving business demands.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SwitchingHeavyComputing
