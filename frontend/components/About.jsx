import { useEffect } from "react";
import { useSettings } from "@/context/context";
import {PortableText} from '@portabletext/react'

export default function About() {
  const {settings, showAbout, setShowAbout} = useSettings()

  useEffect(() => {
    const handleScroll = () => {
      setShowAbout(false)
    }

    if(showAbout){
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [showAbout]);

  return (
    <footer id="about" className={`p-6 bg-black text-white fixed ${showAbout && 'sticky-about'}`}>
      <div className="max-w-4xl">
      <h2 className="text-6xl mb-6">About</h2>
      <p className="mb-6">{settings.about}</p>

      <div className="md:flex md:justify-between">
        <div className="mb-6">
          <h4 className="border-b pb-2 mb-2 max-w-[10rem]">Technology</h4>
          <PortableText value={settings.technology}/>
        </div>
        <div className="col mb-6">
          <h4 className="border-b pb-2 mb-2 max-w-[10rem]">Clients</h4>
          <PortableText value={settings.clients}/>
        </div>
        <div className="col mb-6">
          <h4 className="border-b pb-2 mb-2 max-w-[10rem]">Contact</h4>
          Based in New York
          <ul>
            <li><a href={`mailto:${settings.email}`} target="_blank">{settings.email}</a></li>
            <li><a href={settings.linkedin_url} target="_blank" className="underline">LinkedIn</a></li>
            <li><a href={settings.github_url} target="_blank" className="underline">Github</a></li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  )
}