import ReviewInput from '@/components/ReviewInput/ReviewInput'
import Image from 'next/image'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaRegClock } from 'react-icons/fa'
import { styles } from '../styles'
import { Button } from '@/components/ui/moving-border'
import Link from 'next/link'

export default function page() {
	return (
		<section className="flex justify-center w-full pt-20 bg-background">
      <div className="w-full ">
        <div
          className={`${styles.yPadding}  ${styles.xMargin} lg:px-40 md:px-30 px-10 md:border-x-2 bg-background border-watermark   h-full  relative`}>
          <div className="flex flex-col items-center justify-center w-full gap-10 ">
            <div className="flex flex-col items-center justify-center w-full gap-2 ">
              <text className=" font-federo  text-secondary text-[28px] md:text-[44px] lg:text-[55px] xl:text-[70px] text-center font-normal">
                Thanks For Your Feedback.
              </text>
							<Link href="/">
							<Button className="bg-primary">
								Go Home
							</Button>
							</Link>
              {/* <p className="px-5  lg:text-2xl md:text-xl text-lg text-center text-subheading">
                {`Thank you for sharing your experience! Your review is essential for making our service exceptional. At Erex Studio, we're committed to excellence, and your feedback reaffirms our dedication. We look forward to serving you again soon. Thank you for choosing us`}
              </p> */}
            </div>
            {/* <div className="flex flex-col w-full gap-10 py-5 ">
              <div className="flex items-center gap-4 ">
                <Image
                  src={Depth}
                  alt="DepthImage"
                  width={0}
                  height={0}
                  className="w-20"
                />
                <div>
                  <p className="text-secondary font-medium  text-[16px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                    Project Name:{projectName}
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full gap-4 ">
                <div className="flex items-start justify-start ">
                  <div className="bg-[#F0F2F5]  px-4 py-4 rounded-[10px] ">
                    <CgProfile size={50} color="#000000" />
                  </div>
                </div>
                <div>
                  <p className="text-secondary font-medium  text-[16px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                    Client Name:{clientName}
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full gap-4 ">
                <div className="flex items-start justify-start ">
                  <div className="bg-[#F0F2F5] px-4 py-4 rounded-[10px] ">
                    <FaRegClock size={50} color="#000000" />
                  </div>
                </div>
                <div>
                  <p className="text-secondary  font-medium text-[16px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                    Project Completion Time:{compilationTime}
                  </p>
                </div>
              </div>
            </div> */}
            {/* <ReviewInput clientName={clientName} /> */}
          </div>
        </div>
      </div>
    </section>
	)
}
