import { useSettings } from "@/context/context";
import {PortableText} from '@portabletext/react'

export default function Footer() {
  const settings = useSettings()

  return (
    <footer className='p-6 bg-black text-white'>
      <div className="max-w-6xl">
      <h2 className="text-4xl mb-6">About</h2>
      <p className="mb-6">{settings.about}</p>

      <div className="md:flex md:justify-between">
        <div className="mb-6">
          <h3>Technology</h3>
          <PortableText value={settings.technology}/>
        </div>
        <div className="col mb-6">
          <h3>Clients</h3>
          <PortableText value={settings.clients}/>
        </div>
        <div className="col mb-6">
          <h3>Contact</h3>
          <ul>
            <li><a href={settings.linkedin} target="_blank">LinkedIn</a></li>
            <li><a href={`mailto:${settings.email}`} target="_blank">{settings.email}</a></li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  )
}