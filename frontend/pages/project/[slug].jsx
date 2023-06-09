import { getAllProjects, getSingleProject } from "@/lib/database";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Head from "next/head";
import Blocks from "@/components/Blocks";
import ImageBlock from "@/components/ImageBlock";
import { useSettings } from "@/context/context";
import mixpanel from "mixpanel-browser";

export default function ProjectPage({project}){
  const { settings } = useSettings()
  const {title, year, blurb, website, github_link, technology, featuredImage, content} = project

  mixpanel.track_pageview();

  const onBackToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
    
    return <main className={`${inter.className} min-h-screen p-6  bg-white`}>
      <Head>
        <title>{`${settings.title} | ${title}`}</title>
        <meta
          name="description"
          content={blurb}
        />
        <meta property="og:url"                content={`https://francoishuyghe.com`} />
        <meta property="og:type"               content="article" />
        <meta property="og:title"              content={title} />
        <meta property="og:description"        content={blurb} />
      </Head>
      <div className="back mb-6">
      </div>
        <article>
          <header className="">
            { technology && 
            <div className="project-technologies">
              <Blocks value={technology} />
            </div>}
            <div className="flex align-items-top">
              <h1 className="text-5xl mb-2">{title}</h1>
              <div className="project-year">{year}</div>
            </div>
            { featuredImage && <ImageBlock value={featuredImage} classes="py-6" />}
            { (website || github_link) &&
              <ul className="links text-2xl mb-12 md:mb-0 md:h-0">
                {website && <li className="mb-2"><a target="_blank" className="hover:underline" href={website}>Website</a></li>}
                {github_link && <li><a  target="_blank" href={github_link} className="hover:underline">Github</a></li>}
                </ul>
            }
          </header>
          <div className="project-content">
            <Blocks value={content}/>
          </div>
        </article>
        <div onClick={onBackToTop} className="cursor-pointer hover:underline">^ Back to Top</div>
    </main>
}

export async function getStaticProps({params}) {
    const project = await getSingleProject(params.slug)

    return {
      props: {
        project
      }
    };
  }

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const projects = await getAllProjects()

  // Get the paths we want to prerender
  const paths = projects.map((project) => ({
    params: { slug: project.slug.current },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}