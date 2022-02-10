import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import camplogo from '../public/camplogo.png'
import profile from '../public/profile.jpg'
import sender from '../public/gal_gadot.jpg'
import event from '../public/event.jpg'
import Badge from '../public/badge.svg'
import Network from '../public/network.svg'

function News() {
  return (
    <div className="flex flex-col pb-3 px-3 rounded-md bg-[#ffffff]">
            <p className="font-bold py-2">Peers in news</p>
            <div className="flex flex-col py-1 ">
              <div>
                <p className="font-semibold text-gray-600">
                  Bhubaneshwar boy wins national debating league
                </p>
              </div>
              <div className="flex flex-row">
                <p className="pr-4 text-gray-400 text-sm">4d ago</p>
                <p className="pr-4 text-gray-400 text-sm">26,466 readers</p>
              </div>
            </div>
            <div className="flex flex-col py-1">
              <div>
                <p className="font-semibold text-gray-600">
                  Lorem Ipusum chosen as national convenor for debating club
                </p>
              </div>
              <div className="flex flex-row">
                <p className="pr-4 text-gray-400 text-sm">4d ago</p>
                <p className="pr-4 text-gray-400 text-sm">26,466 readers</p>
              </div>
            </div>
            <div className="flex flex-col py-1">
              <div>
                <p className="font-semibold text-gray-600">
                  Lorem Ipusum chosen as national convenor for debating club
                </p>
              </div>
              <div className="flex flex-row">
                <p className="pr-4 text-gray-400 text-sm">4d ago</p>
                <p className="pr-4 text-gray-400 text-sm">26,466 readers</p>
              </div>
            </div>
            <div className="flex flex-col py-1">
              <div>
                <p className="font-semibold text-gray-600">
                Lorem Ipusum chosen as national convenor for debating club
                </p>
              </div>
              <div className="flex flex-row">
                <p className="pr-4 text-gray-400 text-sm">4d ago</p>
                <p className="pr-4 text-gray-400 text-sm">26,466 readers</p>
              </div>
            </div>
            <button className="rounded-full border-2 border-blue-700 text-blue-700 my-3 py-1 px-3">Click for more news</button>
          </div>
  )
}

export default News