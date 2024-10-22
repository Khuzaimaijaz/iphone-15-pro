import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlight = () => {
  useGSAP(()=>{
    gsap.to('#title',{opacity:1,y:0})
    gsap.to('.link',{
      opacity:1, y:0,duration:1,stagger:0.5
    })
    
  },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className="screen-max-width">
       <div className='mb-12 w-full md:flex  items-end justify-between'> <h1 id="title" className='section-heading'>Get The Highlights</h1>
       <div className="flex flex-wrap items-end gap-5"><p className='link  capitalize'>watch the film</p>
       <img className='ml-2' src={watchImg} alt="watch" />
       </div>
       <div className="flex flex-wrap items-end gap-5"><p className='link  capitalize'>watch the event</p>
       <img className='ml-2' src={rightImg} alt="watch" />
       </div>
       </div>
       <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlight
