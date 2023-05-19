import { getSettings } from "@/lib/database";
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { useContext, createContext, useEffect, useState } from "react";

export const SettingsContext = createContext(null)

const defaultSettings = {
  title: 'Francois Huyghe',
}

export function SettingsProvider ({ children }){
  const [settings, setSettings] = useState(defaultSettings)

  useEffect(()=>{
    handleGetSettings()
  }, [])

  const handleGetSettings = async () => {
    const loadedSettings = await getSettings()
    setSettings(loadedSettings)
  }

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  return useContext(SettingsContext)
}


export const client = createClient({
    projectId: "4pqktepv",
    dataset: "production",
    apiVersion: "2023-05-01",
    useCdn: false
  });

  // Fetch Images url from Sanity
const builder = imageUrlBuilder(client)
export function urlFor(source) {
  return builder.image(source)
}