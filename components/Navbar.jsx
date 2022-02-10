import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import camplogo from '../public/camplogo.png'
import profile from '../public/profile.jpg'
import sender from '../public/gal_gadot.jpg'
import event from '../public/event.jpg'
import Badge from '../public/badge.svg'
import Network from '../public/network.svg'


function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-1">
						<div>
							<a href="#" className="flex items-center py-1 px-2">
                <Image
                  src={camplogo}
                  alt="Picture of the author"
                  height={70}
                />
							</a>
						</div>
						
						<div className="hidden md:flex items-center space-x-1 ">
              <div className="flex flex-row bg-gray-200 h-10 rounded-md content-center border-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="py-1 px-2 w-10 color-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  <input type="search" id="query" name="q" placeholder="Search..." aria-label="Search" className="bg-gray-200" />
              </div>
						</div>
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<div className="hidden md:flex items-center space-x-3 ">
            <a href="" className="flex flex-col py-1 px-2 text-amber-400 border-b-2 border-neutral-900 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <p className="text-neutral-900 font-semibold">My Feed</p>
            </a>
            <a href="" className="flex flex-col py-1 px-2 text-amber-400 border-amber-400 font-semibold hover:border-b-2 hover:border-neutral-900">
              <Badge className="h-7 text-amber-400"/>
              <p className="text-neutral-900 font-semibold">Opportunites</p>
            </a>
            <a href="" className="flex flex-col py-1 px-2 text-amber-400  border-amber-400 font-semibold hover:border-b-2 hover:border-neutral-900">
              <Network className="h-7 text-amber-400 font-bold"/>
              <p className="text-neutral-900 font-semibold">My Network</p>
            </a>
            <a href="" className="flex flex-col py-1 px-2 text-amber-400  border-amber-400 font-semibold hover:border-b-2 hover:border-neutral-900">
              {/* <div className="rounded-full items-center">
              </div> */}
              <Image
                src={profile}
                alt="Profile Picture"
                width = {27}
                height = {27}
                className="rounded-full"
                />
              <p className="text-neutral-900 font-semibold">Profile</p>
            </a>
					</div>

          
				</div>
			</div>
		</nav>
  )
}

export default Navbar