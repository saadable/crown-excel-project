import React from 'react';
import Image from 'next/image';
import empoweringImage from '../../../../../Components/Images/networkempower.png';
import downArrow from '../../../../../Components/Images/downarrow.png';
import NetworkIT from '../../../../../Components/Images/hardwarerepairempowering.png';

const HardwareRepairEmpowering = () => {
  return (
    <section className="relative overflow-hidden  px-0 md:px-0 lg:px-0 py-10">
      <div className="flex flex-col md:flex-row lg:flex-row md:items-start lg:items-center lg:justify-between md:gap-5 lg:gap-10">
        
        {/* Left Image */}
        <div className="lg:flex-shrink-0 w-full lg:w-1/2">
          <Image
            src={empoweringImage}
            width={632}
            height={425}
            alt="Empowering Business"
            className="w-full max-w-[632px] md:w-[447px] lg:w-[632px] h-auto mx-auto md:mx-0 lg:mx-0"
          />
        </div>

        {/* Right Content */}
        <div className="relative w-full items-start px-5 md:px-2 lg:px-0 lg:w-1/2 z-10 flex flex-col gap-6 mt-5 md:mt-5 lg:mt-[-40px]">
          {/* Highlighted Banner */}
          <p className="bg-[#ffd600] text-black text-center font-montserrat  text-lg md:text-xl lg:text-[18px] leading-[18px] px-[20px] py-[15px] rounded-md shadow-md">
            Empowering Your Business with Tailored IT Solutions
          </p>

          {/* Title */}
          <h2 className="text-black text-[32px] md:text-[42px] lg:text-[52px] font-[700] leading-tight font-montserrat">
            Fast and Reliable Hardware Repairs for Your Business
          </h2>

          {/* Description */}
          <p className="text-black text-base md:text-[16px] leading-[27.2px] font-montserrat z-30">
            Don’t let hardware issues slow you down. Crown Excel specializes in repairing IT equipment quickly and efficiently, ensuring minimal downtime for your business. Our skilled technicians provide fast, dependable solutions to restore your devices to full functionality.
          </p>

          {/* Yellow Glowing Circle */}
          <div className="hidden md:block absolute w-[200px] h-[200px] bg-yellow-400 rounded-full blur-3xl opacity-70 right-[-60px] bottom-[-80px] z-10" />

          {/* Down Arrow */}
          <Image
            src={downArrow}
            alt="Scroll Down"
            width={61}
            height={187}
            className="hidden  lg:block absolute right-5 top-100 z-20"
          />
        </div>
      </div>
      <div className="mt-5 lg:mt-20 px-4 flex flex-col md:flex-row lg:flex-row items-center justify-between gap-5">
              {/* Right Side */}
              <div className="empowering-right gap-5 md:gap-5 lg:gap-5 relative basis-[50%] flex flex-col items-start mt-5 md:mt-10 lg:-mt-10 z-10 px-2 lg:px-0">
                <p className="bg-[#ffd600]  text-center w-full text-black text-[17px] md:text-[20px] lg:text-[18px] leading-[18px] px-[20px] py-[15px] font-[500] font-montserrat  lg:leading-[26.88px] md:px-10 lg:px-10 rounded ">
                  Empowering Your Business with Tailored IT Solutions
                </p>
                <h1 className="text-[32px] md:text-[43px] lg:text-[52px] text-black font-[600] leading-[40px] lg:leading-[52px] font-montserrate">
                 Expert Repairs for All Your IT Hardware
                </h1>
                <p className="text-[16px] text-black leading-[27.2px] font-montserrat">
                  From desktops and laptops to servers and networking devices, we provide expert repair services for a wide range of hardware. Our commitment to quality and precision ensures your devices are restored to peak performance, extending their lifecycle and saving costs.
                </p>
      
                
      
                
              </div>
              {/* Left Side */}
              <div className="empowering-left basis-[50%]">
                <Image
                  src={NetworkIT}
                  width={527}
                  height={355}
                  alt=""
                  className="hidden md:block lg:block lg:w-[527px] lg:h-[355px]"
                />
              </div>
      
              
            </div>
    </section>
  );
};

export default HardwareRepairEmpowering;
