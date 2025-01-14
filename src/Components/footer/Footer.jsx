import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className='flex justify-between p-5 mx-9'>
        <div>
            <h5 className='text-gray-400'>Copyright © 2025 @mahjabinkarim0000</h5>
        </div>
        <div className='flex gap-4 text-gray-500'>
        <FaFacebookF />
        <FaTwitter />
        <FaPinterestP />
        <FaLinkedinIn />
        <AiFillInstagram />
        </div>
      </div>
    </>
  )
}

export default Footer
