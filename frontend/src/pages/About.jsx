import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2x1 text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.cover_3} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>You can add text xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx x xxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p> Add another text xxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>you can add mission</p>
        </div>
      </div>
      <div className='text-4x1 py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm bm-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Add onother text fdfd fdfdfsdfnsbeuf ehfehfsuhfcsf ehfbeshfbsndcfyef etdvdyfwfyadeyr78wre eyrgewgredbsbcsbcgasdg</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Add onother text fdfd fdfdfsdfnsbeuf ehfehfsuhfcsf ehfbeshfbsndcfyef etdvdyfwfyadeyr78wre eyrgewgredbsbcsbcgasdg</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600' >Add onother text fdfd fdfdfsdfnsbeuf ehfehfsuhfcsf ehfbeshfbsndcfyef etdvdyfwfyadeyr78wre eyrgewgredbsbcsbcgasdg</p>
        </div>
      </div>
    </div>
  )
}

export default About
