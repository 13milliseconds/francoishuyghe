import { useSettings } from "@/context/context";
import Link from "next/link";
import Avatar from "./Avatar";

export default function Header() {
  const {settings, showAbout, setShowAbout} = useSettings()

  const handleAboutButton = () => {
    setShowAbout(!showAbout)
  }

  return (
    <div className='header flex px-6 py-2 justify-between align-center'>
      <h1 className="m:text-6xl pr-24 text-5xl font-bold uppercase"><Link href="/">{settings.title}</Link></h1>
      <div>
        <Avatar showAbout={showAbout} onClick={handleAboutButton} />
      </div>
    </div>
  )
}