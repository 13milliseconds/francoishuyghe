import { useSettings } from "@/context/context"

export default function Background() {
    const {showAbout, setShowAbout} = useSettings()
    return <div 
        id='background'
        className={`${showAbout && 'madeVisible'} bg-black h-screen w-screen fixed z-2 top-0 left-0 opacity-70 transition-opacity` }
        onClick={() => setShowAbout(false)}
    ></div>
}