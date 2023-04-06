import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp} from "react-icons/ai"
const SocialMedia = () => {
  return (
    <div className='flex items-center gap-x-4 mt-auto flex-shrink-0'>
        <Link className='h-12 w-12 flex bg-white items-center justify-center   text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full'>
            <AiOutlineInstagram size={26}/>
        </Link>
        <Link className='h-12 w-12 flex bg-white items-center justify-center   text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full'>
            <AiOutlineTwitter size={26}/>
        </Link>
        <Link className='h-12 w-12 flex bg-white items-center justify-center   text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full'>
            <AiOutlineWhatsApp size={26}/>
        </Link>

    </div>
  )
}

export default SocialMedia