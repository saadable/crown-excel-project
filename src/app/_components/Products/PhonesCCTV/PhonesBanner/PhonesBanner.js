import React from 'react'
import LaptopImage1 from '../../../../../Components/Images/phonesbanner1.png'
import LaptopImage2 from '../../../../../Components/Images/phonesbanner2.png'
import Image from 'next/image'
import Stars from '../../../../../Components/Images/stars.png'
const PhonesBanner = () => {
  return (
    <div >
      <div
        className="hidden lg:flex items-center justify-between w-full h-[180px] lg:h-[500px] md:h-[350px] px-3 md:px-1 relative"
        style={{
          background: 'linear-gradient(87deg, #2D2D2D 35%, #147D61 100%)',
        }}
      >
        {/* Left Laptop Image */}
        <div className="laptop-banner-left flex-1 flex justify-start items-end">
          <Image src={LaptopImage1} width={346} height={420} alt="Laptop 1" className="object-contain drop-shadow-2xl md:-mb-8" />
        </div>
        {/* Center Content */}
        <div className="laptop-banner-center z-10 absolute left-50 right-50 flex-1 flex flex-col items-center justify-center text-center px-2 md:px-8">
          <div className="flex justify-center gap-2 mb-2">
            <Image src={Stars} width={94} height={100} alt="Stars" className="left-20 -top-2  absolute" />
            <Image src={Stars} width={51} height={50} alt="Stars" className="right-45 top-2 absolute" />
          </div>
          <div className="text flex flex-col items-center mb-4">
            <h1 className="text-white font-montserrat w-[600px] font-extrabold text-2xl md:text-5xl leading-tight tracking-tight mb-0  " style={{ fontFamily: '' }}>DISCOVER TOP</h1>
            <h1 className='text-[60px] font-montserrat font-[900] text-[#147d61]'>PHONE AND CCTV BRANDS</h1>
            <h1 className="text-white font-montserrat w-[600px] font-extrabold text-2xl md:text-5xl leading-tight tracking-tight ">FOR EVERY NEED
            </h1>
          </div>
          <p className="text-gray-200 text-sm md:text-lg font-medium max-w-xl mx-auto mb-2 md:mb-4 w-[510px]">
            Crown Excel offers a comprehensive selection of cutting-edge phones and CCTV systems from leading brands like Samsung, Hikvision, Apple, and Dahua. Our collection features the latest in communication technology and surveillance solutions tailored to suit your personal, professional, or business requirements.
          </p>
        </div>
        {/* Right Laptop Image */}
        <div className="laptop-banner-right flex-1 flex justify-end items-end">
          <Image src={LaptopImage2} width={264} height={450} alt="Laptop 2" className="object-contain drop-shadow-2xl -mb-4 md:-mb-8" />
        </div>
      </div>
      <div className="small-screen flex flex-col items-center justify-center lg:hidden h-[600px] w-full" style={{
        background: 'linear-gradient(87deg, #2D2D2D 35%, #147D61 100%)',
      }}>
        <div className="top mt-20">
          <div className="laptop-banner-center ">
            {/* <div className="flex justify-center gap-2 mb-2">
              <Image src={Stars} width={50} height={50} alt="Stars" className="left-3 top-75  absolute" />
              <Image src={Stars} width={51} height={50} alt="Stars" className="right-10 top-50 absolute" />
            </div> */}
            <div className="text text-center relative flex flex-col items-center mb-4 leading-tight">
              <Image src={Stars} width={50} height={50} alt="Stars" className="left-0 bottom-0  absolute" />
              <h1 className="text-white font-montserrat  font-extrabold text-[30px] leading-tight tracking-tight mb-0  " style={{ fontFamily: '' }}>DISCOVER TOP</h1>
              <h1 className='text-[30px] font-montserrat font-[900] text-[#147d61]'>PHONE AND CCTV BRANDS</h1>
              <h1 className="text-white font-montserrat  font-extrabold text-[30px] leading-tight tracking-tight ">FOR EVERY NEED
              </h1>
              <Image src={Stars} width={51} height={50} alt="Stars" className="right-10 -top-5 absolute" />
            </div>
            <p className="text-gray-200 text-[14px] text-center font-light">
              Crown Excel offers a comprehensive selection of cutting-edge phones <br className='md:block hidden'/> and CCTV systems from leading brands like Samsung, Hikvision, Apple, and Dahua. <br className='md:block hidden'/> Our collection features the latest in communication technology and surveillance solutions <br className='md:block hidden'/> tailored to suit your personal, professional, or business requirements.
            </p>
          </div>
        </div>
        <div className="bottom flex mt-10 justify-center gap-10 w-full px-10">
          <Image alt='' src={LaptopImage1} width={150} height={100}/>
          <Image alt='' src={LaptopImage2} width={150} height={100}/>
        </div>
      </div>
    </div>
  )
}

export default PhonesBanner
