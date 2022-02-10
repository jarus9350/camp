import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import camplogo from '../public/camplogo.png'
import profile from '../public/profile.jpg'
import sender from '../public/gal_gadot.jpg'
import event from '../public/event.jpg'
import Badge from '../public/badge.svg'
import Network from '../public/network.svg'

function Groups() {
  return (
    <div className="flex flex-col mt-4 pb-3 px-3 rounded-md bg-[#ffffff]">
    <p className="font-bold py-2">Your groups and Clubs</p>
    <div className="flex flex-col my-2">
      <div className="flex flex-row">
        <Image
          src={event}
          alt="club image"
          width = {50}
          height = {50}
        />
        <p className="pl-3 font-semibold">Maharashtra debating Club</p>
      </div>
    </div>
    <div className="flex flex-col my-2">
      <div className="flex flex-row">
        <Image
          src={event}
          alt="club image"
          width = {50}
          height = {50}
        />
        <p className="pl-3 font-semibold">The journalist</p>
      </div>
    </div>
    <div className="flex flex-col my-2">
      <div className="flex flex-row">
        <Image
          src={event}
          alt="club image"
          width = {50}
          height = {50}
        />
        <p className="pl-3 font-semibold">The cricket club of india</p>
      </div>
    </div>
    <div className="flex flex-col my-2">
      <div className="flex flex-row">
        <Image
          src={event}
          alt="club image"
          width = {50}
          height = {50}
        />
        <p className="pl-3 font-semibold">St. Michels High School , Patna</p>
      </div>
    </div>
    <button className="rounded-full border-2 border-blue-700 text-blue-700 my-3 py-1 px-3">Discover more groups & clubs</button>
  </div>
  )
}

export default Groups