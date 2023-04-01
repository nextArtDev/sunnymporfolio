import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col opacity-40 hover:opacity-100
     rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
     md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
     cursor-pointer transition-opacity duration-200 overflow-hidden
     "
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/favicon.ico"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">مدیریت سایت</h4>
        <p className="font-bold text-2xl mt-1">سایتها</p>
        <div className="flex space-x-2 my-2">
          {/** Tech used Pics */}
          <img src="/favicon.ico" alt="" className="h-10 w-10 rounded-full" />
          <img src="/favicon.ico" alt="" className="h-10 w-10 rounded-full" />
          <img src="/favicon.ico" alt="" className="h-10 w-10 rounded-full" />
          {/** Tech used Pics */}
          {/** Tech used Pics */}
        </div>
        <p className="py-5 text-gray-300">شروع در ... - پایان ...</p>

        <ul className="list-disc space-y-4 mr-5 text-lg">
          <li>خلاصه نکات خلاصه نکات خلاصه نکات خلاصه نکات خلاصه نکات</li>
          <li>خلاصه نکات خلاصه نکات خلاصه نکات خلاصه نکات خلاصه نکات</li>
          <li>خلاصه نکات خلاصه نکات خلاصه نکات خلاصه نکات خلاصه نکات</li>
          <li>خلاصه نکات خلاصه نکات خلاصه نکات خلاصه نکات خلاصه نکات</li>
          <li>خلاصه نکات خلاصه نکات خلاصه نکات خلاصه نکات خلاصه نکات</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
