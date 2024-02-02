import React from 'react'
import ProfileImage from './components/ProfileImage.jsx'
import image from './assets/Image.jpeg'
import IconInsta from '../public/instagram.svg'
import IconLinkedIn from '../public/LinkedIn.svg'
import SocialTab from './components/SocialTab.jsx'
import IconTwitter from '../public/twitter.svg'
import IconGitHub from '../public/github-desktop.svg'
import HTBIcon from '../public/hack-the-box.svg'
import classes from './App.module.css'

function App() {
    const socialLinks = [
        { name: "Instagram", icon: IconInsta },
        { name: "LinkedIn", icon: IconLinkedIn },
        { name: "Twitter", icon: IconTwitter },
        { name: "GitHub", icon: IconGitHub },
        { name: "HackTheBox", icon: HTBIcon }


    ]
    return (
        <div className={classes['Content-Container']}>
            <ProfileImage image={image} fullName={"Hudson Wesel"} />
            <div className={classes['Social-Container']}>
                {socialLinks.map((tabName) => <SocialTab name={tabName.name} icon={tabName.icon} />)}</div>
        </div>
    )
}


export default App
