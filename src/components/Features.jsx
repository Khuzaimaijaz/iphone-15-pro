import { useEffect, useRef } from 'react';
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';

const Features = () => {
  const videoRef = useRef();
  
  useEffect(() => {
    animateWithGsap('#features_title', {
      y: 0, 
      opacity: 1
    });
    animateWithGsap('.g_grow', {
      scale: 1, 
      opacity: 1, 
      ease: 'power1'
    }, {
      scrub: 5.5
    });
    animateWithGsap('.g_text', {
      y: 0, 
      opacity: 1, 
      ease: 'power2.inOut', 
      duration: 1
    });
  }, []);
  
  return (
    <section className='h-full common-padding bg-zinc overflow-hidden relative'>
      <div className="screen-max-width">
        <div className="mb-2 w-full">
          <h1 id='features_title' className="section-heading">
            Explore the Full Story
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
            <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in Titanium.</h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] flex items-center">
              <video playsInline muted autoPlay ref={videoRef} id='exploreVideo' className='w-full h-full object-cover object-center' preload='none'>
                <source src={exploreVideo} type='video/mp4' />
              </video>
            </div>
            <div className="flex flex-col relative w-full">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="titanium" className='feature-video g_grow' />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="titanium" className='feature-video g_grow' />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">iPhone 15 Pro is {''}
                    <span className="text-white">the first iPhone to feature an aerospace-grade titanium design </span>
                    using the same alloy that spacecraft use for missions to Mars.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">Titanium has the best strength-to-weight ratios of any metal,making these our {''}
                    <span className="text-white">Lightest pro model ever</span>
                    you'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;