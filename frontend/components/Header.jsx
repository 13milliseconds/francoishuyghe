import { useSettings } from "@/context/context";
import Link from "next/link";

export default function Header() {
  const {settings, showAbout, setShowAbout} = useSettings()

  const handleAboutButton = () => {
    setShowAbout(!showAbout)
  }

  return (
    <div className='header flex px-6 py-2 justify-between align-center'>
        <h1 className="m:text-6xl text-5xl font-bold uppercase"><Link href="/">{settings.title}</Link></h1>
      <div>
        <button onClick={handleAboutButton} className="contact bg-lime-400 px-4 py-2 rounded-lg uppercase text-2xl">about</button>
      </div>
    </div>
  )
}