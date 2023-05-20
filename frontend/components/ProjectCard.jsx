import Link from "next/link";
import { urlFor } from "@/context/context";


export default function ProjectCard({project}) {

  return (
    <section className='project-card p-6 md:flex items-end mb-8 even:flex-row-reverse'>
      <div className="image max-sm:mb-6 saturate-0 hover:saturate-100 transition">
      <Link href={`/project/${project.slug.current}`}>
        { project.featuredImage && <img src={urlFor(project.featuredImage).url()} />}
        </Link>
      </div>
      <div className="text md:px-6">
        <p className="mb-2">{project.year}</p>
        <Link href={`/project/${project.slug.current}`}>
          <h3 className="text-5xl mb-2">{project.title}</h3>
        </Link>
          <p>{project.blurb}</p>
      </div>
    </section>
  )
}