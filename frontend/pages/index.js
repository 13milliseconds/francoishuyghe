
import Portfolio from '@/components/Portfolio';
import { getAllProjects, getSettings } from '@/lib/database';
import { Inter } from 'next/font/google'
import Head from "next/head";
import Blocks from '@/components/Blocks';
const inter = Inter({ subsets: ['latin'] })

export default function Home({projects, settings}) {

  mixpanel.track_pageview();

  return (<main className={`${inter.className} min-h-screen p-6 bg-white`}>
      <Head>
        <title>{settings.title}</title>
        <meta
          name="description"
          content={settings.tagline}
        />
        <meta property="og:url"                content="https://francoishuyghe.com" />
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content={settings.title} />
        <meta property="og:description"        content={settings.tagline} />
        <meta property="og:image"              content={settings.social_image} />
      </Head>

      <div className="max-w-4xl mb-10">
        <p className="text-xl md:text-3xl">{settings.tagline}</p>
      </div>
      <Portfolio projects={projects} />
      <div id="description" className='mt-12 w-max-sm'>
        <Blocks value={settings.website_description}/>
      </div>
    </main>
  )
}


export async function getStaticProps() {
  const projects = await getAllProjects()
  const settings = await getSettings()

  return {
    props: {
      projects,
      settings
    }
  };
}