import { useRef, useEffect } from "react"
import { useSettings } from "@/context/context"
import cntl from 'cntl';
import Blocks from "./Blocks";
import ImageBlock from "./ImageBlock";

export default function About() {
  const {settings, showAbout} = useSettings()
  const AboutEl = useRef()

  //Make sure the About section is always scrolled up
  useEffect(() => {
    if(showAbout){
      // document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      AboutEl.current.scrollTo(0,0)
    } else {
      document.documentElement.style.overflow = 'overlay'
    }
  }, [showAbout])

  const aboutCN = cntl`
  fixed
  top-[100vh]
  w-screen
  h-screen
  pb-20
  md:pb-6
  md:h-auto
  md:top-auto
  md:bottom-0
  overflow-auto
  p-6 
  z-10
  bg-black 
  text-white 
  ${showAbout && 'sticky-about'}
  `;

  return (
    <footer id="about" className={aboutCN} ref={AboutEl}>
      <h2 className="text-6xl mb-6">About</h2>
      <div className="grid md:grid-flow-col gap-4 grid-col-1 md:grid-col-4">

      {/* BIO */}
      <div className="max-w-4xl md:col-span-3">
        <p className="mb-6">{settings.about}</p>
      </div>

      {/* AVATAR */}
      <div className="mb-12 md:order-2 md:row-span-2">
      <div className="avatar rounded-full overflow-hidden w-52 h-52">
        {settings.avatar ? <ImageBlock value={settings.avatar} /> : null}
      </div>
      </div>

      {/* COLUMNS */}
        <div className="mb-6">
          <h4 className="border-b pb-2 mb-2 max-w-[10rem]">Technology</h4>
          <Blocks value={settings.technology}/>
        </div>

        <div className="col mb-6">
          <h4 className="border-b pb-2 mb-2 max-w-[10rem]">Clients</h4>
          <Blocks value={settings.clients}/>
        </div>

        <div className="col mb-6">
          <h4 className="border-b pb-2 mb-2 max-w-[10rem]">Contact</h4>
          In the mountains near New York
          <ul>
            <li><a href={`mailto:${settings.email}`} target="_blank">{settings.email}</a></li>
            <li><a href={settings.linkedin_url} target="_blank" className="underline">LinkedIn</a></li>
            <li><a href={settings.github_url} target="_blank" className="underline">Github</a></li>
          </ul>
        </div>


      </div>
    </footer>
  )
}