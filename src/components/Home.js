import React from 'react'
import Banner from './home/Banner'
import ZeroanimaLogo from '../assets/svg/Zeroanima_Logo_red.svg'
import ZeroanimaLogoSecondary from '../assets/images/Zeroanima_Logo_white_small.png'
import Designed from '../assets/svg/Designed.svg'
import Navbar from './home/Navbar'
import Content from './home/Content'

const Home = () => {
  return (
    <div className="min-h-screen min-w-min bg-white bg-hero-pattern flex flex-row">
      <div className="w-8/12 lg:10/12 flex flex-col">
        <Navbar />
        <Banner />
        <Content />
      </div>
      <div className="w-4/12 lg:2/12 border-l-2 border-b-2 border-primary flex flex-col">
        <div className="h-80 flex justify-center static">
          <img src={ZeroanimaLogo} alt="ZeroanimaLogo" className="" />
        </div>

        <div className="h-8 border-b-2 border-primary left-0">
          <p className="text-2xl pl-1 tracking-wider font-normal">SINCE</p>
        </div>
        <div>
          <p className="text-2xl pl-1 tracking-wider font-normal">1985</p>
        </div>
        <div className="flex justify-center pt-16">
          <img src={ZeroanimaLogoSecondary} alt="ZeroanimaLogoSecondary" />
        </div>
        <div className="flex justify-center pt-16">
          <img src={Designed} alt="Designed" />
        </div>
      </div>
    </div>
  )
}

export default Home
