import { useSettings } from "@/context/context";
import Portfolio from '@/components/Portfolio';
import { getAllProjects } from '@/lib/database';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home({projects}) {
  const {settings} = useSettings()

  return (
    <main className={`${inter.className} min-h-screen p-6`}>
      <div className="max-w-4xl mb-6">
        <p className="text-xl md:text-3xl">{settings.tagline}</p>
      </div>
      <Portfolio projects={projects} />
    </main>
  )
}


export async function getStaticProps() {
  const projects = await getAllProjects()

  return {
    props: {
      projects
    }
  };
}