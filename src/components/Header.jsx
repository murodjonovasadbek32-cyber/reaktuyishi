import React from 'react'
import Logo from '../assets/logo.svg'
import Logo1 from '../assets/Illustration (1).svg'
const Header = () => {
  return (
    <div>
        <header className='bg-[#F5F5F5]  '>
            <nav className='max-w-[1080px] mx-auto h-20 bg-white flex items-center justify-between px-8'>
                <img
                  className='w-40 h-auto                   
                   ' src={Logo} alt=""
                    />
                <ul
                 className='flex items-center gap-8 text-[#1A1A1A] font-medium text-lg'>
            
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Home</li>
                </ul>
                <button className='bg-[#4CAF4F] text-white px-6 py-2 rounded-lg'>Register Now →</button>

            </nav>
    <main className='max-w-[1080px] mx-auto flex items-center justify-between px-8 py-20'>
<div>
   <h1 className="text-6xl font-bold leading-[1.1] text-[#1A1A1A]">
              Lessons and insights

              <span className="block text-[#4CAF4F]">
                from 8 years
              </span>
            </h1>
        <p className="text-lg text-[#666] mt-4">
          Where to grow your business as a photographer:
              site or social media?
        </p>
        <button className="bg-[#4CAF4F] text-white px-6 py-2 rounded-lg mt-6">
          Register
        </button>
   
</div>
 <div className="text-gray-400">
      <img src={Logo1} alt="Description" />
    </div>

</main>

        </header>
    </div>

  )
}
export default Header