import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import camplogo from '../public/camplogo.png'
import profile from '../public/profile.jpg'
import sender from '../public/gal_gadot.jpg'
import event from '../public/event.jpg'
import Badge from '../public/badge.svg'
import Network from '../public/network.svg'

function PostCard() {
  return (
    <div className="flex flex-col pt-7 mt-5 pb-3 px-7 rounded-md bg-[#ffffff]">
            <div className="flex flex-row">
              <Image
                src={sender}
                alt="Profile Picture"
                width = {70}
                height = {70}
                className="rounded-full justify-self-center px-full"
              />
              <div className="px-4">
                <p className="font-bold">Lorem ipsum</p>
                <p>Management Cunsultant || Mentor || IIT Delhi</p>
                <p>3d ago</p>
              </div>
            </div>         
            <div className="pt-7">
              <p>hi everyone,
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacinia enim. Donec quis nisl urna. Proin eu imperdiet nulla. Vivamus semper est enim, vel porttitor nisl blandit feugiat. Nulla aliquet ut dui sit amet sagittis. Aenean lacinia vestibulum tincidunt. Ut at leo arcu. Sed suscipit ante eget tellus tempor tincidunt
              </p>
            </div>    
            <div className="flex flex-row justify-between pt-4 pb-1 border-b-2">
                <div className="flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-3" viewBox="0 0 20 20" fill="#6b1343">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>  
                  <p>You and 1345 others like this</p>
                </div>
                <div className="flex flex-row">
                  <p className="px-3">100 comments</p>
                  <p className="px-3">65 shares</p>
                </div>
            </div>    
            <div className="flex flex-row justify-around py-4">
                <div className="flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-2" viewBox="0 0 20 20" fill="#6b1343">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>      
                  <p>Like</p>
                </div>
                <div className="flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-2" viewBox="0 0 20 20" fill="#6b1343">
                    <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                  </svg>
                  <p>Comment</p>
                </div>
                <div className="flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-2" viewBox="0 0 20 20" fill="#6b1343">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  <p>Share</p>
                </div>
                <div className="flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-2" viewBox="0 0 20 20" fill="#6b1343">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                  </svg>
                  <p>Send</p>
                </div>
            </div>    
            <div className="flex flex-row py-2 ">
              <Image
                src={profile}
                alt="Profile Picture"
                width = {48}
                height = {48}
                className="rounded-full px-full"
                />
              
              <div className="flex flex-row rounded-full border-2 w-full px-5 mx-3 items-center py-0">
                <input type="search" id="query" name="" placeholder="Add a comment..." className="py-2 px-5 border-grey-400 w-full text-grey-900" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                </svg>
              </div>

            </div>      
          </div>
  )
}

export default PostCard