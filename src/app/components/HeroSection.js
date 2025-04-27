import Image from 'next/image'
import Cursor from './cursor/Cursor';

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
          <h1 className='text-6xl md:text-8xl font-bold text-white/98 text-center py-4'>
            Empowering Through Technology
          </h1>
        </div>
    </div>
    </>
  )
}
