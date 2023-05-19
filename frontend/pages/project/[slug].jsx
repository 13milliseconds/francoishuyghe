import { getAllProjects, getSingleProject } from "@/lib/database";
import Link from "next/link";
import {PortableText} from '@portabletext/react'
import Image from "@/components/Image";

const components = {
  types: {
    image: ({value}) => <Image value={value} />
  }
}

export default function ProjectPage({project}){
    
    return <div className="project max-w-4xl mx-auto">
      <div className="back mb-6">
        <Link href='/'>{'<  Back'}</Link>
      </div>
        <h1 className="text-2xl mb-2">{project.title}</h1>
        <PortableText value={project.content} components={components} />
    </div>
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