import Image from 'next/image'
import Cursor from './cursor/Cursor';

export default function HeroSection() {
  return (
    <>
    <Cursor/>
    <div className=" w-screen h-screen relative ">
        <Image
            src="/images/bg-live.gif"
            alt="hero"
            fill
            className="object-cover object-center"
        />
      
        

        <div className='absolute inset-0  w-screen h-screen'>

        </div>
    </div>

  
    
    </>
  )
}
