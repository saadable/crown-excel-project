import React from 'react'
import BannerImage from '../../../../Components/Images/ourmanagementbanner.jpg'
import Image from 'next/image'
const OurManagementBanner = () => {
  return (
    <div className='relative'>
      <div className="management-banner h-[320px] md:h-[419px] lg:h-[455px] flex ">
        <div className="management-banner-left bg-[#084032] md:basis-[30%] lg:basis-[45%] hidden md:block lg:block "></div>
        <div className="management-banner-right md:basis-[70%] lg:basis-[55%]">
          <Image alt='' src={BannerImage} width={4000} height={4000} className='h-full w-full' />
        </div>
      </div>
      <div className="banner-text p-[30px] lg:p-[40px] bg-white/70 absolute w-fit h-[305px]  md:w-[320px] lg:w-[580px] md:h-[402px] lg:h-[430px] top-2.5 left-5 right-5  lg:left-15 flex flex-col md:items-start items-center justify-around">
        <button className='bg-[#0d5c47] text-white rounded text-[16px] font-[600] leading-[16px] py-[10px] px-[20px]'>
          Our Management
        </button>
        <h1 className='text-[26px] md:text-[32px] lg:text-[48px] font-[700] leading-[30px] text-center md:text-start lg:leading-[57.6px] text-black font-monserrat'>
          Delivering Global Solutions with Expertise and Precision
        </h1>
        <p className='text-[16px] text-center md:text-start font-[600] italic text-black'>
          Leadership Excellence at <br className='block lg:hidden'/> Crown Excel
        </p>
      </div>

    </div>
  )
}

export default OurManagementBanner
