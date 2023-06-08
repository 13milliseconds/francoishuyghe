import { getAllProjects, getSingleProject } from "@/lib/database";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Head from "next/head";
import {PortableText} from '@portabletext/react'
import ImageBlock from "@/components/ImageBlock";
import { useSettings } from "@/context/context";

const components = {
  types: {
    image: ({value}) => <ImageBlock value={value} />
  }
}

export default function ProjectPage({project}){
  const { settings } = useSettings()

  const onBackToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
    
    return <main className={`${inter.className} min-h-screen p-6  bg-white`}>
      <Head>
        <title>{`${settings.title} | ${project.title}`}</title>
        <meta
          name="description"
          content={project.blurb}
        />
      </Head>
      <div className="back mb-6">
      </div>
        <article>
          <header className="mb-12">
            { project.technology && 
            <div className="project-technologies">
              <PortableText value={project.technology} />
            </div>}
            <div className="flex align-items-top">
              <h1 className="text-5xl mb-2">{project.title}</h1>
              <div className="project-year">{project.year}</div>
            </div>
            { project.featuredImage && <ImageBlock value={project.featuredImage} classes="py-6" />}
            <p className="text-3xl max-w-2xl ml-auto">{project.blurb}</p>
          </header>
          <div className="project-content max-w-xl">
            <PortableText value={project.content} components={components} />
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