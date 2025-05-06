import Image from 'next/image'
import Cursor from '../components/cursor/Cursor';
import 'animate.css';

export default function HeroSection() {
  return (
    
      <>
      <Cursor/>
      <div className="w-screen h-screen relative">
          <Image
              src="/images/bg-live.gif"
              alt="hero"
              fill
              className="object-cover object-center"
          />
        
          <div 
              style={{ textShadow: '4px 1px 0px #8f8f8f' }}
              className='absolute inset-0 flex flex-col items-center justify-center w-screen h-screen bg-black/50'
          >
            <h1 className='flex flex-col items-center font-bold text-white/98 text-center py-4'>
              <span className='text-6xl sm:text-9xl sm:leading-40 leading-20 animate__animated animate__backInDown animate__slow'>Empowering</span>
              <div className='inline-flex'>
                <span className='sm:text-7xl text-4xl animate__animated animate__fadeInUp animate__delay-2s'>Through Technology</span>
              </div>
            </h1>
          </div>
      </div>
      </>
   
  )
}
