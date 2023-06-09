import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['سلام سعید هستم', 'وب دیزاینر و دولوپر '],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w32 mx-auto object-cover"
        src="/favicon.ico"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm text-gray-500 pb-2 tracking-wide">
          برنامه‌نویس سایت
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">درباره من</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">تجربه</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">مهارت‌ها</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">پروژه‌ها</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
