import React from "react";

import XLogo from '../assets/svg/X_Logo.svg'

import ZeroanimaLogo from '../assets/images/Zeroanima_Logo.png'
import BE from '../assets/images/BE.png'
import Ello from '../assets/images/Ello.png'
import IG from '../assets/images/IG.png'
import LI from '../assets/images/LI.png'
import Powered from '../assets/images/Powered.png'


const underConstruction = () => {
  return (
    <>
    {/* <img src={XLogo} alt="XLogo" className="absolute inset-auto "/> */}
    <div className="m-14 bg-error border border-white min-h-screen flex flex-row">
      <div className="w-6/12 flex items-center justify-center flex-col">
        <p className="text-3xl text-primary">under construction</p>
        <div className="flex items-center justify-center flex-row pt-6">
          <a href="https://www.behance.net/zeroanima">
            <img src={BE} alt="BE" className="pr-8 "/>
          </a>
          <a href="https://ello.co/zeroanima">
            <img src={Ello} alt="Ello" className="pr-8 "/>
          </a>
          <a href="https://www.instagram.com/zeroanima/">
            <img src={IG} alt="IG" className="pr-8 "/>
          </a>
          <a href="https://www.linkedin.com/in/jesus-monge-abab66a/">
            <img src={LI} alt="LI" className=" "/>
          </a>
        </div>
      </div>
      <img src={XLogo} alt="XLogo" className=" "/>
      <div className="w-6/12 flex items-center justify-center">
        <img src={ZeroanimaLogo} alt="ZeroanimaLogo" className=""/>
      </div>

    </div>
    <div className="w-full flex items-center justify-center ">
        <p className="text-3xl text-secondary -mt-28 tracking-widest">SINCE 1985</p>

    </div>
    <div className="w-full flex items-center justify-center ">
        <img src={Powered} alt="Powered" className="-mt-52"/>
    </div>
    </>
  );
};

export default underConstruction;
