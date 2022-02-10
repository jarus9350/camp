import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import camplogo from '../public/camplogo.png'
import profile from '../public/profile.jpg'
import sender from '../public/gal_gadot.jpg'
import event from '../public/event.jpg'
import Badge from '../public/badge.svg'
import Network from '../public/network.svg'

function ProfileCard() {
  return (
      <>
        <div className="flex flex-col pt-7 pb-3 px-7 rounded-t-md bg-[#ffffff] items-center">
            <Image
                src={profile}
                alt="Profile Picture"
                width = {100}
                height = {100}
                className="rounded-full"
              />
              <p className="font-bold pt-4 ">
                Suraj Pratap Singh
              </p>
              <p className=" text-center ">
                School President || Aspiring Lawyer || 11th Grader || FIFA god
              </p>
          </div>
          <div className="flex flex-col my-1 px-4 py-3 rounded-b-md bg-[#ffffff] ">
              <div className="flex flex-row justify-between py-3 font-semibold">
                <p>
                  Number of followers
                </p>
                <p className="text-blue-700">
                  3.4k
                </p>
              </div>
              <div className="flex flex-row justify-between py-3 font-semibold">
                <p>
                  Profile views this month
                </p>
                <p className="text-blue-700">
                  13.4k
                </p>
              </div>
              <div className="flex flex-row justify-between py-3 font-semibold">
                <p>
                  Posts views this month
                </p>
                <p className="text-blue-700">
                  113.4k
                </p>
              </div>
              
          </div>
        </>
  )
}

export default ProfileCard