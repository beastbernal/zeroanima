import React from 'react'
import DownloadCV from './DownloadCV'
import SocialMedia from './SocialMedia'

const Content = () => {
  return (
    <div className="flex flex-col pl-10 pt-32">
      <h1 className="text-error text-7xl">hello!</h1>
      <p className="font-merri pt-10">
        My name is Jesús, but everyone calls me{' '}
        <span className="text-error"> Chuz.</span>{' '}
      </p>
      <p className="font-merri pt-3">
        I do branding, illustration, UI/UX, chiroteo, and even cocktails from
        time to time.
      </p>
      <p className="font-merri pt-8">
        If you don’t wanna look at the site and just wanna download my resume,
        just download it here below.
      </p>
      <DownloadCV />
      <p className="font-merri pt-8">
        In any case, here are some of my social networks in case you wanna
        connect there as well.
      </p>
      <SocialMedia />
    </div>
  )
}

export default Content
