import React from 'react'
import Icon from '../../assets/images/Download.png';

const DownloadCV = () => {
    return (
        <button className="mt-12 h-12 w-80 font-merri text-sm bg-gradient-to-b from-secondary to-electric-green border border-primary flex items-center justify-around">
            <img src={Icon} alt="Download Icon"/>
            Here’s my resume, go on, download it!
        </button>
    )
}

export default DownloadCV
