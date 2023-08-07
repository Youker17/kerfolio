import Hero from '@/components/Hero'
import '../app/globals.css'
import Navbar from '@/components/Navbar'




export default function Home() {


    return (
        <div className='container mx-auto '>
            {/* <Navbar /> */}
            <div className='h-screen gap-5 p-3 flex flex-col justify-around'>
                <Hero />
                <div className='h-[30%] bg-gray-700/80 rounded-3xl'>
                </div>
            </div>
        </div>
    )
}