import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import camplogo from '../public/camplogo.png'
import profile from '../public/profile.jpg'
import sender from '../public/gal_gadot.jpg'
import event from '../public/event.jpg'
import Badge from '../public/badge.svg'
import Network from '../public/network.svg'

function ConversationCard() {
  return (
    <div className="grid grid-cols-6 gap-1 pt-7 pb-3 px-7 rounded-md bg-[#ffffff]">
            <div className="row-span-1 ">
              <div className="justify-self-center">
                <Image
                src={profile}
                alt="Profile Picture"
                width = {48}
                height = {48}
                className="rounded-full justify-self-center px-full"
                />
              </div>
            </div>
            <div className="col-span-5 text-grey-900 ...">
              <input type="search" id="query" name="q" placeholder="Start a conversation!" className="py-2 px-5 rounded-full border-2 border-grey-400 w-full text-grey-900" />
            </div>
            {/* empty */}
            <div className="row-span-1 ">
            </div>
            <div className="flex flex-row justify-around col-span-5 ...">
              <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="#e7b93e">
                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                </svg>
                <p>Photos</p>
              </div>
              <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="#e7b93e">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
                  <p>Videos</p>
              </div>
              <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="#e7b93e">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <p>Events</p>
              </div>
            </div>          
          </div>
  )
}

export default ConversationCard