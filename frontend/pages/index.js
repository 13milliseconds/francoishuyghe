import { useSettings } from "@/context/context";
import Portfolio from '@/components/Portfolio';
import { getAllProjects } from '@/lib/database';
import { Inter } from 'next/font/google'
import Head from "next/head";
const inter = Inter({ subsets: ['latin'] })

export default function Home({projects}) {
  const {settings} = useSettings()

  return (
    <main className={`${inter.className} min-h-screen p-6`}>
      <Head>
        <title>{settings.title}</title>
        <meta
          name="description"
          content={settings.tagline}
        />
      </Head>

      <div className="max-w-4xl mb-10">
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