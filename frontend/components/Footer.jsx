import { useEffect } from "react";
import { useSettings } from "@/context/context";
import {PortableText} from '@portabletext/react'

export default function Footer() {
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
    <footer id="about" className={`p-6 bg-black text-white ${showAbout && 'sticky-footer'}`}>
      <div className="max-w-6xl">
      <h2 className="text-4xl mb-6">About</h2>
      <p className="mb-6">{settings.about}</p>

      <div className="md:flex md:justify-between">
        <div className="mb-6">
          <h4 className="uppercase mb-2">Technology</h4>
          <PortableText value={settings.technology}/>
        </div>
        <div className="col mb-6">
          <h4 className="uppercase mb-2">Clients</h4>
          <PortableText value={settings.clients}/>
        </div>
        <div className="col mb-6">
          <h4 className="uppercase mb-2">Contact</h4>
          <ul>
            <li><a href={settings.linkedin_url} target="_blank">LinkedIn</a></li>
            <li><a href={`mailto:${settings.email}`} target="_blank">{settings.email}</a></li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  )
}