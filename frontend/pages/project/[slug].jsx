import { getAllProjects, getSingleProject } from "@/lib/database";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Link from "next/link";
import {PortableText} from '@portabletext/react'
import Image from "@/components/Image";
import { urlFor } from "@/context/context";

const components = {
  types: {
    image: ({value}) => <Image value={value} />
  }
}

export default function ProjectPage({project}){
    
    return <main className={`${inter.className} min-h-screen p-6`}>
      <div className="back mb-6">
        <Link href='/'>{'<  Back'}</Link>
      </div>
        <article>
          <header className="md:flex justify-between">
            <div className="max-w-6xl">
            <h1 className="text-2xl mb-2">{project.title}</h1>
            <p>{project.blurb}</p>
            { project.featuredImage && <img src={urlFor(project.featuredImage).url()} />}
            </div>
            { project.technology && 
            <div>
              <h3>Technology</h3>
              <PortableText value={project.technology} />
            </div>}
          </header>
          <div className="max-w-4xl">
          <PortableText value={project.content} components={components} />
        </div>
        </article>
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