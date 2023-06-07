import { useSettings } from "@/context/context";
import Link from "next/link";

export default function Header() {
  const {settings, showAbout, setShowAbout} = useSettings()

  const handleAboutButton = () => {
    setShowAbout(!showAbout)
  }

  return (
    <div className='header md:flex p-2 justify-between'>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold"><Link href="/">{settings.title}</Link></h1>
        <p className="text-3xl mb-6">{settings.tagline}</p>
      </div>
      <div>
        <button onClick={handleAboutButton} className="contact bg-lime-400 px-4 py-2 rounded-lg uppercase text-2xl">about</button>
      </div>
    </div>
  )
}