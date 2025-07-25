import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
import {Link} from 'react-router-dom'

const carouseImage = [hero1, hero2, hero3, hero4]
const Hero = () =>{
    return(
        <div className='grid lg:grid-cols-2 gap-24 items-center'>
            <div>
                    <h1 className='max-w-2xl text-4xl tracking-tight font-bold sm:text-7xl'>
                        we are changing the way people shop
                    </h1>
                    <div className='mt-10'>
                        <Link to='/' className='btn btn-primary'>
                          Our Products
                        </Link>
                    </div>
            </div>
            <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral
            rounded-box'>
                {carouseImage.map((img)=>{
                   return(
                    <div key={img} className='carousel-item'>
                        <img src={img} className='rounded-box h-full w-80 object-cover'/>
                    </div>
                   ) 
                }
                )}
            </div>
        </div>
    )
}
export default Hero;