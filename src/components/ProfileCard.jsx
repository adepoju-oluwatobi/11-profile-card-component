import React from 'react'
import TopBg from '../assets/bg-pattern-top.svg'
import BottomBg from '../assets/bg-pattern-top.svg'
import CardBg from '../assets/bg-pattern-card.svg'
import ProfilePics from '../assets/image-victor.jpg'

function ProfileCard() {
  return (
    <div>
          <img className='absolute top-[-10%] md:top-[-500px] left-[-50%] rotate-6' src={TopBg} alt="" />
        <div className='w-[300px] md:w-[380px] h-[380px] bg-white rounded-2xl relative z-[999] shadow-lg'>
            <img className='rounded-t-2xl h-[160px]' src={CardBg} alt="card background" />
            <img className='rounded-full m-auto mt-[-50px]' src={ProfilePics} alt="profile picture" />
            <p className='font-bold text-lg text-center pt-6'>Victor Crest <span className='font-thin opacity-50'>26</span></p>
            <p className='opacity-50 text-center pb-6'>London</p>
            <hr />
           <div className='flex justify-evenly items-start mt-3'>
             <div>
                <p className='font-bold text-xl text-center'>80K</p>
                <p className='text-xs opacity-50 text-center'>Followers</p>
            </div>
            <div>
                <p className='font-bold text-xl text-center'>803K</p>
                <p className='text-xs opacity-50 text-center'>Likes</p>
            </div>
            <div>
                <p className='font-bold text-xl text-center'>1.4K</p>
                <p className='text-xs opacity-50 text-center'>Photos</p>
            </div>
            
           </div>
        </div>

        <img className='absolute bottom-[-10%] right-[-50%] rotate-180' src={BottomBg} alt="" />
    </div>
  )
}

export default ProfileCard