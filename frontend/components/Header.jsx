import { useSettings } from "@/context/context";
import cntl from 'cntl';
import Link from "next/link";

const aboutCN = cntl`
  fixed
  md:relative 
  z-20
  top-6 
  right-6 
  contact 
  bg-lime-400 
  px-4 py-2 
  rounded-lg 
  uppercase 
  text-2xl
`;

export default function Header() {
  const {settings, showAbout, setShowAbout} = useSettings()

  const handleAboutButton = () => {
    setShowAbout(!showAbout)
  }

  return (
    <div className='header flex px-6 py-2 justify-between align-center'>
        <h1 className="m:text-6xl text-5xl font-bold uppercase"><Link href="/">{settings.title}</Link></h1>
      <div>
        <button 
        onClick={handleAboutButton} 
        className={aboutCN}
        >
          {showAbout ? `Close` : `About`}
        </button>
      </div>
    </div>
  )
}