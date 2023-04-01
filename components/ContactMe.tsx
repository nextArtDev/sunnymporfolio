import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
type Props = {}
type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = ` mailto:nextartisticdevelopments@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} (${formData.email})`
  }
  return (
    <div className="h-screen flex relative flex-col text-center md:text-right md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 tracking-wide text-gray-500 text-2xl">
        تماس با من
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          ما تنها چیزی که شما به آن نیاز دارید هستیم.
          <span className="underline decoration-[#f7ab0a]/50 ">
            اجازه بدهید حرف بزنیم.
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] ml-2 h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123456789</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] ml-2 h-7 w-7 animate-pulse" />
            <p className="text-2xl">react.team@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] ml-2 h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 خیابان جمهوری</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2 ">
            <input
              {...register('name')}
              type="text"
              placeholder="نام"
              className="contactInput"
            />
            <input
              {...register('email')}
              type="email"
              placeholder="ایمیل"
              className="contactInput"
            />
          </div>
          <input
            {...register('subject')}
            type="text"
            placeholder="موضوع"
            className="contactInput"
          />
          <textarea
            {...register('message')}
            placeholder="پیام"
            className="contactInput"
          />
          <button
            type="submit"
            className=" bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg "
          >
            {' '}
            ثبت نظر
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
