import React from 'react'

import XLogo from '../assets/svg/X_Logo.svg'

import ZeroanimaLogo from '../assets/svg/Zeroanima_Logo.svg'
import BE from '../assets/svg/BE.svg'
import Ello from '../assets/svg/Ello.svg'
import IG from '../assets/svg/IG.svg'
import LI from '../assets/svg/LI.svg'
import Powered from '../assets/svg/Powered.svg'

const underConstruction = () => {
  return (
    <>
      {/* <img src={XLogo} alt="XLogo" className="absolute inset-auto "/> */}
      <div className="m-14 bg-error border border-white min-h-80-full md:min-h-85-full flex flex-row">
        <div className="w-6/12 flex items-center justify-center flex-col">
          <p className="text-3xl text-primary">under construction</p>
          <div className="flex items-center justify-center flex-row pt-6">
            <a href="https://www.linkedin.com/in/jesus-monge-abab66a/">
              <img src={LI} alt="LI" className="pr-8 " />
            </a>
            <a href="https://www.instagram.com/zeroanima/">
              <img src={IG} alt="IG" className="pr-8 " />
            </a>
            <a href="https://www.behance.net/zeroanima">
              <img src={BE} alt="BE" className="pr-8 " />
            </a>
            <a href="https://ello.co/zeroanima">
              <img src={Ello} alt="Ello" className="pr-0" />
            </a>
          </div>
        </div>
        <img src={XLogo} alt="XLogo" className=" " />
        <div className="w-6/12 flex items-center justify-center">
          <img src={ZeroanimaLogo} alt="ZeroanimaLogo" className="" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center ">
        <p className="text-3xl text-secondary -mt-28 tracking-widest">
          SINCE 1985
        </p>
      </div>
      <div className="w-full flex items-center justify-center ">
        <a href="https://www.juanjosebernal.work//">
          <img src={Powered} alt="Powered" className="-mt-52" />
        </a>
      </div>
    </>
  )
}

export default underConstruction
