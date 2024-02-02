import React from 'react'
import ProfileImage from './components/ProfileImage.jsx'
import image from './assets/Image.jpeg'
import IconInsta from '../public/instagram.svg'
import IconLinkedIn from '../public/LinkedIn.svg'
import SocialTab from './components/SocialTab.jsx'
import IconTwitter from '../public/twitter.svg'
import IconGitHub from '../public/github-desktop.svg'
import HTBIcon from '../public/hack-the-box.svg'
import DiscordIcon from '../public/discord.svg'
import classes from './App.module.css'

function App() {
    const socialLinks = [
        { name: "Instagram", icon: IconInsta, link:"https://www.instagram.com/hudson_wesel/"  },
        { name: "LinkedIn", icon: IconLinkedIn, link:"https://www.linkedin.com/in/hudsonpiercewesel/"},
        { name: "Twitter", icon: IconTwitter, link:"https://twitter.com/HudsonWesel" },
        { name: "GitHub", icon: IconGitHub, link:"https://github.com/HudsonPWesel"},
        { name: "HackTheBox", icon: HTBIcon , link:"https://app.hackthebox.com/profile/overview"},


    ]
    return (
        <div className={classes['Content-Container']}>
            <ProfileImage image={image} fullName={"Hudson Wesel"} />
            <div className={classes['Social-Container']}>
                {socialLinks.map((tabName) => <SocialTab name={tabName.name} icon={tabName.icon} link={tabName.link} />)}</div>
        </div>
    )
}


export default App
